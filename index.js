import fs, { readFileSync, writeFileSync, writeSync } from 'fs';
import querystring from 'querystring';
import express from 'express';
import open from 'open';
import { closest, distance } from 'fastest-levenshtein';
import dotenv from 'dotenv';
dotenv.config();

import tracksForSearch from './tracks-for-search.js';
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const playlistId = process.env.SPOTIFY_PLAYLIST_ID; // Replace with your playlist ID
const outputFile = 'not-found-tracks.txt'; // File to store not found tracks

console.log(clientId);

const redirectUri = 'http://localhost:3000/callback';
const scopes = 'playlist-modify-public playlist-modify-private'; // Add any other necessary scopes
const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const app = express();

const getToken = async (code) => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${auth}`,
    },
    body: querystring.stringify({
      code,
      scopes,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const data = await response.json();
  return data.access_token;
};

const searchTrack = async (token, artist, track) => {
  if (artist.length === 0 || track.length === 0) {
    return null;
  }

  const searchQuery = `https://api.spotify.com/v1/search?query=track:"${encodeURIComponent(
    track,
  )}"+artist:"${encodeURIComponent(
    artist,
  )}"&type=track&locale=*&offset=0&limit=100`;

  console.log('search...');
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchQuery,
    )}&type=track`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();
  const artists = (data.tracks?.items || []).reduce((acc, val) => {
    const artist = val.artists?.map((art) => art.name).join(' ') || '';
    if (artist && acc[artist] === undefined) {
      acc[artist] = val;
    }

    return acc;
  }, {});

  if (Object.keys(artist) === 0) {
    return null;
  }

  // console.log(track, artist);
  // console.log(data.tracks.items.map((val) => val.name));
  const top = closest(artist, Object.keys(artists));

  if (!top) {
    return null;
  }

  const artistCoef = (artist.length - distance(artist, top)) / artist.length;
  const nameCoef =
    (track.length - distance(track, artists[top].name)) / track.length;

  if (artistCoef + nameCoef > 1.3) {
    return artists[top];
  }
};

const addToPlaylist = async (token, playlistId, trackId) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uris: [`spotify:track:${trackId}`],
          position: 0,
        }),
        method: 'POST',
      },
    );

    if (response.status === 201) {
      console.log('Track added to the playlist successfully.');
    } else if (response.status === 403) {
      console.error(
        'Forbidden: Make sure your access token has the necessary permissions to modify the playlist.',
      );
    } else if (response.status === 401) {
      console.error(
        'Unauthorized: Check if your access token is valid and correctly obtained.',
      );
    } else {
      console.error(
        `Error adding track to playlist. Status code: ${response.status}`,
      );
    }
  } catch (error) {
    console.error('Error adding track to playlist:', error);
  }
};

const getPlaylistTracks = async (token) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();
  return data.items.map((item) => item.track.id);
};

const main = async (token) => {
  const notFoundTracksContent = fs.readFileSync(outputFile);
  const trackIdMap = JSON.parse(
    fs.readFileSync('track-id-map.json').toString(),
  );
  const notFoundTracks = new Set(notFoundTracksContent.toString().split('\n'));
  const newNotFoundTracks = new Set();
  const playlistTracks = await getPlaylistTracks(token);
  const len = tracksForSearch.length;

  for (let i = 0; i < tracksForSearch.length; i++) {
    try {
      console.log('Track: ', i);
      console.log(`${(Math.floor((i / len) * 100) / 100) * 100}%`);
      const { track, artist } = tracksForSearch[i];
      const trackForSearchName = `${artist} – ${track}`;

      const foundTrack =
        trackIdMap[trackForSearchName] ||
        (await searchTrack(token, artist, track));

      if (foundTrack) {
        if (playlistTracks.includes(foundTrack.id)) {
          console.log(`Track is already in the playlist: ${artist} – ${track}`);
          continue;
        }

        const foundArtist = foundTrack.artists
          ?.map((val) => val.name)
          .join(', ');
        console.log(`Found track: ${foundArtist} – ${foundTrack.name}`);

        await addToPlaylist(token, playlistId, foundTrack.id);
        trackIdMap[trackForSearchName] = {
          id: foundTrack.id,
          name: foundTrack.name,
          artist: foundTrack.artist,
        };
      } else if (!notFoundTracks.has(trackForSearchName)) {
        console.log(`Track not found: ${trackForSearchName}`);
        newNotFoundTracks.add(trackForSearchName); // Store the search query in not found tracks array
      }
    } catch (e) {
      console.error('Error:', e);
    }
  }

  try {
    if (newNotFoundTracks.size) {
      fs.appendFileSync(
        outputFile,
        '\n' + [...newNotFoundTracks.values()].join('\n'),
      );
      console.log(`Not found tracks written to ${outputFile}`);
    }
    writeFileSync('track-id-map.json', JSON.stringify(trackIdMap));
  } catch (e) {
    console.error('Error:', e);
  }
};

app.get('/login', (req, res) => {
  const authorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes,
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  open(authorizeUrl);
});

app.get('/callback', async (req, res) => {
  try {
    const code = req.query.code;
    const token = await getToken(code);
    writeFileSync('token.txt', token);
    main(token);
  } catch (error) {
    console.error('Error during callback:', error);
  }
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});

const foundToken = readFileSync('token.txt').toString();

if (foundToken.length) {
  main(foundToken);
}
