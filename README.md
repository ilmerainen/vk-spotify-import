# Spotify Playlist Importer 🎵

This script allows you to import tracks from a list to your Spotify playlist using non-exact search.

## Setup

1. Install necessary dependencies with `npm install`.
2. `cp .env.example .env` and add variables.
3. Run the application with `npm start`.

## Usage

### Prerequisites
- Node.js installed on your machine.
- Spotify Developer account.

### Steps
1. Run the application.
2. Navigate to `http://localhost:3000/login` in your browser.
3. Authorize the application to access your Spotify account.
4. The script will search and attempt to add tracks from the provided list to your playlist.

## Features

- **Levenshtein-based Search**: Implements the Levenshtein distance algorithm for non-exact track matching.
- **Track ID Cache**: Utilizes `track-id-map.json` to cache discovered tracks, optimizing subsequent retrieval.
- **Spotify Playlist Import**: Adds identified tracks to the specified Spotify playlist.
- **Handling Unfound Tracks**: Records tracks not found on Spotify in the `not-found-tracks.txt` file.
- **Automated Access Token Management**: Automatically handles access token retrieval and utilization after authorization.
- **Error Handling**: Provides comprehensive error logging for easier issue identification and resolution.

## Files

- `tracks-for-search.js`: List of tracks to search and add.
- `token.txt`: Stores the access token after authorization.
- `track-id-map.json`: Tracks found and added to the playlist.


## Troubleshooting

- If encountering issues, check the error logs or revisit the authorization process.
- Ensure necessary permissions are granted for the playlist modification.

## Note

Remember to replace placeholders with your actual Spotify credentials and playlist ID in the `.env` file.

---

Feel free to contribute and enhance this script! 🚀

