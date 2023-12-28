const tracks = [
  {
    track: 'CUTE AGGRESSION',
    artist: 'Nicole Dollanganger',
  },
  {
    artist: 'Bell Witch & Aerial Ruin',
    track: 'The Bastard Wind',
  },
  {
    track: 'Duvet',
    artist: 'Boa',
  },
  {
    track: "We're All Alone",
    artist: 'Architects',
  },
  {
    track: "Devil's Island",
    artist: 'Architects',
  },
  {
    track: 'Gone With The Wind',
    artist: 'Architects',
  },
  {
    track: "I'll Be Yours",
    artist: 'Placebo',
  },
  {
    track: 'Episode #1 (Dreams that come a Thing - Live Version)',
    artist: 'Босх с тобой',
  },
  {
    track: "There's No Such Thing As Destiny",
    artist: 'Emo Side Project',
  },
  {
    track: 'and then, it swallowed me',
    artist: 'Nohidea, killedmyself, Delta Sleep',
  },
  {
    track: 'tremolo+delay',
    artist: 'toe',
  },
  {
    track: "Jafari's Revenge",
    artist: 'STAGE KIDS',
  },
  {
    track: 'グッドバイ Goodbye　Album Version feat. Toki Asako 土岐麻子',
    artist: 'toe',
  },
  {
    track: 'Nearer My God',
    artist: 'Foxing',
  },
  {
    track: 'Tender',
    artist: 'Yvette Young',
  },
  {
    track: 'A sigh in the storm',
    artist: 'That field of red flowers is actually a grass fire',
  },
  {
    track: 'Plumes in the distance',
    artist: 'That field of red flowers is actually a grass fire',
  },
  {
    track: 'Wavering hope',
    artist: 'That field of red flowers is actually a grass fire',
  },
  {
    track: 'Stars become pinholes, landscapes become lines',
    artist: 'That field of red flowers is actually a grass fire',
  },
  {
    track: 'A sigh in the storm II',
    artist: 'That field of red flowers is actually a grass fire',
  },
  {
    track: 'Stillborn Knowledge',
    artist: 'White Ward',
  },
  {
    track: "Je N'en Connais Pas La Fin",
    artist: 'Rosetta',
  },
  {
    track: 'Nusquam',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'слоукор-эмо',
    artist: 'макулатура',
  },
  {
    track: 'Have You Seen Me?',
    artist: 'Nicole Dollanganger',
  },
  {
    track: 'CUTE AGGRESSION',
    artist: 'Nicole Dollanganger',
  },
  {
    track: '2015 холодных зим',
    artist: 'культура курения',
  },
  {
    track: 'Never Meant',
    artist: 'American Football',
  },
  {
    track: 'Stone in focus',
    artist: 'Aphex Twin',
  },
  {
    track: 'The Bastard Wind',
    artist: 'Bell Witch & Aerial Ruin',
  },
  {
    track: 'Heaven Torn Low I (The Passage)',
    artist: 'Bell Witch & Aerial Ruin',
  },
  {
    track: 'Heaven Torn Low II (The Toll)',
    artist: 'Bell Witch & Aerial Ruin',
  },
  {
    track: 'Prelude',
    artist: 'Bell Witch & Aerial Ruin',
  },
  {
    track: 'The Unbodied Air',
    artist: 'Bell Witch & Aerial Ruin',
  },
  {
    track: 'In Mcdonalds',
    artist: 'Burial',
  },
  {
    track: 'Building',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Entrance',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Kitchen',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Rooftop',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Dining Room',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Exit',
    artist: 'This Will Destroy You',
  },
  {
    track: 'Garden',
    artist: 'This Will Destroy You',
  },
  {
    track: "Iv Wasteland's Tear",
    artist: 'Lakehøuse',
  },
  {
    track: 'V Portrait of Bones',
    artist: 'Lakehøuse',
  },
  {
    track: 'Vi Anything to Breathe',
    artist: 'Lakehøuse',
  },
  {
    track: 'Vii Beautiful Moon Kisses the Ugly Flower',
    artist: 'Lakehøuse',
  },
  {
    track: 'Viii Cave Full of Stars',
    artist: 'Lakehøuse',
  },
  {
    track: 'Ix I Will Be the Failure of Every Dream',
    artist: 'Lakehøuse',
  },
  {
    track: 'X Across the Unknown',
    artist: 'Lakehøuse',
  },
  {
    track: 'Artifice',
    artist: 'BLUE NOISE',
  },
  {
    track: 'What a Shame',
    artist: 'BLUE NOISE',
  },
  {
    track: "Haven't the Time",
    artist: 'BLUE NOISE',
  },
  {
    track: 'Before God',
    artist: 'BLUE NOISE',
  },
  {
    track: 'Thanks for Trying',
    artist: 'BLUE NOISE',
  },
  {
    track: 'World of Harm',
    artist: 'BLUE NOISE',
  },
  {
    track: 'World of Love',
    artist: 'BLUE NOISE',
  },
  {
    track: 'Happens to Everyone',
    artist: 'BLUE NOISE',
  },
  {
    track: 'Liturgy',
    artist: 'BLUE NOISE',
  },
  {
    track: 'Violence',
    artist: 'Andy Stott',
  },
  {
    track: 'Falaise',
    artist: 'Floating Points',
  },
  {
    track: 'Last Bloom',
    artist: 'Floating Points',
  },
  {
    track: 'Anasickmodular',
    artist: 'Floating Points',
  },
  {
    track: 'Requiem for CS70 and Strings',
    artist: 'Floating Points',
  },
  {
    track: 'Karakul',
    artist: 'Floating Points',
  },
  {
    track: 'LesAlpx',
    artist: 'Floating Points',
  },
  {
    track: 'Bias',
    artist: 'Floating Points',
  },
  {
    track: 'Environments',
    artist: 'Floating Points',
  },
  {
    track: 'Birth',
    artist: 'Floating Points',
  },
  {
    track: 'Sea-Watch',
    artist: 'Floating Points',
  },
  {
    track: 'Apoptose, Pt. 1',
    artist: 'Floating Points',
  },
  {
    track: 'Apoptose, Pt. 2',
    artist: 'Floating Points',
  },
  {
    track: 'LesAlpx',
    artist: 'Floating Points',
  },
  {
    track: 'Retrace',
    artist: 'Lusine',
  },
  {
    track: 'Ticking Hands (feat. Sarah McIlwain)',
    artist: 'Lusine feat. Sarah McIlwain',
  },
  {
    track: 'Nothing But Lines',
    artist: 'The Flashbulb',
  },
  {
    track: 'Зелёный коридор',
    artist: 'Петля Пристрастия',
  },
  {
    track: '28 organ 1.1 [ru,ec,+9] | bonus 2017',
    artist: 'Aphex Twin',
  },
  {
    track: 'CIRCLONT6A',
    artist: 'AFX',
  },
  {
    track: 'Vordhosbn',
    artist: 'Aphex Twin',
  },
  {
    track: 'Gently',
    artist: 'Karavelo',
  },
  {
    track: 'nght[skai]',
    artist: 'invention_',
  },
  {
    track: 'Crystal Silence',
    artist: 'Psalm Trees',
  },
  {
    track: 'What You Gonna Do (2018) [2zg]',
    artist: 'Hentzup',
  },
  {
    track: 'Breathe Us',
    artist: 'Annabel Lee',
  },
  {
    track: 'Believe',
    artist: 'Annabel Lee',
  },
  {
    track: 'My Homeland',
    artist: 'Annabel Lee',
  },
  {
    track: 'Invisible Barriers',
    artist: 'Annabel Lee',
  },
  {
    track: 'Find Me',
    artist: 'Annabel Lee',
  },
  {
    track: 'Could It Be The Siren Loves?',
    artist: 'Annabel Lee',
  },
  {
    track: '(1849)',
    artist: 'Annabel Lee',
  },
  {
    track: 'Alone',
    artist: 'Annabel Lee',
  },
  {
    track: 'Astoria',
    artist: 'Sleepdealer',
  },
  {
    track: 'you should have known',
    artist: 'nymano x Pandrezz',
  },
  {
    track: 'Closer',
    artist: 'Aso',
  },
  {
    track: 'when the leaves come falling down',
    artist: "j'san.",
  },
  {
    track: 'Forether',
    artist: 'Liphe',
  },
  {
    track: 'pictochat',
    artist: 'Dwyer',
  },
  {
    track: 'Morningview',
    artist: 'deeB',
  },
  {
    track: 'Smoovtip',
    artist: 'Gonza',
  },
  {
    track: 'III',
    artist: 'Босх с тобой',
  },
  {
    track: 'Duvet',
    artist: 'Boa',
  },
  {
    track: 'Banquet (OST Life is Strange 2 )',
    artist: 'Bloc Party',
  },
  {
    track: 'raindrops',
    artist: 'Kazam',
  },
  {
    track: 'life is strange',
    artist: 'scribe',
  },
  {
    track: 'aconitum',
    artist: 'stackone',
  },
  {
    track: 'LIKE SILK',
    artist: 'SLEEPDEALER X GUDO REWINDS',
  },
  {
    track: "i'll never know",
    artist: 'nymano',
  },
  {
    track: "l'aldilà",
    artist: 'peter bark',
  },
  {
    track: 'Light Year Love',
    artist: 'Kendall Miles x Somar',
  },
  {
    track: 'home',
    artist: 'kupla',
  },
  {
    track: 'far apart',
    artist: 'idealism',
  },
  {
    track: 'Mola',
    artist: 'Philanthrope feat. Tusken.',
  },
  {
    track: 'how you think',
    artist: 'too ugly x dweeb',
  },
  {
    track: 'emerald.',
    artist: 'kupla',
  },
  {
    track: "l'aldilà",
    artist: 'peter dark',
  },
  {
    track: 'right now',
    artist: 'through & through',
  },
  {
    track: 'no way back',
    artist: 'oatmello',
  },
  {
    track: "louie's lullaby (rest in peace)",
    artist: 'harris cole',
  },
  {
    track: 'Memory Fragments (feat. StackOne)',
    artist: 'BluntOne',
  },
  {
    track: 'safe, now',
    artist: 'harris cole & aso',
  },
  {
    track: 'phosphenes (from Hiraeth EP)',
    artist: 'idealism',
  },
  {
    track: 'Black Brick',
    artist: 'Deafheaven',
  },
  {
    track: 'lonely day',
    artist: 'lofi hiphop mix',
  },
  {
    track: 'Gwety Mernans',
    artist: 'Aphex Twin',
  },
  {
    track: 'Undercurrent 1 (Morphic Resonance)',
    artist: 'Hammock',
  },
  {
    track: 'Lightness',
    artist: 'Everlasting Summer',
  },
  {
    track:
      'Почему вы не достигнете своих целей и что вы можете с этим сделать [NirAndFar]',
    artist: 'Тарасов Валентин',
  },
  {
    track: '10. A Hunger Too Deep',
    artist: 'Atrium Carceri - Codex [2018]',
  },
  {
    track: 'Вверх по лестнице',
    artist: 'Ночные грузчики',
  },
  {
    track: 'Petrichor',
    artist: 'Karg',
  },
  {
    track: 'Crimson Waves Upon Tangerine Skies',
    artist: 'Last Kiss To Die Of Visceroth',
  },
  {
    track: 'Risau',
    artist: 'Last Kiss To Die Of Visceroth',
  },
  {
    track: 'Behold, A Shattered Enchantment',
    artist: 'Last Kiss To Die Of Visceroth',
  },
  {
    track: 'Silhouettes',
    artist: 'American Football',
  },
  {
    track: '(E4) Untitled [Lichen]',
    artist: 'Aphex Twin',
  },
  {
    track: 'Stone in focus',
    artist: 'Aphex Twin',
  },
  {
    track: 'Rhubarb',
    artist: 'Aphex Twin',
  },
  {
    track: 'Belenos',
    artist: 'Toundra',
  },
  {
    track: '"02:16"',
    artist: 'KOFIN',
  },
  {
    track: 'Question',
    artist: 'KOFIN',
  },
  {
    track: 'Titanic',
    artist: 'KOFIN',
  },
  {
    track: 'Intercom №47',
    artist: 'KOFIN',
  },
  {
    track: 'Comeback',
    artist: 'KOFIN',
  },
  {
    track: 'Le dogme du simulacre',
    artist: 'Milanku',
  },
  {
    track: 'Densité du réel',
    artist: 'Milanku',
  },
  {
    track: 'Le mouvement du non-vivant',
    artist: 'Milanku',
  },
  {
    track: 'Le visage du tourment',
    artist: 'Milanku',
  },
  {
    track: 'Fragments de néant',
    artist: 'Milanku',
  },
  {
    track: 'TIBET',
    artist: 'Space Of Variations',
  },
  {
    track: 'Accolades',
    artist: 'Maybeshewill',
  },
  {
    track: 'The Here and Hereafter',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Dead Sea',
    artist: "Erida's Garden",
  },
  {
    track: 'В темноте',
    artist: 'Noize MC',
  },
  {
    track: 'Зубы мудрости',
    artist: 'Noize MC',
  },
  {
    track: 'Детка, послушай',
    artist: 'Noize MC',
  },
  {
    track: 'В темноте (Brodsky version)',
    artist: 'Noize MC',
  },
  {
    track: 'Death Is Not Defeat',
    artist: 'Architects',
  },
  {
    track: 'движняковый рок микстейп',
    artist: 'подвал раскольникова',
  },
  {
    track: 'Atoms Aligned, Coming Undone',
    artist: 'Sylvaine',
  },
  {
    track: 'Почему лампочка греется, а провода холодные',
    artist: 'My Infinite Tea',
  },
  {
    track: 'Selected Ambient Works Volume II',
    artist: 'Aphex Twin',
  },
  {
    track: 'грустной тяжелой музыки микстейп',
    artist: 'подвал раскольникова',
  },
  {
    track: 'Нахуй тебя и твоих друзей',
    artist: 'Anacondaz',
  },
  {
    track: 'Твоему новому парню',
    artist: 'Anacondaz',
  },
  {
    track: 'Дубак',
    artist: 'Anacondaz',
  },
  {
    track: 'Не курю',
    artist: 'Anacondaz',
  },
  {
    track: 'Удивительные приключения мозга во время сна [National Geographic]',
    artist: 'Тарасов Валентин',
  },
  {
    track: 'Ruinen',
    artist: 'AwAy',
  },
  {
    track: 'Ödnis',
    artist: 'AwAy',
  },
  {
    track: 'Verwachsene Pfade',
    artist: 'AwAy',
  },
  {
    track: 'Verfallene Stadt',
    artist: 'AwAy',
  },
  {
    track: 'Лучшее завтра',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'whatever',
    artist: 'nai harvest',
  },
  {
    track: 'You Without End',
    artist: 'Deafheaven',
  },
  {
    track: 'Honeycomb',
    artist: 'Deafheaven',
  },
  {
    track: 'Canary Yellow',
    artist: 'Deafheaven',
  },
  {
    track: 'Near',
    artist: 'Deafheaven',
  },
  {
    track: 'Glint',
    artist: 'Deafheaven',
  },
  {
    track: 'Night People',
    artist: 'Deafheaven',
  },
  {
    track: 'Worthless Animal',
    artist: 'Deafheaven',
  },
  {
    track: 'Monument',
    artist: 'Counterparts',
  },
  {
    track: 'Selfishly I Sink',
    artist: 'Counterparts',
  },
  {
    track: 'We Forgive',
    artist: 'Counterparts',
  },
  {
    track: 'Салют (ft. Озёра)',
    artist: 'Синекдоха Монток',
  },
  {
    track: 'Юный Мученик',
    artist: 'Синекдоха Монток',
  },
  {
    track: 'Яблочко (LUV)',
    artist: 'Синекдоха Монток',
  },
  {
    track: 'Как Не Быть',
    artist: 'Синекдоха Монток',
  },
  {
    track: 'Русская книга мертвых',
    artist: 'Синекдоха Монток',
  },
  {
    track: 'Sunmetrical',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Light Behind A Shadow',
    artist: 'Chrome Waves',
  },
  {
    track: 'Transformation',
    artist: 'Grauzeit',
  },
  {
    track: 'e',
    artist: 'happiness in veins',
  },
  {
    track: 'Transmute The Season',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Duty Sublime',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Surge',
    artist: 'Bliss Signal',
  },
  {
    track: 'Taciturn',
    artist: 'Stone Sour',
  },
  {
    track: 'Snuff',
    artist: 'Slipknot',
  },
  {
    track: 'III',
    artist: 'Au-Dessus',
  },
  {
    track: '200 Days',
    artist: 'Atrium Carceri',
  },
  {
    track: 'Codex',
    artist: 'Atrium Carceri',
  },
  {
    track: 'Take A Chance',
    artist: 'Flume feat. Little Dragon',
  },
  {
    track: 'Зал ожидания',
    artist: 'Те дни прошли, их не вернуть',
  },
  {
    track: 'Московские прятки',
    artist: 'Те дни прошли, их не вернуть',
  },
  {
    track: 'Dar Now',
    artist: 'The Evpatoria Report',
  },
  {
    track: 'day in day out',
    artist: 'architects',
  },
  {
    track: 'learn to live',
    artist: 'architects',
  },
  {
    track: 'delete, rewind',
    artist: 'architects',
  },
  {
    track: 'btn',
    artist: 'architects',
  },
  {
    track: 'an open letter to myself',
    artist: 'architects',
  },
  {
    track: 'the blues',
    artist: 'architects',
  },
  {
    track: 'red eyes',
    artist: 'architects',
  },
  {
    track: 'stay young forever',
    artist: 'architects',
  },
  {
    track: 'heartburn',
    artist: 'architects',
  },
  {
    track: 'It Never Ends',
    artist: 'Nthng',
  },
  {
    track: 'Путь',
    artist: 'Grottos',
  },
  {
    track: 'Побег',
    artist: 'Grottos',
  },
  {
    track: 'Все реки против',
    artist: 'Grottos',
  },
  {
    track: 'Линии',
    artist: 'Grottos',
  },
  {
    track: 'Тетис',
    artist: 'Grottos',
  },
  {
    track: 'Пепел на камнях',
    artist: 'Grottos',
  },
  {
    track: 'Листья',
    artist: 'Grottos',
  },
  {
    track: 'Taijin Kyofusho',
    artist: 'The Evpatoria Report',
  },
  {
    track: 'Отказ от личной ответственности',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Makeshift Shelters',
    artist: 'Gregor Samsa',
  },
  {
    track: 'Jeroen Van Aken',
    artist: 'Gregor Samsa',
  },
  {
    track: 'Young And Old',
    artist: 'Gregor Samsa',
  },
  {
    track: 'Lessening',
    artist: 'Gregor Samsa',
  },
  {
    track: '11:42',
    artist: 'Gregor Samsa',
  },
  {
    track: 'Syro (OLWS)',
    artist: 'Aphex Twin',
  },
  {
    track: 'Stone In Focus',
    artist: 'Aphex Twin',
  },
  {
    track: 'The Analord Mixtape',
    artist: 'Aphex Twin',
  },
  {
    track: 'Hospital - H - The Social Worker Dragon',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'A - Promenade - This Will Melt Away on Monday',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'N (le gilet fraternel) / Ever felt sad?',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'S (lesra) / What would you have done if this never happened?',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'The Night Subscriber',
    artist: 'Katatonia',
  },
  {
    track: 'With Bruised & Bloodied Feet',
    artist: 'Underdark',
  },
  {
    track: 'Primus Inter Pares',
    artist: 'Ignis',
  },
  {
    track: 'Sic Transit Gloria Mundi',
    artist: 'Ignis',
  },
  {
    track: 'Дикая Охота',
    artist: 'Ignis',
  },
  {
    track: 'К свечению чёрных сфер',
    artist: 'Ignis',
  },
  {
    track: 'Ликование ветров',
    artist: 'Ignis',
  },
  {
    track: 'Встречайте Спасителя!',
    artist: 'Ignis',
  },
  {
    track: '26',
    artist: 'Глава',
  },
  {
    track: 'ЗОЖ НА КРЕСТАХ',
    artist: 'ХИККАН',
  },
  {
    track: 'Vista',
    artist: 'Sorrow Plagues',
  },
  {
    track: 'Bloom',
    artist: 'Sorrow Plagues',
  },
  {
    track: 'Грабли',
    artist: 'Noize MC',
  },
  {
    track: 'Make Some Noize',
    artist: 'Noize MC',
  },
  {
    track: 'Говорящие головы',
    artist: 'Noize MC',
  },
  {
    track: 'aotfu',
    artist: '[isahi]',
  },
  {
    track: 'Jocelyn Flores',
    artist: 'XXXTENTACION',
  },
  {
    track: 'Приказано забывать',
    artist: 'Super Besse',
  },
  {
    track: 'Насрать на моё лицо',
    artist: 'Super Besse',
  },
  {
    track: 'Колыбельная',
    artist: 'Сатана Печёт Блины',
  },
  {
    track: 'Чемодан экзистенциального',
    artist: 'Сатана Печёт Блины',
  },
  {
    track: 'Отпусти',
    artist: 'Super Besse',
  },
  {
    track: 'Супермаркет (Сатана Печёт Блины cover)',
    artist: 'БЫДЛОЦЫКЛ',
  },
  {
    track: 'О, этот прекрасный мир!',
    artist: 'Сатана Печёт Блины',
  },
  {
    track: 'Школа',
    artist: 'Сатана Печёт Блины',
  },
  {
    track: 'дед',
    artist: 'хумус-хумус',
  },
  {
    track: 'Flim',
    artist: 'Aphex Twin',
  },
  {
    track: 'Still Life',
    artist: 'Ryuichi Sakamoto',
  },
  {
    track: 'Autumn Breeze',
    artist: 'Trees, Clouds & Silence',
  },
  {
    track: 'Sixtyniner',
    artist: 'Boards of Canada',
  },
  {
    track: 'Пора возвращаться домой',
    artist: 'БИ-2, Oxxxymiron',
  },
  {
    track: 'Левый марш',
    artist: 'Minaret',
  },
  {
    track: 'Existence',
    artist: 'Ether Drianne',
  },
  {
    track: 'El Poder',
    artist: 'Osoluna',
  },
  {
    track: 'Fallen',
    artist: 'WRCKTNGL',
  },
  {
    track: 'Я зол потостоянно!',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Thaumogenesis',
    artist: 'Nadja',
  },
  {
    track: 'Moonlight Shadow',
    artist: 'aspidistrafly',
  },
  {
    track: 'untitled 1',
    artist: 'elegy of me',
  },
  {
    track: 'untitled 2',
    artist: 'elegy of me',
  },
  {
    track: 'S.C.U.M',
    artist: 'GHOSTEMANE x WAVY JONE$',
  },
  {
    track: 'Blood Oceans',
    artist: 'GHOSTEMANE',
  },
  {
    track: 'San Junipero (80s-90s-00s-??S)',
    artist: 'Clint Mansell',
  },
  {
    track: 'Lunar Tear',
    artist: 'Tanpopo Crisis',
  },
  {
    track: 'A Color Map of The Sun',
    artist: 'Pretty Lights',
  },
  {
    track: 'Black Paint',
    artist: 'Death Grips',
  },
  {
    track: "Sad Man's Walk",
    artist: 'Non Dolet',
  },
  {
    track: 'Downhearted',
    artist: 'Non Dolet',
  },
  {
    track: 'Dreamlover',
    artist: 'Non Dolet',
  },
  {
    track: 'Hranice',
    artist: 'ZMAR',
  },
  {
    track: 'Proun',
    artist: 'Strië',
  },
  {
    track: 'Man and the Cosmos Around',
    artist: 'Strie',
  },
  {
    track: 'Untitled 1956',
    artist: 'Strië',
  },
  {
    track: 'The Steamer Odin',
    artist: 'Strië',
  },
  {
    track: 'Chance and Order',
    artist: 'Strië',
  },
  {
    track: 'Foxes',
    artist: 'Strië',
  },
  {
    track: 'Aeroplane Flying',
    artist: 'Strië',
  },
  {
    track: 'Vogel Wolke',
    artist: 'Strië',
  },
  {
    track: 'Enigma of the Day',
    artist: 'Strië',
  },
  {
    track: 'Тени становятся костями',
    artist: 'Быханов Сад',
  },
  {
    track: 'А скоро лето?',
    artist: 'Быханов Сад',
  },
  {
    track: 'Один',
    artist: 'Быханов Сад',
  },
  {
    track: 'Слэм',
    artist: 'Быханов Сад',
  },
  {
    track: 'Ты, я и вишневая кола',
    artist: 'Быханов Сад',
  },
  {
    track: 'Выпускной (remastered)',
    artist: 'Быханов Сад',
  },
  {
    track: "Го до ABB'ы (Remastered)",
    artist: 'Быханов Сад',
  },
  {
    track: 'Intro',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Dissolve',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Uran',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Stay',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Alone',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Night',
    artist: 'Silence Of The Soul',
  },
  {
    track: 'Moth (Any Noises Not Accordance)',
    artist: 'Brodmann Bonecell',
  },
  {
    track: 'Some Moves (Between The Ribs)',
    artist: 'Brodmann Bonecell',
  },
  {
    track: 'Feeling The Distance',
    artist: 'Brodmann Bonecell',
  },
  {
    track: 'Nape',
    artist: 'Brodmann Bonecell',
  },
  {
    track: 'Inside It Louder',
    artist: 'Brodmann Bonecell',
  },
  {
    track: 'некрофилия',
    artist: 'культура курения',
  },
  {
    track: 'Лабиринт отражений',
    artist: 'ЛСП',
  },
  {
    track: "Don't Go (feat. Lights)",
    artist: 'Bring Me The Horizon feat. Lights',
  },
  {
    track: 'Память',
    artist: 'Пасош x макулатура',
  },
  {
    track: 'Part I',
    artist: 'Hypnologica',
  },
  {
    track: 'Part II',
    artist: 'Hypnologica',
  },
  {
    track: 'практика отсечения всего лишнего',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Замены окружения интернет-окружением',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Общение',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Шоковая терапия [FIRST BLOOD]',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'когда ты последний раз думал?',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Научись говорить НЕТ!',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'о дофамине, тестостероне и воздержании',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Свобода и рабский менталитет',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Гормональный фон',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'о тестостероне и воздержании',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Концентрация внимания. Воображение [FIRST BLOOD]',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'О мальчиках и Мужчинах',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Инверсия доминирования [Перископ]',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Секрет by Арсен Маркарян',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'БОЕВАЯ ЯРОСТЬ',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Misty Night',
    artist: 'Marika Takeuchi',
  },
  {
    track: 'Askan från bålet [Northern Electronics]',
    artist: 'Ulwhednar',
  },
  {
    track: 'Filia',
    artist: 'Anopheli',
  },
  {
    track: 'Subsistence',
    artist: 'Nullingroots',
  },
  {
    track: 'Of Ordeals and Triumph',
    artist: "Nephilim's Howl",
  },
  {
    track: 'Departures',
    artist: 'Ghost Brigade',
  },
  {
    track: 'The Sixth Golden Ticket',
    artist: 'The Saddest Landscape',
  },
  {
    track: 'World Of Dogs',
    artist: 'Death Grips',
  },
  {
    track: 'Poetry of the Wretched',
    artist: 'Namatjira',
  },
  {
    track: 'Иуда',
    artist: 'Хаски',
  },
  {
    track: 'Столярка',
    artist: 'Кровосток',
  },
  {
    track: 'Warping (Instrumental)',
    artist: 'Death Grips',
  },
  {
    track: 'Призрак (prod. Heavylungs)',
    artist: 'JORMUNNG',
  },
  {
    track: 'KING (DooMee Edited)',
    artist: 'XXXtentaction',
  },
  {
    track: 'Hans Siste Vinter',
    artist: 'Darkthrone',
  },
  {
    track: 'Transilvanian Hunger',
    artist: 'Darkthrone',
  },
  {
    track: 'Triumphant Gleam',
    artist: 'Darkthrone',
  },
  {
    track: 'Deep Lake Tresspass',
    artist: 'Darkthrone',
  },
  {
    track: 'Slomo',
    artist: 'Slowdive',
  },
  {
    track: 'star roving',
    artist: 'slowdive',
  },
  {
    track: "Don't Know Why",
    artist: 'Slowdive',
  },
  {
    track: 'Sugar for the Pill',
    artist: 'Slowdive',
  },
  {
    track: 'Everyone Knows',
    artist: 'Slowdive',
  },
  {
    track: 'No Longer Making Time',
    artist: 'Slowdive',
  },
  {
    track: 'Go Get It',
    artist: 'Slowdive',
  },
  {
    track: 'Falling Ashes',
    artist: 'Slowdive',
  },
  {
    track: 'Камни',
    artist: 'Math Marriage: Abel and Krell',
  },
  {
    track: 'Цветы Печали',
    artist: 'Math Marriage: Abel and Krell',
  },
  {
    track: 'iwearyourlove,everyplaceigo',
    artist: 'surrenderdorothy',
  },
  {
    track: 'whatcouldpossiblygowrong',
    artist: 'surrenderdorothy',
  },
  {
    track: 'Black Days',
    artist: 'Polar',
  },
  {
    track: 'Making Weight',
    artist: 'Casey',
  },
  {
    track: 'Wavering',
    artist: 'Casey',
  },
  {
    track: 'Phosphenes',
    artist: 'Casey',
  },
  {
    track: 'Fluorescents',
    artist: 'Casey',
  },
  {
    track: 'Flowers by the Bed',
    artist: 'Casey',
  },
  {
    track: 'Needlework',
    artist: 'Casey',
  },
  {
    track: 'Bruise',
    artist: 'Casey',
  },
  {
    track: 'The Funeral',
    artist: 'Casey',
  },
  {
    track: 'Wound',
    artist: 'Casey',
  },
  {
    track: 'before I close my eyes',
    artist: 'XXXTENTACION',
  },
  {
    track: 'schizophrenia',
    artist: 'XXXTENTACION',
  },
  {
    track: 'Hope',
    artist: 'XXXTENTACION',
  },
  {
    track: 'changes',
    artist: 'XXXTENTACION',
  },
  {
    track: 'Pain = BESTFRIEND (feat. Travis Barker)',
    artist: 'XXXTENTACION',
  },
  {
    track: 'NUMB',
    artist: 'XXXTENTACION',
  },
  {
    track: 'Floor 555',
    artist: 'XXXTENTACION',
  },
  {
    track: 'ALONE, PART 3',
    artist: 'XXXTENTACION',
  },
  {
    track: 'In der Mine',
    artist: 'Omega Massif',
  },
  {
    track: 'Geisterstadt',
    artist: 'Omega Massif',
  },
  {
    track: 'Nebelwand',
    artist: 'Omega Massif',
  },
  {
    track: 'Unter Null',
    artist: 'Omega Massif',
  },
  {
    track: 'Arcanum',
    artist: 'Omega Massif',
  },
  {
    track: 'Exodus',
    artist: 'Omega Massif',
  },
  {
    track: 'Virginal II',
    artist: 'Tim Hecker',
  },
  {
    track: 'Living Frost',
    artist: 'Mammal Hands',
  },
  {
    track: 'The Falling Dream',
    artist: 'Mammal Hands',
  },
  {
    track: 'Shift',
    artist: 'Mammal Hands',
  },
  {
    track: 'Hopopono',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Earthcult',
    artist: 'Trna',
  },
  {
    track: 'Everywhere And Nowhere',
    artist: 'Trna',
  },
  {
    track: 'The Heart Of Time',
    artist: 'Trna',
  },
  {
    track: 'Thaw',
    artist: 'Trna',
  },
  {
    track: "I'm in Shape",
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'All The Same She Said',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'The Violent Nextdoor Neighbour',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'Mai',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'The Lodger',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'Assis, à Regarder',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'Да Винчи feat. bad bad roxanne',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Gran Masa Mecánica',
    artist: 'Adiaphöria',
  },
  {
    track: 'Estrategias Del Sistema',
    artist: 'Adiaphöria',
  },
  {
    track: 'Cansado Despierto',
    artist: 'Adiaphöria',
  },
  {
    track: 'Earthcult',
    artist: 'Trna',
  },
  {
    track: 'метафизика и хуитристика',
    artist: 'ночные грузчики',
  },
  {
    track: 'Minelauva',
    artist: 'siderurgie',
  },
  {
    track: 'Meleph',
    artist: 'siderurgie',
  },
  {
    track: 'Minchir',
    artist: 'siderurgie',
  },
  {
    track: 'Mimosa',
    artist: 'siderurgie',
  },
  {
    track: 'III',
    artist: 'Lifeless Existence',
  },
  {
    track: 'Fragile',
    artist: 'Lifeless Existence',
  },
  {
    track: 'II',
    artist: 'Lifeless Existence',
  },
  {
    track: '5VFF3R / 5VFF0C473',
    artist: 'Lifeless Existence',
  },
  {
    track: 'You Never Gazed at the Clouds',
    artist: 'Hypomanie',
  },
  {
    track: "She Couldn't Find a Flower, But There Was Snow (2010)",
    artist: 'Hypomanie',
  },
  {
    track: 'Smile',
    artist: 'Hypomanie',
  },
  {
    track: 'A City in Mono',
    artist: 'Hypomanie',
  },
  {
    track: 'A City in Stereo',
    artist: 'Hypomanie',
  },
  {
    track: 'Apokatastasis Pantôn',
    artist: 'Deathspell Omega',
  },
  {
    track: 'бастард',
    artist: 'ночные грузчики',
  },
  {
    track: 'старик',
    artist: 'ночные грузчики',
  },
  {
    track: 'общага',
    artist: 'ночные грузчики',
  },
  {
    track: 'гробы',
    artist: 'ночные грузчики',
  },
  {
    track: 'канатоходец',
    artist: 'ночные грузчики',
  },
  {
    track: 'вдребезги',
    artist: 'ночные грузчики',
  },
  {
    track: 'начистоту',
    artist: 'ночные грузчики',
  },
  {
    track: 'девочки',
    artist: 'ночные грузчики',
  },
  {
    track: 'записки',
    artist: 'ночные грузчики',
  },
  {
    track: 'праздник',
    artist: 'ночные грузчики',
  },
  {
    track: '17/32',
    artist: 'ночные грузчики',
  },
  {
    track: 'Цветок',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'бетон, антенны',
    artist: 'изнурение',
  },
  {
    track: 'аперитивы',
    artist: 'ночные грузчики',
  },
  {
    track: 'за пределами',
    artist: 'ночные грузчики',
  },
  {
    track: 'остановиться',
    artist: 'ночные грузчики',
  },
  {
    track: 'лето2010',
    artist: 'ночные грузчики',
  },
  {
    track: 'изнанка',
    artist: 'ночные грузчики',
  },
  {
    track: 'бразилия',
    artist: 'ночные грузчики',
  },
  {
    track: 'прогулка',
    artist: 'ночные грузчики',
  },
  {
    track: 'дна нет',
    artist: 'ночные грузчики',
  },
  {
    track: 'космос',
    artist: 'ночные грузчики',
  },
  {
    track: 'fff',
    artist: 'ночные грузчики',
  },
  {
    track: 'послесловие',
    artist: 'ночные грузчики',
  },
  {
    track: 'Neon',
    artist: 'Lantlos',
  },
  {
    track: 'Melting Sun I: Azure Chimes',
    artist: 'Lantlôs',
  },
  {
    track: 'Waiting Untill Death Takes Us',
    artist: 'Sun Devoured Earth',
  },
  {
    track: 'Show Me the Road To Joy',
    artist: 'Sun Devoured Earth',
  },
  {
    track: 'Depersonalization',
    artist: 'Sun Devoured',
  },
  {
    track: 'Soul Of City',
    artist: 'The Last Days',
  },
  {
    track: 'III',
    artist: 'LIAM',
  },
  {
    track: 'Litourgiya [Full Album]',
    artist: 'Batushka',
  },
  {
    track: 'If Only The Seas Were Merciful',
    artist: 'Hypomanie',
  },
  {
    track: 'Alissa Loves Perfume',
    artist: 'Hypomanie',
  },
  {
    track: 'Lullabye For Ian',
    artist: 'Hypomanie',
  },
  {
    track: 'Otta',
    artist: 'Solstafir',
  },
  {
    track: 'Otta',
    artist: 'Solstafir',
  },
  {
    track: 'Fjara',
    artist: 'Sólstafir',
  },
  {
    track: 'Exercises in Futility [Full Album]',
    artist: 'Mgla',
  },
  {
    track: 'Exercises in Futility VI',
    artist: 'Mgla',
  },
  {
    track: 'Exercises In Futility V',
    artist: 'Mgla',
  },
  {
    track: 'Transilvanian Hunger',
    artist: 'Second To Sun',
  },
  {
    track: 'The Smell of Autumn',
    artist: 'Underdark',
  },
  {
    track: 'I Used to Be Sad',
    artist: 'Nadja',
  },
  {
    track: 'Cut Adrift',
    artist: 'Tim Mislock',
  },
  {
    track: 'A Conception Of Memory',
    artist: 'Tim Mislock',
  },
  {
    track: 'Now is the Last Best Time',
    artist: 'Tim Mislock',
  },
  {
    track: "It's Quiet Here",
    artist: 'Tim Mislock',
  },
  {
    track: 'Lovekin',
    artist: 'Tim Mislock',
  },
  {
    track: 'We Were A Silent Movie',
    artist: 'Tim Mislock',
  },
  {
    track: 'A Conception Of Memory',
    artist: 'Tim Mislock',
  },
  {
    track: 'Dark Jazz Ambient Mix',
    artist: 'Cryo Chamber',
  },
  {
    track: 'ББН',
    artist: 'Грязь',
  },
  {
    track: 'The Hollowed Out Chest of a Dead Horse',
    artist: 'Pg. 99',
  },
  {
    track: "It's More Like a Message to You",
    artist: 'Jeromes Dream',
  },
  {
    track: 'Spektakl',
    artist: 'Words Mean Nothing',
  },
  {
    track: 'Never Stop',
    artist: 'Louise Cyphre',
  },
  {
    track: 'Communiqué',
    artist: 'Beau Navire',
  },
  {
    track: 'Seaside Suicide',
    artist: 'Tristan Tzara',
  },
  {
    track: 'No Has Ever Had 3 Letters',
    artist: 'The Kodan Armada',
  },
  {
    track: 'Ты мог бы',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Gallery of Nothing',
    artist: 'Vy Pole',
  },
  {
    track: 'Time Goes Wrong',
    artist: 'Vy Pole',
  },
  {
    track: 'Drowning Sun',
    artist: 'Vy Pole',
  },
  {
    track: 'Enormous',
    artist: 'Vy Pole',
  },
  {
    track: 'Leftover',
    artist: 'Vy Pole',
  },
  {
    track: 'Buildings to Collapse',
    artist: 'Vy Pole',
  },
  {
    track: 'Leaving You',
    artist: 'Vy Pole',
  },
  {
    track: 'A Spray Of Cloud-Pine',
    artist: 'Yorda',
  },
  {
    track: 'Cognitive Shift',
    artist: 'Roger Goula',
  },
  {
    track: 'All the same she said',
    artist: 'Sugartown Cabaret',
  },
  {
    track: 'Empire',
    artist: 'Amia Venera Landscape',
  },
  {
    track: 'Afraid of Whales',
    artist: 'This Penguin Can Fly',
  },
  {
    track: 'Tribute',
    artist: 'Ajuna',
  },
  {
    track: 'These Nights Were Ours',
    artist: 'Lantlôs',
  },
  {
    track: 'Apokatastasis Pantôn',
    artist: 'Deathspell Omega',
  },
  {
    track: "Shit Blows Up... It's So Good",
    artist: 'Neil Perry',
  },
  {
    track: 'Dead Men',
    artist: 'Shikari',
  },
  {
    track: 'Cruel Bloom',
    artist: 'Converge',
  },
  {
    track: 'Roquentin',
    artist: 'Saetia',
  },
  {
    track: 'An Open Letter',
    artist: 'Saetia',
  },
  {
    track: 'Your Shoes And The World To Come',
    artist: 'Envy',
  },
  {
    track: 'Triumph Of The Sun',
    artist: 'Woman Is the Earth',
  },
  {
    track: "how'd u like it if i milked u?",
    artist: 'letters to catalonia',
  },
  {
    track: 'decay',
    artist: 'letters to catalonia',
  },
  {
    track: 'my lyfe is a pyramid scheme nd yr just a [s]quare',
    artist: 'letters to catalonia',
  },
  {
    track: 'intro',
    artist: 'ilill',
  },
  {
    track: 'hana',
    artist: 'ilill',
  },
  {
    track: 'nanae',
    artist: 'ilill',
  },
  {
    track: 'I',
    artist: 'letters to catalonia',
  },
  {
    track: 'II',
    artist: 'letters to catalonia',
  },
  {
    track: 'III',
    artist: 'letters to catalonia',
  },
  {
    track: 'And The Light Swallowed Everything',
    artist: 'Seirom',
  },
  {
    track: 'Strands of Golden Light',
    artist: 'Seirom',
  },
  {
    track: 'Falling In The Water',
    artist: 'Prurient',
  },
  {
    track: 'Barefoot God',
    artist: 'Prurient',
  },
  {
    track: 'Oublier',
    artist: 'Mihai Edrisch',
  },
  {
    track: 'Undoing a Luciferian Towers',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Bosses Hang, Pt. I',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Bosses Hang, Pt. II',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Bosses Hang, Pt. III',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Fam / Famine',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Anthem for No State, Pt. I',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Anthem for No State, Pt. II',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Anthem for No State, Pt. III',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track:
      'Почему у вас не выйдет выдающейся карьеры | Larry Smith: Why you will fail to have a great career (TED RUS x)',
    artist: 'TED talks: Ларри Смит',
  },
  {
    track: 'Держите свои цели при себе',
    artist: 'Дерек Сиверс | TED',
  },
  {
    track: 'Стремление к нулю! | Bill Gates: Innovating to zero! (TED RUS x)',
    artist: 'TED talks: Билл Гейтс',
  },
  {
    track:
      '3 вещи, которым меня научила авиакатастрофа | Ric Elias: 3 things I learned while my plane crashed (TED talks RUS x)',
    artist: 'TED talks: Рик Элиас',
  },
  {
    track:
      'об утрате мудрости | Barry Schwartz: Our loss of wisdom ( TED talks RUS x )',
    artist: 'TED talks: Барри Шварц',
  },
  {
    track: 'Tigersuit',
    artist: 'Raein',
  },
  {
    track: 'Solutions, Decisions',
    artist: 'Anteater',
  },
  {
    track: 'pale',
    artist: 'blackmole',
  },
  {
    track: 'Flamingomingomingo',
    artist: 'Kodos',
  },
  {
    track: 'I Am The Lizard Queen',
    artist: 'Kodos',
  },
  {
    track: 'You Can Weave The Loom Or You Can Leave The Room',
    artist: 'Kodos',
  },
  {
    track: "Vincent Price's Orphan Powered Acrostics",
    artist: 'Kodos',
  },
  {
    track: 'Океан',
    artist: 'Futurist',
  },
  {
    track: 'Mirage',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Ellipse',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Holding Rivers',
    artist: 'Oh Hiroshima',
  },
  {
    track: '1716',
    artist: 'Wristmeetrazor',
  },
  {
    track: 'Razorwire Bouquet',
    artist: 'Wristmeetrazor',
  },
  {
    track: 'Nothing Gold Can Stay',
    artist: 'Wristmeetrazor',
  },
  {
    track: 'Pilträdsvillan',
    artist: 'Young Mountain',
  },
  {
    track: 'Bloom',
    artist: 'Young Mountain',
  },
  {
    track: '417',
    artist: 'Young Mountain',
  },
  {
    track: 'This Name Rings a Bell',
    artist: 'La Petite Mort, Little Death',
  },
  {
    track: 'The Grapes Of Wrath',
    artist: 'Yotsuya Kaidan',
  },
  {
    track: 'appeals for insertion',
    artist: 'The white octave',
  },
  {
    track: 'Solstice',
    artist: 'Laki Mera',
  },
  {
    track: 'Love',
    artist: 'Loma Prieta',
  },
  {
    track: 'New Room',
    artist: 'Sorority Noise',
  },
  {
    track: 'After the Funeral',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled I)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled II)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled III)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled IV)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled V)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled VI)',
    artist: 'Rosetta',
  },
  {
    track: '(Untitled VII)',
    artist: 'Rosetta',
  },
  {
    track: 'Nothing in the Guise of Something',
    artist: 'Rosetta',
  },
  {
    track: 'After Rock',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Make Trade Fears',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Dawn Of The First Day',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Dagger',
    artist: 'vildhjarta',
  },
  {
    track: 'Plus Près De Toi',
    artist: 'AMENRA',
  },
  {
    track: 'Atrocities From a Story Book Perspective',
    artist: 'SEEYOUSPACECOWBOY',
  },
  {
    track: 'Michele Bernstein',
    artist: 'With Engine Heart',
  },
  {
    track: 'Losing Sleep',
    artist: 'With Engine Heart',
  },
  {
    track: 'Soot',
    artist: 'Rosetta',
  },
  {
    track: 'Seven Years With Nothing to Show',
    artist: 'Rosetta',
  },
  {
    track: 'Les Mots Et Les Choses',
    artist: 'Rosetta',
  },
  {
    track: 'Pegasus',
    artist: 'Rosetta',
  },
  {
    track: 'Те дни пришли, я их вернул',
    artist: 'Черный Воробей',
  },
  {
    track: 'Perséphone (Enna)',
    artist: 'Year Of No Light',
  },
  {
    track: 'Perséphone (Coré)',
    artist: 'Year Of No Light',
  },
  {
    track: 'Hiérophante',
    artist: 'Year Of No Light',
  },
  {
    track: 'Abbesse',
    artist: 'Year Of No Light',
  },
  {
    track: 'Vastness And Sorrow',
    artist: 'Wolves In The Throne Room',
  },
  {
    track: 'Infinity',
    artist: 'Jesu',
  },
  {
    track: 'Afterburner',
    artist: 'Boris',
  },
  {
    track: 'Specks of Light',
    artist: 'Pelican',
  },
  {
    track: 'Carry',
    artist: 'Isis',
  },
  {
    track: 'Untitled',
    artist: 'Am I Dead Yet',
  },
  {
    track: 'Resurrectionist',
    artist: 'Am I Dead Yet',
  },
  {
    track: 'Capture The Castle',
    artist: 'Am I Dead Yet',
  },
  {
    track: 'Arson (2018) (Full Album)',
    artist: 'Harakiri For The Sky',
  },
  {
    track: 'пропасть (при участии Жени из Olše)',
    artist: 'факел',
  },
  {
    track: 'I Want Wind To Blow',
    artist: 'The Microphones',
  },
  {
    track: 'Уверенность в себе [vk.com/arsen_community]',
    artist: 'Арсен Маркарян',
  },
  {
    track: 'Че, сдался, сука?',
    artist: 'Арсен Маркарян',
  },
  {
    track: '1995+2',
    artist: 'подвал раскольникова',
  },
  {
    track: 'Tredici',
    artist: 'Øjne',
  },
  {
    track: 'Ogni Inverno',
    artist: 'Øjne',
  },
  {
    track: 'Nel Migliore Dei Mondi Possibili',
    artist: 'Øjne',
  },
  {
    track: "Sull'Altro Lato Del Fiume",
    artist: 'Øjne',
  },
  {
    track: 'Kalieaswari',
    artist: 'Øjne',
  },
  {
    track: 'Lo Schema Di Propp',
    artist: 'Øjne',
  },
  {
    track: 'Epilogo',
    artist: 'Øjne',
  },
  {
    track: "Dall'Altra Parte Del Mare",
    artist: 'Øjne',
  },
  {
    track: "Le Desordre, C'est Moi!",
    artist: 'Orchid',
  },
  {
    track: 'In G And E',
    artist: 'Orchid',
  },
  {
    track: 'Aesthetic Dialectic',
    artist: 'Orchid',
  },
  {
    track: 'New Jersey Vs. Valhalla',
    artist: 'Orchid',
  },
  {
    track: 'Weekend At The Fire Academy',
    artist: 'Orchid',
  },
  {
    track: 'Framecode',
    artist: 'Orchid',
  },
  {
    track: 'The Action Index',
    artist: 'Orchid',
  },
  {
    track: 'Death Of A Modernist',
    artist: 'Orchid',
  },
  {
    track: 'Boy With No Arms',
    artist: 'Orchid',
  },
  {
    track: 'Decline',
    artist: 'Funeral Diner',
  },
  {
    track: 'Collapsing',
    artist: 'Funeral Diner',
  },
  {
    track: 'We Become Buried',
    artist: 'Funeral Diner',
  },
  {
    track: 'It Is Good That We Never Met',
    artist: 'Funeral Diner',
  },
  {
    track: 'Two Houses',
    artist: 'Funeral Diner',
  },
  {
    track: 'What Was Said',
    artist: 'Funeral Diner',
  },
  {
    track: 'Regardless We Fall',
    artist: 'Funeral Diner',
  },
  {
    track: 'We All Have Blood On Our Hands',
    artist: 'Funeral Diner',
  },
  {
    track: 'Fire Song',
    artist: 'Portraits Of Past',
  },
  {
    track: 'Cypress Dust Witch',
    artist: 'Portraits Of Past',
  },
  {
    track: 'Cypress Dust Witch II - Bridge',
    artist: 'Portraits Of Past',
  },
  {
    track: 'Through To An End',
    artist: 'Portraits Of Past',
  },
  {
    track: 'KQED Equals Volvo',
    artist: 'Portraits Of Past',
  },
  {
    track: 'Bang Yer Head',
    artist: 'Portraits Of Past',
  },
  {
    track: 'The Control Freak',
    artist: 'Portraits of Past',
  },
  {
    track: 'Implications Of A Sinkhole Personality',
    artist: 'Portraits Of Past',
  },
  {
    track: 'The Outlook Is Bleak',
    artist: 'Portraits of Past',
  },
  {
    track: 'Snicker Snicker',
    artist: 'Portraits Of Past',
  },
  {
    track: 'Something Less Than Intended',
    artist: 'Portraits of Past',
  },
  {
    track: 'Forgot to Dream',
    artist: 'An Autumn For Crippled Children',
  },
  {
    track: '1st of august',
    artist: 'An Autumn For Crippled Children',
  },
  {
    track: 'Som Aske i Vinden',
    artist: 'Nordsind',
  },
  {
    track: 'Поезд-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Empty Glass',
    artist: 'Defeater',
  },
  {
    track: 'Cosmodrome',
    artist: 'Fugit',
  },
  {
    track: 'Swallow The Sun',
    artist: 'Fugit',
  },
  {
    track: 'The Monster Of Fischer-Griess',
    artist: 'Fugit',
  },
  {
    track: 'Conformal Cyclic Cosmology',
    artist: 'Fugit',
  },
  {
    track: 'Sunshower',
    artist: 'Fugit',
  },
  {
    track: "L'abbraccio Che Non Ti Ho Dato",
    artist: 'Fugit',
  },
  {
    track: 'Tempus Fugit',
    artist: 'Fugit',
  },
  {
    track: 'Urne',
    artist: 'Welk',
  },
  {
    track: 'Sonne',
    artist: 'Welk',
  },
  {
    track: 'Statue',
    artist: 'Welk',
  },
  {
    track: 'Asche',
    artist: 'Welk',
  },
  {
    track: 'Ruhe',
    artist: 'Welk',
  },
  {
    track: 'Schlaf',
    artist: 'Welk',
  },
  {
    track: 'Spiro, Spero',
    artist: 'Pettersson',
  },
  {
    track: 'White Birch',
    artist: 'Pettersson',
  },
  {
    track: 'Kalk',
    artist: 'Pettersson',
  },
  {
    track: 'Infirm',
    artist: 'Pettersson',
  },
  {
    track: 'All Is Lost',
    artist: 'Pettersson',
  },
  {
    track: 'Helicobacter',
    artist: 'Pettersson',
  },
  {
    track: 'Interlude',
    artist: 'Pettersson',
  },
  {
    track: 'Ben',
    artist: 'Pettersson',
  },
  {
    track: 'sensory deprivation > motion sickness',
    artist: 'Pettersson',
  },
  {
    track: 'Обскур I',
    artist: 'культура курения',
  },
  {
    track: 'Beyond Styx, Pt. 1',
    artist: 'Hubris',
  },
  {
    track: 'Beyond Styx, Pt. 2',
    artist: 'Hubris',
  },
  {
    track: 'Aphrodite Terra',
    artist: 'Hubris',
  },
  {
    track: 'Doom Mons',
    artist: 'Hubris',
  },
  {
    track: 'Delmos to Phobos, Pt. 1',
    artist: 'Hubris',
  },
  {
    track: 'Delmos to Phobos, Pt. 2',
    artist: 'Hubris',
  },
  {
    track: '.awning',
    artist: 'Amethyst Falls',
  },
  {
    track: 'Through Halogen Eyes',
    artist: 'Amethyst Falls',
  },
  {
    track: 'At the Edge of the World Our Shadows Sighing',
    artist: 'Amethyst Falls',
  },
  {
    track: 'Hintergerdanke',
    artist: 'Amethyst Falls',
  },
  {
    track: 'Painted Hands',
    artist: 'Amethyst Falls',
  },
  {
    track: 'Living Room',
    artist: 'Grouper',
  },
  {
    track: 'Holding',
    artist: 'Grouper',
  },
  {
    track: 'Lighthouse',
    artist: 'Grouper',
  },
  {
    track: 'Call Across Rooms',
    artist: 'Grouper',
  },
  {
    track: 'Children',
    artist: 'Grouper',
  },
  {
    track: "I'm Clean Now",
    artist: 'Grouper',
  },
  {
    track: 'Clearing',
    artist: 'Grouper',
  },
  {
    track: 'Made of Air',
    artist: 'Grouper',
  },
  {
    track: 'Labyrinth',
    artist: 'Grouper',
  },
  {
    track: 'Headache',
    artist: 'Grouper',
  },
  {
    track: 'Defecit',
    artist: 'Russian Circles',
  },
  {
    track: 'Protoearth',
    artist: 'backbone',
  },
  {
    track: 'The Red Mirror',
    artist: 'backbone',
  },
  {
    track: 'Aetherlost',
    artist: 'backbone',
  },
  {
    track: 'Omega Wave',
    artist: 'backbone',
  },
  {
    track: 'V',
    artist: 'backbone',
  },
  {
    track: 'Nemota',
    artist: 'Keava',
  },
  {
    track: 'Centuries Of Damn',
    artist: 'Death Grips',
  },
  {
    track: 'Beyond Alive',
    artist: 'Death Grips',
  },
  {
    track: 'The Powers That B',
    artist: 'Death Grips',
  },
  {
    track: 'On GP',
    artist: 'Death Grips',
  },
  {
    track: 'Pss Pss',
    artist: 'Death Grips',
  },
  {
    track: 'Lucid Dreams',
    artist: 'Dan Caine',
  },
  {
    track: 'Restless Waves',
    artist: 'Dan Caine',
  },
  {
    track: 'In the Deep Woods',
    artist: 'Dan Caine',
  },
  {
    track: 'Change of Heart',
    artist: 'Dan Caine',
  },
  {
    track: 'Quintessence',
    artist: 'Dan Caine',
  },
  {
    track: 'Emerge',
    artist: 'Dan Caine',
  },
  {
    track: 'Above and Beyond',
    artist: 'Dan Caine',
  },
  {
    track: 'Vaults',
    artist: 'Dan Caine',
  },
  {
    track: 'Altered State',
    artist: 'Dan Caine',
  },
  {
    track: 'Expansion',
    artist: 'Dan Caine',
  },
  {
    track: 'Captured Whispers',
    artist: 'Dan Caine',
  },
  {
    track: 'Danny',
    artist: 'C418',
  },
  {
    track: 'Living Mice',
    artist: 'C418',
  },
  {
    track: 'Thirteen',
    artist: 'C418',
  },
  {
    track: 'cat',
    artist: 'C418',
  },
  {
    track: 'Clark',
    artist: 'C418',
  },
  {
    track: 'Far',
    artist: 'C418',
  },
  {
    track: 'Flake',
    artist: 'C418',
  },
  {
    track: 'Force A Smile',
    artist: 'My Infinite Tea',
  },
  {
    track: 'Walking Through A Snowy Alley In The Soul',
    artist: 'My Infinite Tea',
  },
  {
    track: 'Music No Longer Brings Pleasure',
    artist: 'My Infinite Tea',
  },
  {
    track: 'Sounds Change Us?',
    artist: 'My Infinite Tea',
  },
  {
    track: "We're Lost Together,My Dear Listener",
    artist: 'My Infinite Tea',
  },
  {
    track: "I'm Confused.Forever",
    artist: 'My Infinite Tea',
  },
  {
    track: "You're Always There You'Re Behind A Nearby Wall,My Dear Friend",
    artist: 'My Infinite Tea',
  },
  {
    track: 'Afraid',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Altered Mesolimbic Pathways',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Philo Sophia',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Below the Ever Setting Sun (Grey Waters cover)',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Mirror of Empty Reflection',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Degeneracy of Nostalgia',
    artist: 'Sleep White Winter',
  },
  {
    track: 'Forward',
    artist: 'In Lights',
  },
  {
    track: 'Search',
    artist: 'In Lights',
  },
  {
    track: 'Before',
    artist: 'In Lights',
  },
  {
    track: 'Memory',
    artist: 'In Lights',
  },
  {
    track: 'Dream',
    artist: 'In Lights',
  },
  {
    track: 'Spring',
    artist: 'In Lights',
  },
  {
    track: 'Astral',
    artist: 'Ghost Bath',
  },
  {
    track: 'Seraphic',
    artist: 'Ghost Bath',
  },
  {
    track: 'Ambrosial',
    artist: 'Ghost Bath',
  },
  {
    track: 'Ethereal',
    artist: 'Ghost Bath',
  },
  {
    track: 'Celestial',
    artist: 'Ghost Bath',
  },
  {
    track: 'Angelic',
    artist: 'Ghost Bath',
  },
  {
    track: 'Luminescence',
    artist: 'Ghost Bath',
  },
  {
    track: 'Thrones',
    artist: 'Ghost Bath',
  },
  {
    track: 'Elysian',
    artist: 'Ghost Bath',
  },
  {
    track: 'Of Ordeals and Triumph',
    artist: "Nephilim's Howl",
  },
  {
    track: 'Subsistence',
    artist: 'Nullingroots',
  },
  {
    track: 'Black Hill - South',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Black Hill - Bridges',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Cousin Silas - Marble and Ivy',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Black Hill - Rivers crossing',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Black Hill - Shepherd',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Cousin Silas - Unspoken',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Black Hill - Flood',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Black Hill - Dew',
    artist: 'Black Hill & Cousin Silas',
  },
  {
    track: 'Yamuna',
    artist: 'Black Hill',
  },
  {
    track: 'Alphée',
    artist: 'Black Hill',
  },
  {
    track: 'Eo',
    artist: 'Black Hill',
  },
  {
    track: 'Arros',
    artist: 'Black Hill',
  },
  {
    track: 'Blackalven',
    artist: 'Black Hill',
  },
  {
    track: 'Eden',
    artist: 'Black Hill',
  },
  {
    track: 'Mu',
    artist: 'Black Hill',
  },
  {
    track: 'Olarabel',
    artist: 'Black Hill',
  },
  {
    track: 'Eo',
    artist: 'Black Hill',
  },
  {
    track: 'We Were A Silent Movie',
    artist: 'Tim Mislock',
  },
  {
    track: 'Деформация',
    artist: 'Старуха Мха',
  },
  {
    track: 'Оригинальная мелодия',
    artist: 'Der Golem',
  },
  {
    track: '10',
    artist: 'Sedativ',
  },
  {
    track: 'The Deserted Dreams',
    artist: 'Flesh & Space',
  },
  {
    track: 'Тоска отчаяние холод боль',
    artist: 'Шумы России',
  },
  {
    track: 'Eta Carinae',
    artist: 'Haze',
  },
  {
    track: 'El que escolten els arbres',
    artist: 'Böira',
  },
  {
    track: 'Glasgow',
    artist: 'Böira',
  },
  {
    track: 'хитиновый покров (oxxxymiron cover)',
    artist: 'Сатана печет блины',
  },
  {
    track: 'Вино с феназепамом',
    artist: 'Сатана Печёт Блины',
  },
  {
    track: 'Супермаркет',
    artist: 'Сатана Печет Блины',
  },
  {
    track: 'Crossing the Coastal Perimeter',
    artist: 'Seas of Years',
  },
  {
    track: 'She Wears My Blood',
    artist: 'Raein',
  },
  {
    track: 'Awaiting the Flood (2017)',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Seraphic',
    artist: 'Ghost Bath',
  },
  {
    track: 'San Francisco',
    artist: 'i hate sex',
  },
  {
    track: 'A Certain Kind of Luck',
    artist: 'i hate sex',
  },
  {
    track: 'January 24',
    artist: 'I hate sex',
  },
  {
    track: 'Глава восемнадцатая 1/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава пятая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава шестая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава седьмая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава восьмая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава девятая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава одиннадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двенадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава тринадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава четырнадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава пятнадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава шестнадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава семнадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава восемнадцатая 1/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава восемнадцатая 2/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава девятнадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцатая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать первая 1/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать первая 2/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать вторая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать третья',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать четвертая',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать пятая 1/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Глава двадцать пятая 2/2',
    artist: 'Евангелие от хиккана',
  },
  {
    track: 'Morning Trip',
    artist: 'Trna',
  },
  {
    track: 'Gale',
    artist: 'Trna',
  },
  {
    track: 'Calm',
    artist: 'Trna',
  },
  {
    track: 'Clinodactyl',
    artist: 'Nadja',
  },
  {
    track: 'Low',
    artist: 'Canvas',
  },
  {
    track: 'Loveless',
    artist: 'Canvas',
  },
  {
    track: 'Stay a While',
    artist: 'Canvas',
  },
  {
    track: 'Hospital Beds',
    artist: 'Canvas',
  },
  {
    track: 'Awake',
    artist: 'Canvas',
  },
  {
    track: 'Haunt You',
    artist: 'Canvas',
  },
  {
    track: 'Medicate Me',
    artist: 'Canvas',
  },
  {
    track: 'The Death of Us',
    artist: 'Canvas',
  },
  {
    track: 'Нет (Der Golem cover)',
    artist: 'культура курения',
  },
  {
    track: 'Existence',
    artist: 'Ether Drianne',
  },
  {
    track: 'Leaving',
    artist: 'Ether Drianne',
  },
  {
    track: 'We Fade Away',
    artist: 'Ether Drianne',
  },
  {
    track: 'Distant Lights',
    artist: 'Ether Drianne',
  },
  {
    track: 'Journey to the Night Sky',
    artist: 'Ether Drianne',
  },
  {
    track: 'Skuggar',
    artist: 'Auðn',
  },
  {
    track: 'Eilífar Nætur',
    artist: 'Auðn',
  },
  {
    track: 'Haldreipi Hugans',
    artist: 'Auðn',
  },
  {
    track: 'Ljósaslæður',
    artist: 'Auðn',
  },
  {
    track: 'Haldreipi Hugans',
    artist: 'Auðn',
  },
  {
    track: 'Lífvana Jörð',
    artist: 'Auðn',
  },
  {
    track: 'Noir',
    artist: 'glaston',
  },
  {
    track: 'The Eye Light',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Fakeface',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Fakeface:The End',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Few Stories Of A Deserted Forest',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'All Night And Day',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Panic Attacks',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'The Great Worm',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'War Song',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Zzz (Zzz)',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Old Stories',
    artist: 'Shirokuma',
  },
  {
    track: 'Leave',
    artist: 'Whirr',
  },
  {
    track: 'Ghost',
    artist: '101A',
  },
  {
    track: 'Save Me',
    artist: 'S',
  },
  {
    track: 'Wait',
    artist: 'S',
  },
  {
    track: 'Not A Problem',
    artist: 'S',
  },
  {
    track: 'Save you',
    artist: 'S',
  },
  {
    track: 'Away Around This',
    artist: 'S',
  },
  {
    track: 'We Are Not Friends',
    artist: 'S',
  },
  {
    track: 'The Message',
    artist: 'S',
  },
  {
    track: 'This Way Always',
    artist: 'S',
  },
  {
    track: 'You Should Be Hated Here',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Silently Leaving the Room',
    artist: "Carissa's Wierd",
  },
  {
    track: 'So You Wanna Be a Superhero',
    artist: "Carissa's Wierd",
  },
  {
    track: 'September Come Take This Heart Away',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Ignorant Piece Of Shit',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Piano Song',
    artist: "Carissa's Wierd",
  },
  {
    track: "They'll Only Miss You When You Leave",
    artist: "Carissa's Wierd",
  },
  {
    track: 'Farewell To All These Rotten Teeth',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Sofisticated Fuck Princess Please Leave Me Alone',
    artist: "Carissa's Wierd",
  },
  {
    track: 'тревогой объяты',
    artist: 'materic',
  },
  {
    track: 'если солома высохла, она загорится',
    artist: 'materic',
  },
  {
    track: 'золой',
    artist: 'materic',
  },
  {
    track: 'на дне болота',
    artist: 'materic',
  },
  {
    track: 'под простыней',
    artist: 'materic',
  },
  {
    track: 'на месте погибшего дерева вырастет лес',
    artist: 'materic',
  },
  {
    track: 'дорогой китов',
    artist: 'materic',
  },
  {
    track: 'Intro',
    artist: 'Silence Of The Old Man',
  },
  {
    track: 'Under The Grey Sky',
    artist: 'Silence Of The Old Man',
  },
  {
    track: 'Cancer',
    artist: 'Silence Of The Old Man',
  },
  {
    track: 'Espejos',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Ausencia',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Weepingwind',
    artist: 'Silence Of The Old Man',
  },
  {
    track: 'Cancer',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Oblivion',
    artist: 'Silence Of The Old Man',
  },
  {
    track: 'Tiempo de miseria',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Aufbruch',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Ein Letzter Tanz',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Skepsis Part I',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Skepsis Part II',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Finisterre',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Scarlet Skyline',
    artist: 'More Than Life',
  },
  {
    track: 'Curtains Closing',
    artist: 'More Than Life',
  },
  {
    track: 'The First Night of Autumn',
    artist: 'More Than Life',
  },
  {
    track: 'Take My Life Away',
    artist: 'More Than Life',
  },
  {
    track: 'Black Eyed',
    artist: 'More Than Life',
  },
  {
    track: 'Silent Grey',
    artist: 'More Than Life',
  },
  {
    track: "I've Lost Track of Everything",
    artist: 'More Than Life',
  },
  {
    track: 'Daisy Hill',
    artist: 'More Than Life',
  },
  {
    track: 'Love Let Me Go',
    artist: 'More Than Life',
  },
  {
    track: 'Silos Inside',
    artist: 'Wakings',
  },
  {
    track: 'Matted Fur',
    artist: 'Waking Aida',
  },
  {
    track: 'Diving Bell',
    artist: 'Wakings',
  },
  {
    track: 'Era Of Dust',
    artist: 'Wakings',
  },
  {
    track: 'Lemuria',
    artist: 'Wakings',
  },
  {
    track: 'Paradox',
    artist: 'Landscapes',
  },
  {
    track: 'Love Alone',
    artist: 'Landscapes',
  },
  {
    track: 'Reminiscence',
    artist: 'Landscapes',
  },
  {
    track: 'Silhouette',
    artist: 'Landscapes',
  },
  {
    track: 'Take Me Home',
    artist: 'Landscapes',
  },
  {
    track: 'Drencher',
    artist: 'Landscapes',
  },
  {
    track: 'Overcast',
    artist: 'Landscapes',
  },
  {
    track: 'Transient',
    artist: 'Landscapes',
  },
  {
    track: 'The Coming of Age',
    artist: 'Landscapes',
  },
  {
    track: 'Malachite (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Pneumonic (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Lonesome (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Oran Mor (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Safety In Numbers (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Everything All Of The Time (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Saint (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Warmth of Love',
    artist: 'Blind Girls',
  },
  {
    track: 'Lament',
    artist: 'Blind Girls',
  },
  {
    track: 'Noose',
    artist: 'Blind Girls',
  },
  {
    track: 'Grey Permanence',
    artist: 'Blind Girls',
  },
  {
    track: 'Silhouette Friends',
    artist: 'Blind Girls',
  },
  {
    track: 'Sentinent',
    artist: 'Blind Girls',
  },
  {
    track: 'Kyogen',
    artist: 'sans visage',
  },
  {
    track: 'Sight',
    artist: 'sans visage',
  },
  {
    track: 'Ett',
    artist: 'Ef',
  },
  {
    track: 'Hello Scotland',
    artist: 'Ef',
  },
  {
    track: 'Final Touch/Hidden Agenda',
    artist: 'Ef',
  },
  {
    track: 'He Came, He Stayed, He Fell',
    artist: 'Ef',
  },
  {
    track: 'Tomorrow My Friend...',
    artist: 'Ef',
  },
  {
    track: "...We'll Meet In The End",
    artist: 'Ef',
  },
  {
    track: 'Narcoleptic',
    artist: 'White Lung',
  },
  {
    track: 'Demented',
    artist: 'White Lung',
  },
  {
    track: 'Below',
    artist: 'White Lung',
  },
  {
    track: 'Dead Weight',
    artist: 'White Lung',
  },
  {
    track: 'Kiss Me When I Bleed',
    artist: 'White Lung',
  },
  {
    track: 'Hungry',
    artist: 'White Lung',
  },
  {
    track: 'I Beg You',
    artist: 'White Lung',
  },
  {
    track: 'Vegas',
    artist: 'White Lung',
  },
  {
    track: 'Paradise',
    artist: 'White Lung',
  },
  {
    track: 'Indigo Illusion',
    artist: 'Sannhet',
  },
  {
    track: 'Sapphire',
    artist: 'Sannhet',
  },
  {
    track: 'Fernbeds',
    artist: 'Sannhet',
  },
  {
    track: 'So Numb',
    artist: 'Sannhet',
  },
  {
    track: 'Salts',
    artist: 'Sannhet',
  },
  {
    track: 'Way Out',
    artist: 'Sannhet',
  },
  {
    track: 'Secondary Arrows',
    artist: 'Sannhet',
  },
  {
    track: 'Sleep Well',
    artist: 'Sannhet',
  },
  {
    track: 'Wind Up',
    artist: 'Sannhet',
  },
  {
    track: 'Stina',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'I am your god',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Sentence',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Through the gate',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: '33 years ago',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Regrets',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'The Light',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Carnage',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Are you happy with your life?',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Blue Lights And Sunshine',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'I Got Worried... I Was So Freaking Scared Of That Window, You Know',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'We Are Driving Through Darkness',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'Twentysix And Full Of Plans',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'A Japanese Flag',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'I Keep My Eyes On The Ground, Afraid Of Meeting Someone I Know',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'Empty',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track:
      'They Try To Cheer Me Up By Saying I Did Once Live A Functioning Life',
    artist: 'Suffocate For Fuck Sake',
  },
  {
    track: 'Ryu / Tradition',
    artist: 'Rosetta',
  },
  {
    track: 'Fudo / The Immovable Deity',
    artist: 'Rosetta',
  },
  {
    track: 'In & Yo / Dualities of the Way',
    artist: 'Rosetta',
  },
  {
    track: 'Oku / The Secrets',
    artist: 'Rosetta',
  },
  {
    track: 'Hodoku / Compassion',
    artist: 'Rosetta',
  },
  {
    track: 'Myo / The Miraculous',
    artist: 'Rosetta',
  },
  {
    track: 'Hara / The Center',
    artist: 'Rosetta',
  },
  {
    track: 'Ku / Emptiness',
    artist: 'Rosetta',
  },
  {
    track: 'Shugyo / Austerity',
    artist: 'Rosetta',
  },
  {
    track: '10:56',
    artist: 'Oathbreaker',
  },
  {
    track: 'Second Son of R.',
    artist: 'Oathbreaker',
  },
  {
    track: 'Being Able to Feel Nothing',
    artist: 'Oathbreaker',
  },
  {
    track: 'Stay Here / Accroche-Moi',
    artist: 'Oathbreaker',
  },
  {
    track: 'Needles in Your Skin',
    artist: 'Oathbreaker',
  },
  {
    track: 'Immortals',
    artist: 'Oathbreaker',
  },
  {
    track: "I'm Sorry, This Is",
    artist: 'Oathbreaker',
  },
  {
    track: 'Where I Live',
    artist: 'Oathbreaker',
  },
  {
    track: 'Where I Leave',
    artist: 'Oathbreaker',
  },
  {
    track: 'Dream House',
    artist: 'Deafheaven',
  },
  {
    track: 'Irresistible',
    artist: 'Deafheaven',
  },
  {
    track: 'Sunbather',
    artist: 'Deafheaven',
  },
  {
    track: 'Please Remember',
    artist: 'Deafheaven',
  },
  {
    track: 'Vertigo',
    artist: 'Deafheaven',
  },
  {
    track: 'Windows',
    artist: 'Deafheaven',
  },
  {
    track: 'The Pecan Tree',
    artist: 'Deafheaven',
  },
  {
    track: 'Home',
    artist: 'Numenorean',
  },
  {
    track: 'Thirst',
    artist: 'Numenorean',
  },
  {
    track: 'Shoreless',
    artist: 'Numenorean',
  },
  {
    track: 'Devour',
    artist: 'Numenorean',
  },
  {
    track: 'Laid Down',
    artist: 'Numenorean',
  },
  {
    track: '意味を喪失した時、虚無は私を冒し、享楽だけが『慰』みとなる。',
    artist: 'té',
  },
  {
    track: '離散的な欠片の集合が混沌から『秩序』に変わる時、美は発現す。',
    artist: 'té',
  },
  {
    track: '自由と孤独は秤の上の矛盾であり、その均衡にこそ『檻』がある。',
    artist: 'té',
  },
  {
    track: '終焉から振り返る我が夢は、陰影の濃淡に浮かぶ『光』の残り香。',
    artist: 'té',
  },
  {
    track: '『有』。',
    artist: 'té',
  },
  {
    track: '道徳はうつろう教義であり、その『閾』は昼と夜でさえ変容する。',
    artist: 'té',
  },
  {
    track: '思想も共感もいらず、ただ幻聴を誘発する『起因』としての音楽。',
    artist: 'té',
  },
  {
    track: '私は舞う枯葉。風任せな躍動を自律と『錯誤』する縹渺たる虚体。',
    artist: 'té',
  },
  {
    track: 'The sunset in your eyes',
    artist: 'Sadness',
  },
  {
    track: 'RUN DIVISION',
    artist: 'утри',
  },
  {
    track: 'Supraliminaire',
    artist: 'Aussitôt Mort',
  },
  {
    track: 'на икарусе в майами',
    artist: 'утри',
  },
  {
    track: 'What Love Has Done (Hybrid Theory Release Date Special)',
    artist: 'Mr.Gunner',
  },
  {
    track: 'youth televisor',
    artist: 'утри',
  },
  {
    track: 'Помогатор (House Trap Remix)',
    artist: 'Фиксики',
  },
  {
    track: 'Чайдфри + Omen',
    artist: 'zamanov001',
  },
  {
    track: 'Song Four',
    artist: 'I Hate Myself',
  },
  {
    track: 'Nostalgia Arises',
    artist: 'Vinter',
  },
  {
    track: 'Trapped into Suicidal thoughts',
    artist: 'Vinter',
  },
  {
    track: 'You',
    artist: 'Vinter',
  },
  {
    track: 'Ashes Of A Suicidal Life',
    artist: 'Vinter',
  },
  {
    track: 'Understanding',
    artist: 'Vinter',
  },
  {
    track: 'When everything Dies',
    artist: 'Vinter',
  },
  {
    track: 'Prologue',
    artist: 'Kardashev',
  },
  {
    track: 'Between Sea and Sky',
    artist: 'Kardashev',
  },
  {
    track: 'Beside Cliffs and Chasms',
    artist: 'Kardashev',
  },
  {
    track: 'Behind Leaves and Vines',
    artist: 'Kardashev',
  },
  {
    track: 'Beneath Dirt and Stone',
    artist: 'Kardashev',
  },
  {
    track: 'Beyond Sun and Moon',
    artist: 'Kardashev',
  },
  {
    track: 'Epilogue',
    artist: 'Kardashev',
  },
  {
    track: 'Apple',
    artist: 'Silence Kit',
  },
  {
    track: 'Venus',
    artist: 'Silence Kit',
  },
  {
    track: 'The Great Red Spot',
    artist: 'Silence Kit',
  },
  {
    track: 'Aurora Borealis',
    artist: 'Silence Kit',
  },
  {
    track: 'Venus',
    artist: 'Silence Kit',
  },
  {
    track: 'Non mortem, Somni fratrem. II',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Non mortem, Somni fratrem. I',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Oznob IV',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Oznob III',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Oznob II',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Oznob I',
    artist: 'Ansa/Cinis',
  },
  {
    track: 'Those Girls',
    artist: 'White Lung',
  },
  {
    track: 'Face Down',
    artist: 'White Lung',
  },
  {
    track: 'Hungry',
    artist: 'White Lung',
  },
  {
    track: 'Thick Lip',
    artist: 'White Lung',
  },
  {
    track: 'Bunny',
    artist: 'White Lung',
  },
  {
    track: 'The Bad Way',
    artist: 'White Lung',
  },
  {
    track: 'Snake Jaw',
    artist: 'White Lung',
  },
  {
    track: 'Just For You',
    artist: 'White Lung',
  },
  {
    track: 'Wrong Star',
    artist: 'White Lung',
  },
  {
    track: 'I Believe You',
    artist: 'White Lung',
  },
  {
    track: 'Sycophant',
    artist: 'White Lung',
  },
  {
    track: 'Lucky One',
    artist: 'White Lung',
  },
  {
    track: 'Face Down',
    artist: 'White Lung',
  },
  {
    track: 'In Your Home',
    artist: 'White Lung',
  },
  {
    track: 'светить другим',
    artist: 'факел',
  },
  {
    track: 'Filia',
    artist: 'Anopheli',
  },
  {
    track: 'The Same Pain',
    artist: 'Probably Not',
  },
  {
    track: 'Nowhere To Begin',
    artist: "EF'IL",
  },
  {
    track: 'Everyone I Know Is A Broken Heart',
    artist: "EF'IL",
  },
  {
    track: 'Portraits Of Past',
    artist: "EF'IL",
  },
  {
    track: 'Zissou',
    artist: "EF'IL",
  },
  {
    track: 'As We Were Dreaming',
    artist: "EF'IL",
  },
  {
    track: 'Told To Be Fine',
    artist: "EF'IL",
  },
  {
    track: 'Stockades',
    artist: "EF'IL",
  },
  {
    track: 'Heavy Breather',
    artist: "EF'IL",
  },
  {
    track: 'Hati',
    artist: "EF'IL",
  },
  {
    track: 'Coming From This Place',
    artist: 'Indisposed',
  },
  {
    track: 'From The Bannister',
    artist: 'Indisposed',
  },
  {
    track: 'Intent To Hurt',
    artist: 'Indisposed',
  },
  {
    track: 'The Claw Dragged Him Slowly',
    artist: 'Indisposed',
  },
  {
    track: 'Victim Becomes',
    artist: 'Indisposed',
  },
  {
    track: 'Efflorescence',
    artist: 'Blind Girls',
  },
  {
    track: 'Years In Grey',
    artist: 'Blind Girls',
  },
  {
    track: "Shy Moon's Grey Night",
    artist: 'Blind Girls',
  },
  {
    track: 'Rudimentary Fold',
    artist: 'Blind Girls',
  },
  {
    track: "Tomorrow's Design",
    artist: 'Blind Girls',
  },
  {
    track: 'Spoils Of Ripe',
    artist: 'Blind Girls',
  },
  {
    track: 'Anathema',
    artist: 'Blind Girls',
  },
  {
    track: 'Silhouette Friends',
    artist: 'Blind Girls',
  },
  {
    track: 'Black',
    artist: 'Blind Girls',
  },
  {
    track: 'C.C.S Logbook',
    artist: 'The Evpatoria Report',
  },
  {
    track: '... (Remastered)',
    artist: 'pg.lost',
  },
  {
    track: 'Still Alright',
    artist: 'Pg.Lost',
  },
  {
    track: "I'm In Awe, Amadeus!",
    artist: 'Maybeshewill',
  },
  {
    track: "It's Dark, It's Cold, It's Winter",
    artist: 'Sleepmakeswaves',
  },
  {
    track: 'To You They Are Birds, To Me They Are Voices in the Forest',
    artist: 'sleepmakeswaves',
  },
  {
    track: 'Malachite',
    artist: 'Jakob',
  },
  {
    track: 'Pneumonic (2017 remastered)',
    artist: 'Jakob',
  },
  {
    track: 'Safety in Numbers',
    artist: 'Jakob',
  },
  {
    track: 'Malachite',
    artist: 'Jakob',
  },
  {
    track: 'DBT',
    artist: 'Meniscus',
  },
  {
    track: 'Exhale',
    artist: 'Astralia',
  },
  {
    track: 'Io',
    artist: 'Astralia',
  },
  {
    track: 'Good Eyes',
    artist: 'Dye by the Sword',
  },
  {
    track: 'Flowers of Flesh (Acoustic Version)',
    artist: 'Nadja',
  },
  {
    track: 'A Recreant Canticle',
    artist: 'Rose Funeral',
  },
  {
    track: 'Final Form',
    artist: 'Oceano',
  },
  {
    track: 'Depths',
    artist: 'Oceano',
  },
  {
    track: 'Is Lands',
    artist: 'Celer',
  },
  {
    track: 'fiesta bizarra',
    artist: 'fiesta bizarra',
  },
  {
    track: 'Kappfarvel',
    artist: 'Northaunt',
  },
  {
    track: 'Минотавр',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Expandera',
    artist: 'Lifelover',
  },
  {
    track: 'Cancertid',
    artist: 'Lifelover',
  },
  {
    track: 'Chambers Of Tuam',
    artist: 'Gnaw Their Tongues',
  },
  {
    track: 'Restored Souls',
    artist: 'Gnaw Their Tongues',
  },
  {
    track: 'The Last Rites',
    artist: 'Gnaw Their Tongues',
  },
  {
    track: 'Marasm',
    artist: 'Amia Venera Landscape',
  },
  {
    track: 'Precipice',
    artist: 'Glasir',
  },
  {
    track: 'Until We Dissolve',
    artist: 'Glasir',
  },
  {
    track: 'Reconcile',
    artist: 'Glasir',
  },
  {
    track: 'Into the Void',
    artist: 'Glasir',
  },
  {
    track: 'Lucid',
    artist: 'Glasir',
  },
  {
    track: 'Wander',
    artist: 'Glasir',
  },
  {
    track: 'Idiot Savant',
    artist: 'Meniscus',
  },
  {
    track: 'Mother',
    artist: 'Meniscus',
  },
  {
    track: 'Cusp',
    artist: 'Meniscus',
  },
  {
    track: 'Absence of i',
    artist: 'meniscus',
  },
  {
    track: 'Pilot',
    artist: 'Meniscus',
  },
  {
    track: 'Askan från bålet',
    artist: 'Ulwhednar',
  },
  {
    track: 'track 1',
    artist: 'mar',
  },
  {
    track: 'track 2',
    artist: 'mar',
  },
  {
    track: 'Askan från bålet',
    artist: 'Ulwhednar',
  },
  {
    track: 'manufacturing optimism',
    artist: 'letters to catalonia',
  },
  {
    track: 'insignificance',
    artist: 'letters to catalonia',
  },
  {
    track:
      "if i hear one more flip flop outta you dude... i'm gonna throw up in my mouth",
    artist: 'letters to catalonia',
  },
  {
    track: 'XX',
    artist: 'состояние птиц',
  },
  {
    track: 'XXI',
    artist: 'состояние птиц',
  },
  {
    track: 'Frozen',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'I',
    artist: 'состояние птиц',
  },
  {
    track: 'II',
    artist: 'Состояние Птиц',
  },
  {
    track: 'III',
    artist: 'Состояние Птиц',
  },
  {
    track: 'V',
    artist: 'состояние Птиц',
  },
  {
    track: 'IV',
    artist: 'состояние птиц',
  },
  {
    track: 'VII',
    artist: 'состояние птиц',
  },
  {
    track: 'VI',
    artist: 'состояние птиц',
  },
  {
    track: 'VIII',
    artist: 'Состояние Птиц',
  },
  {
    track: 'IX',
    artist: 'состояние птиц',
  },
  {
    track: 'X',
    artist: 'состояние птиц',
  },
  {
    track: 'XI',
    artist: 'состояние птиц',
  },
  {
    track: 'XXIII',
    artist: 'состояние птиц',
  },
  {
    track: 'XVI',
    artist: 'состояние птиц',
  },
  {
    track: 'II',
    artist: 'состояние птиц',
  },
  {
    track: 'VIII',
    artist: 'состояние птиц',
  },
  {
    track: 'paměť',
    artist: 'esazlesa',
  },
  {
    track: 'The Black Meat',
    artist: 'Bark Psychosis',
  },
  {
    track: 'Lonely God',
    artist: 'Wang Wen',
  },
  {
    track: 'Rain Watcher',
    artist: 'Wang Wen',
  },
  {
    track: 'II',
    artist: 'РАСКОЛ',
  },
  {
    track: 'Камни',
    artist: 'РАСКОЛ',
  },
  {
    track: 'Слепота',
    artist: 'РАСКОЛ',
  },
  {
    track: 'Tornado Mystery',
    artist: '凛として時雨',
  },
  {
    track: 'Point Of No Reply',
    artist: 'The Horrors',
  },
  {
    track: 'Waterfall',
    artist: 'Ghash',
  },
  {
    track: 'epibouleus oxisor',
    artist: '∆IŖֆH4D3 x leandolphin',
  },
  {
    track: 'nightfall',
    artist: '∆IŖֆH4D3',
  },
  {
    track: 'запястья',
    artist: 'макулатура',
  },
  {
    track: 'ни ночи ни дня (фит. Михаил Енотов)',
    artist: 'макулатура',
  },
  {
    track: 'сингулярность',
    artist: 'макулатура',
  },
  {
    track: 'вместе',
    artist: 'макулатура',
  },
  {
    track: 'I Was the Sword',
    artist: 'Funeral Diner',
  },
  {
    track: 'Lakesides, Endless',
    artist: 'If Anything Happens To The Cat',
  },
  {
    track: 'Raven Steals the Light',
    artist: 'If Anything Happens To The Cat',
  },
  {
    track: 'Beijing Fury',
    artist: 'If Anything Happens To The Cat',
  },
  {
    track: 'Seren',
    artist: 'If Anything Happens To The Cat',
  },
  {
    track: 'Five Lion Mountain',
    artist: 'If Anything Happens To The Cat',
  },
  {
    track: 'Hide and Seek',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Innocent touch',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Time To Let You Go',
    artist: 'Taphephobia',
  },
  {
    track: 'sXe',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'Broods and Waits',
    artist: 'Dead Light',
  },
  {
    track: 'In Red And Red',
    artist: 'Dead Light',
  },
  {
    track: 'The Ballad Of A Small Player',
    artist: 'Dead Light',
  },
  {
    track: 'Falls Touching Grasses',
    artist: 'Taylor Deupree',
  },
  {
    track: "I've Been So Lost For So Long",
    artist: 'American Football',
  },
  {
    track: 'September',
    artist: 'Selection',
  },
  {
    track: 'Urskogen',
    artist: 'Hermóðr',
  },
  {
    track: 'Nord',
    artist: 'Hermóðr',
  },
  {
    track: 'Broke Love',
    artist: 'Hotel Books',
  },
  {
    track: 'Détente',
    artist: 'Rosetta',
  },
  {
    track: 'Neophyte Visionary',
    artist: 'Rosetta',
  },
  {
    track: 'Paradox',
    artist: 'Landscapes',
  },
  {
    track: 'In The Shade Of The Sun',
    artist: 'Kapitan Korsakov',
  },
  {
    track: 'осень',
    artist: 'макулатура',
  },
  {
    track: 'Women Reading (Daytrotter Session)',
    artist: 'La Dispute',
  },
  {
    track: 'ultimate pain and sadness mixtape',
    artist: 'подвал раскольникова',
  },
  {
    track: 'III',
    artist: 'Au-Dessus',
  },
  {
    track: 'Misty Night',
    artist: 'Marika Takeuchi',
  },
  {
    track: 'Thorns',
    artist: 'Being As An Ocean',
  },
  {
    track: 'The Faceless',
    artist: 'Ancst',
  },
  {
    track: 'Hammer of Fevered Light',
    artist: 'Sovereign',
  },
  {
    track: 'Diving Bell',
    artist: 'Wakings',
  },
  {
    track: 'The Illusion Of The End',
    artist: 'A Day In Black And White',
  },
  {
    track: 'Daisy Hill',
    artist: 'More Than Life',
  },
  {
    track: "I've Lost Track of Everything",
    artist: 'More Than Life',
  },
  {
    track: 'Silent Grey',
    artist: 'More Than Life',
  },
  {
    track: 'Black Eyed',
    artist: 'More Than Life',
  },
  {
    track: 'Take My Life Away',
    artist: 'More Than Life',
  },
  {
    track: 'The First Night of Autumn',
    artist: 'More Than Life',
  },
  {
    track: 'Scarlet Skyline',
    artist: 'More Than Life',
  },
  {
    track: 'Revelation',
    artist: 'Pitchblend',
  },
  {
    track: 'Sweat',
    artist: 'The All-American Rejects',
  },
  {
    track: 'Close Your Eyes',
    artist: 'The All-American Rejects',
  },
  {
    track: 'Play',
    artist: 'Marmozets',
  },
  {
    track: 'First Letter from St. Sean',
    artist: 'Sorority Noise',
  },
  {
    track: 'Sleep Well',
    artist: 'Sannhet',
  },
  {
    track: 'Secondary Arrows',
    artist: 'Sannhet',
  },
  {
    track: 'Way Out',
    artist: 'Sannhet',
  },
  {
    track: 'Fernbeds',
    artist: 'Sannhet',
  },
  {
    track: 'Syncope',
    artist: 'Funeral Diner',
  },
  {
    track: 'Wither',
    artist: 'Departe',
  },
  {
    track: 'Grief echoes (golden scars)',
    artist: 'Departe',
  },
  {
    track: 'Ashes in bloom',
    artist: 'Departe',
  },
  {
    track: 'Одиночество',
    artist: 'Sen Deni',
  },
  {
    track: 'свобода',
    artist: 'sen deni',
  },
  {
    track: 'Ein Letzter Tanz',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Skepsis Part I',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Skepsis Part II',
    artist: 'Der Weg Einer Freiheit',
  },
  {
    track: 'Latrato',
    artist: 'Cioran',
  },
  {
    track: 'Tuono',
    artist: 'Cioran',
  },
  {
    track: 'Tiempo de miseria',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Espejos',
    artist: 'Silence of the Old Man',
  },
  {
    track: 'Oig',
    artist: 'Blueneck',
  },
  {
    track: 'For Tabasco Use Only',
    artist: 'Morning Effort',
  },
  {
    track: 'Sofisticated Fuck Princess Please Leave Me Alone',
    artist: "Carissa's Wierd",
  },
  {
    track: 'j',
    artist: 'sonvá',
  },
  {
    track: 'We will bury you',
    artist: 'Angel Eyes',
  },
  {
    track: 'like chewing gum on concrete',
    artist: '+goth clubs+',
  },
  {
    track: 'The Field Where I Died',
    artist: 'Driveway',
  },
  {
    track: 'Harbor',
    artist: 'High Caves',
  },
  {
    track: 'Beobachtungen Uber Dem Horizont',
    artist: 'Nachtreich',
  },
  {
    track: 'We Have Not Reached Conclusion',
    artist: 'We Came Out Like Tigers',
  },
  {
    track: 'starlit spirits',
    artist: 'An Autumn For Crippled Children',
  },
  {
    track: 'Avoiding Winter',
    artist: 'An Autumn For Crippled Children',
  },
  {
    track: 'closer',
    artist: 'An Autumn For Crippled Children',
  },
  {
    track: 'Dry',
    artist: 'Whirr',
  },
  {
    track: 'From The Sticks To Bitterness',
    artist: 'Crooks UK',
  },
  {
    track: 'Dear Reader',
    artist: 'Crooks UK',
  },
  {
    track: 'What Might Have Been',
    artist: 'Crooks UK',
  },
  {
    track: 'Otra explosión se avecina',
    artist: 'A Shelter In The Desert',
  },
  {
    track: 'The Sixth Golden Ticket',
    artist: 'The Saddest Landscape',
  },
  {
    track: 'The Depletion of Suns',
    artist: 'Ezra Joyce',
  },
  {
    track: "It's More Like a Message to You",
    artist: 'Jeromes Dream',
  },
  {
    track: 'One So Illusive',
    artist: 'Beau Navire',
  },
  {
    track: 'Pathfinder',
    artist: 'Raccoon City Police Department',
  },
  {
    track: 'Opia',
    artist: 'The Buried Heart',
  },
  {
    track: 'Maybe In Another Universe, We...',
    artist: 'Outgone',
  },
  {
    track: 'A Fading Found',
    artist: 'Taylor Deupree',
  },
  {
    track: 'Rusted Oak',
    artist: 'Taylor Deupree',
  },
  {
    track: 'Shoals',
    artist: 'Taylor Deupree',
  },
  {
    track: 'Always Focused',
    artist: 'Tiny Moving Parts',
  },
  {
    track: 'Sunfalls and Watershine',
    artist: 'This Day Forward',
  },
  {
    track: 'Urskogen',
    artist: 'Hermóðr',
  },
  {
    track: 'Stranger, Fill This Hole In Me',
    artist: 'Wreck and Reference',
  },
  {
    track: 'XXIII',
    artist: 'состояние птиц',
  },
  {
    track: 'Чёрная звезда',
    artist: 'Minaret',
  },
  {
    track: 'Распятая корона',
    artist: 'Minaret',
  },
  {
    track: '31 декабря',
    artist: 'Minaret',
  },
  {
    track: 'Саркофаг',
    artist: 'Kulta',
  },
  {
    track: 'Исход',
    artist: 'Minaret',
  },
  {
    track: 'Безумец',
    artist: 'Minaret',
  },
  {
    track: 'Минарет',
    artist: 'Minaret',
  },
  {
    track: 'Криминальная Россия',
    artist: 'Minaret',
  },
  {
    track: 'Шахтерская (live)',
    artist: 'Minaret',
  },
  {
    track: 'Le Couloir Des Ombres',
    artist: 'Karg',
  },
  {
    track: 'Tor Zu Tausend Wüsten',
    artist: 'Karg',
  },
  {
    track: '...und blicke ich doch mit Wut zurück',
    artist: 'Karg',
  },
  {
    track: 'Crevasse',
    artist: 'Karg',
  },
  {
    track: 'Alles Wird In Flammen Stehen',
    artist: 'Karg',
  },
  {
    track: "Don't Say That You Love Me At Night",
    artist: 'My Summer Time',
  },
  {
    track: 'The Fox',
    artist: 'BlackHeart',
  },
  {
    track: 'Царство Древесное',
    artist: 'Beauty of Sirin',
  },
  {
    track: 'Suicide Season',
    artist: 'Bring Me The Horizon',
  },
  {
    track: 'The Sadness Will Never End',
    artist: 'BMTH (feat. Sam Carter of Architects)',
  },
  {
    track: 'Black Days',
    artist: 'Polar',
  },
  {
    track: 'Joe Boxer (Pt.1)',
    artist: 'Follow the white rabbit',
  },
  {
    track: 'Joe Boxer (Pt.2)',
    artist: 'Follow the white rabbit',
  },
  {
    track: 'Perdition',
    artist: "L'Acephale",
  },
  {
    track: '21.38',
    artist: 'Agent blå',
  },
  {
    track: 'Dream Boy Dream',
    artist: 'Agent blå',
  },
  {
    track: 'Strand',
    artist: 'Agent blå',
  },
  {
    track: '08.01.07',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'мы вооружены только тлеющими сигаретами и парой сотен стробоскопов',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: '16.11.06',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'ракетными двигателями в тележках из супермаркета',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: '19.08.06',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'старость наших воспоминаний рассыпается внутри солнца',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: '15.05.07',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'среди горящих спиц заката собранных в горлышко бутылки джемесон',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'на фотографиях людей которые нас никогда не встретят',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'Forgotten me',
    artist: 'Lifeboats',
  },
  {
    track: 'Paperman',
    artist: 'Lifeboats',
  },
  {
    track: "Don't Save Me",
    artist: 'Suicidal Psychosis',
  },
  {
    track: 'Search Party',
    artist: 'Enter Shikari',
  },
  {
    track: 'Warm Smiles Do Not Make You Welcome Here',
    artist: 'Enter Shikari',
  },
  {
    track: 'Stalemate',
    artist: 'Enter Shikari',
  },
  {
    track: 'Untitled',
    artist: 'Sadness',
  },
  {
    track: 'Oig',
    artist: 'Blueneck',
  },
  {
    track: 'Forlorn',
    artist: 'Intig',
  },
  {
    track: 'Wistful Nights',
    artist: 'Intig',
  },
  {
    track: 'It Always Comes Back',
    artist: 'Intig',
  },
  {
    track: 'The Tower And The Rotten Temple',
    artist: 'Besathett',
  },
  {
    track: 'Virelvinden av Sjalar',
    artist: 'Besathett',
  },
  {
    track: 'Egress',
    artist: 'WOODJU',
  },
  {
    track: 'Dunkelheit(original)',
    artist: 'Burzum',
  },
  {
    track: 'Bright Hope',
    artist: 'Kai Engel',
  },
  {
    track: 'Raining',
    artist: 'Kai Engel',
  },
  {
    track: 'Seeker',
    artist: 'Kai Engel',
  },
  {
    track: 'Moonlight Reprise',
    artist: 'Kai Engel',
  },
  {
    track: 'Sound Check (Gravity)',
    artist: 'Gorillaz',
  },
  {
    track: 'Дыхание Промежутков',
    artist: 'Дрож',
  },
  {
    track: 'Тупиковая Ветвь',
    artist: 'КОЛЧАК',
  },
  {
    track: '1986',
    artist: 'Колчак',
  },
  {
    track: 'Совесть',
    artist: 'Колчак',
  },
  {
    track: 'Поджигая Дверь',
    artist: 'Хвойная Вязь',
  },
  {
    track: 'в ожидании ураганов',
    artist: 'хвойная вязь',
  },
  {
    track: 'Questions',
    artist: 'Act Happy',
  },
  {
    track: 'Visions Of The Future',
    artist: 'Act Happy',
  },
  {
    track: 'Suicide Night',
    artist: 'Vinter',
  },
  {
    track: 'Abysses',
    artist: 'Opprobre',
  },
  {
    track: 'Marea Crescente',
    artist: 'Aesthesys',
  },
  {
    track: 'Double Bass',
    artist: 'Gorillaz',
  },
  {
    track: 'Trümmerwelten',
    artist: 'Heretoir',
  },
  {
    track: 'Verblasst',
    artist: 'Heretoir',
  },
  {
    track: 'The Escape (Part I)',
    artist: 'Heretoir',
  },
  {
    track: 'Fatigue',
    artist: 'Heretoir',
  },
  {
    track: 'Retreat To Hibernate',
    artist: 'Heretoir',
  },
  {
    track: '0',
    artist: 'Heretoir',
  },
  {
    track: 'Weltschmerz',
    artist: 'Heretoir',
  },
  {
    track: 'Graue Bauten',
    artist: 'Heretoir',
  },
  {
    track: 'The Escape (Part II)',
    artist: 'Heretoir',
  },
  {
    track: 'To Follow The Sun',
    artist: 'Heretoir',
  },
  {
    track: 'Heretoir',
    artist: 'Heretoir',
  },
  {
    track: 'Hiljaisessa Syvänteessä',
    artist: 'Kalmankantaja',
  },
  {
    track: 'Iankaikkinen',
    artist: 'Kalmankantaja',
  },
  {
    track: 'Mustat Vedet',
    artist: 'Kalmankantaja',
  },
  {
    track: 'Ajan Lopussa',
    artist: 'Kalmankantaja',
  },
  {
    track: 'Yönpalvoja',
    artist: 'Kalmankantaja',
  },
  {
    track: 'Kaamos',
    artist: 'Kalmankantaja',
  },
  {
    track: 'I - Intro',
    artist: 'Downfall Of Nur',
  },
  {
    track: 'II - The Golden Age',
    artist: 'Downfall Of Nur',
  },
  {
    track: 'III - The Downfall of Nur',
    artist: 'Downfall Of Nur',
  },
  {
    track: 'IV - Ashes',
    artist: 'Downfall Of Nur',
  },
  {
    track: 'V - Umbras de Barbagia',
    artist: 'Downfall Of Nur',
  },
  {
    track: 'With Hearts Toward None I',
    artist: 'Mgła',
  },
  {
    track: 'With Hearts Toward None II',
    artist: 'Mgla',
  },
  {
    track: 'With Hearts Toward None III',
    artist: 'Mgła',
  },
  {
    track: 'With Hearts Toward None IV',
    artist: 'Mgła',
  },
  {
    track: 'With Hearts Toward None V',
    artist: 'Mgła',
  },
  {
    track: 'With Hearts Toward None VI',
    artist: 'Mgła',
  },
  {
    track: 'With Hearts Toward None VII',
    artist: 'Mgla',
  },
  {
    track: 'Exercises in futility VI',
    artist: 'Mgła',
  },
  {
    track: 'Exercises In Futility V',
    artist: 'Mgła',
  },
  {
    track: 'Yön Alttarilla',
    artist: 'Kalmankantaja',
  },
  {
    track:
      '_玲瓏たる純潔は『紅炎』の傀儡を疾らせ、暁天に燦めく証を刻む。（&#2591',
    artist: "te'",
  },
  {
    track: '舞台の幽暗に潜む『恩寵』は、躬を顫わす律動を媒介に顕現する。',
    artist: "te'",
  },
  {
    track: 'And The Hat Stays On',
    artist: 'On The Might Of Princes',
  },
  {
    track: '16.11.06',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'ракетными двигателями в тележках из супермаркета',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'мы вооружены только тлеющими сигаретами и парой сотен стробоскопов',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: '15 missed calls',
    artist: 'Белые Флаги Зажигайте Медленно',
  },
  {
    track: 'Dan And Tim, Reunited By Fate',
    artist: 'Have A Nice Life',
  },
  {
    track: 'Cropsey',
    artist: 'Have A Nice Life',
  },
  {
    track: 'Static',
    artist: 'Godspeed You! Black Emperor',
  },
  {
    track: 'Holy Fucking Shit: 40,000',
    artist: 'Have A Nice Life',
  },
  {
    track: 'Hunter',
    artist: 'Have a Nice Life',
  },
  {
    track: 'collumns',
    artist: 'ruin!ruins!',
  },
  {
    track: 'polynya',
    artist: 'ruin!ruins!',
  },
  {
    track: 'kurta',
    artist: 'ruin!ruins!',
  },
  {
    track: 'Coolverine',
    artist: 'Mogwai',
  },
  {
    track: 'S Is For Salamander',
    artist: 'And So I Watch You From Afar',
  },
  {
    track: 'D Is For Django The Bastard',
    artist: 'And So I Watch You From Afar',
  },
  {
    track: 'B Is For B-Side',
    artist: 'And So I Watch You From Afar',
  },
  {
    track: 'K Is For Killing Spree (An Ode To)',
    artist: 'And So I Watch You From Afar',
  },
  {
    track: 'Anhedonia',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'SPINNING IN A DREAM',
    artist: 'LORN',
  },
  {
    track: "It's Really Not As Complicated As You're Making It Out To Be",
    artist: 'Being As An Ocean',
  },
  {
    track: 'Salute e Vita',
    artist: 'Being As An Ocean',
  },
  {
    track: 'The Sea Always Seems to Put Me At Ease',
    artist: 'Being As An Ocean',
  },
  {
    track:
      'The Hardest Part Is Forgetting Those You Swore You Would Never Forget',
    artist: 'Being As An Ocean',
  },
  {
    track: 'Dear G-d',
    artist: 'Being As An Ocean',
  },
  {
    track: 'Ceremony',
    artist: 'Casey',
  },
  {
    track: 'Passion Flowers',
    artist: 'Casey',
  },
  {
    track: 'Little Bird',
    artist: 'Casey',
  },
  {
    track: 'Reflection',
    artist: 'Counterparts',
  },
  {
    track: 'The Disconnect',
    artist: 'Counterparts',
  },
  {
    track: 'Love Is Not Enough',
    artist: 'More Than Life',
  },
  {
    track: 'Sometimes',
    artist: 'More Than Life',
  },
  {
    track: 'You re Not Alone',
    artist: 'More Than Life',
  },
  {
    track: 'Next Time We Will',
    artist: 'The Best Pessimist',
  },
  {
    track: 'Ruins',
    artist: 'The Best Pessimist',
  },
  {
    track: 'Embracing the Distant View',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Upon Reunion',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Rejoicing at Constant Beginning',
    artist: 'Suffering Astrid',
  },
  {
    track: 'I Stood There, Beholding',
    artist: 'Suffering Astrid',
  },
  {
    track: 'Greeting Oneself in the Wake of Greatness Abounding',
    artist: 'Suffering Astrid',
  },
  {
    track: 'And His Name Is Clint Eastwood',
    artist: 'OrangeZapperGun',
  },
  {
    track: "oh shit i'm getting a call",
    artist: 'pluffaduff',
  },
  {
    track: 'Leek Drop',
    artist: 'LemonWars',
  },
  {
    track: 'Sunbather',
    artist: 'Deafheaven',
  },
  {
    track: 'одному спокойней',
    artist: 'подвал раскольникова',
  },
  {
    track:
      'Feel Good in Black and Yellow - Wiz Khalifa vs. Gorillaz (Mashup) - YouTube',
    artist: 'oneboredjeu Mashup',
  },
  {
    track: '[MC] Ride',
    artist: 'Twenty One Pilots',
  },
  {
    track: 'Guillotine (Fortress)',
    artist: 'Death Grips x HOMM 3 Mashup',
  },
  {
    track: 'LORD OF 420',
    artist: 'MACINTOSH PLUS x DEATH GRIPS',
  },
  {
    track: 'Resonance/80808 (Mashup)',
    artist: 'HOME x Death Grips',
  },
  {
    track: 'No Love Division',
    artist: 'Death Grips x Doom',
  },
  {
    track: 'Blue (Da Ba Yon)',
    artist: 'Eiffel Grips',
  },
  {
    track: 'Sunbather / Bubbles Buried In This Jungle',
    artist: 'Deafheaven x Death Grips',
  },
  {
    track: 'Lord of the Game',
    artist: 'Death Grips',
  },
  {
    track: 'Unstoppapable',
    artist: 'Lammirai',
  },
  {
    track: 'Come into bad apple',
    artist: 'Toggy',
  },
  {
    track: 'Black Nation Betty',
    artist: 'WakerLink',
  },
  {
    track: 'Shooting Shelters',
    artist: 'Roy',
  },
  {
    track: 'Застрял в Dead Limit',
    artist: 'Лютая Нойзия орёт',
  },
  {
    track: 'Push The Platinum',
    artist: 'Certified Senpai',
  },
  {
    track: 'Вечно Молодой',
    artist: 'Death Grips',
  },
  {
    track: 'Mazafaka Hipster',
    artist: '[trashmult]',
  },
  {
    track: 'NightJoint',
    artist: '[trashmult]',
  },
  {
    track: 'и снится нам feel good',
    artist: 'подвал раскольникова',
  },
  {
    track: 'girl radio',
    artist: 'подвал раскольникова',
  },
  {
    track: 'heavydirtyнедогонят',
    artist: 'подвал раскольникова',
  },
  {
    track: '23 февраля',
    artist: 'подвал раскольникова',
  },
  {
    track: 'рукаблудца нина',
    artist:
      'Death Grips x Oxxxymiron (подвал раскольникова entry level mashup)',
  },
  {
    track: 'Scenery',
    artist: 'Kai Engel',
  },
  {
    track: 'Jane Doe',
    artist: 'Converge',
  },
  {
    track: 'Demi-chaîne',
    artist: 'Grand Détour',
  },
  {
    track: 'Dark Horse',
    artist: 'Converge',
  },
  {
    track: 'Wretched world',
    artist: 'Converge',
  },
  {
    track: 'Second Son of R.',
    artist: 'Oathbreaker',
  },
  {
    track: 'Trabajo y Arrebato',
    artist: 'Grand Détour',
  },
  {
    track: 'Нельзя Сказать Короче',
    artist: 'Самое Большое Простое Число',
  },
  {
    track: 'Black City Skyline',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Maximum Black',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Prowler',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'My Pet Coelacanth (Original Mix)',
    artist: 'Deadmau5',
  },
  {
    track: 'Он - Чужой, Он - Плохой',
    artist: 'Птицу Емъ',
  },
  {
    track: 'Scrape',
    artist: 'Tailfin',
  },
  {
    track: 'Foil',
    artist: 'Tailfin',
  },
  {
    track: 'Exhale',
    artist: 'Astralia',
  },
  {
    track: 'New Room',
    artist: 'Sorority Noise',
  },
  {
    track: 'A Portrait Of',
    artist: 'Sorority Noise',
  },
  {
    track: 'Not In Love',
    artist: 'Robert Smith ft. Crystal Castles',
  },
  {
    track: 'The Air, Her Heart',
    artist: 'Rachel Grimes',
  },
  {
    track: 'A New Solace',
    artist: 'Aswekeepsearching',
  },
  {
    track: 'Reminiscence',
    artist: 'Aswekeepsearching',
  },
  {
    track: 'Ascend',
    artist: 'Aswekeepsearching',
  },
  {
    track: 'Sometime Somewhere',
    artist: 'Aswekeepsearching',
  },
  {
    track: 'Lights & Colors',
    artist: 'Aswekeepsearching',
  },
  {
    track: 'Весна',
    artist: 'Кровосток',
  },
  {
    track: 'Aztec Aztec',
    artist: 'Soviet Soviet',
  },
  {
    track: 'Prince, Prostitutes',
    artist: 'Soviet Soviet',
  },
  {
    track: 'No Lesson',
    artist: 'Soviet Soviet',
  },
  {
    track: 'Zanzíbar',
    artist: 'Toundra',
  },
  {
    track: 'Ripple Water Shrine',
    artist: 'Pianos Become The Teeth',
  },
  {
    track: 'Wake Up, Fall Asleep',
    artist: 'Heights',
  },
  {
    track: 'Lost Amidst The Glow',
    artist: 'As Seas Exhale',
  },
  {
    track: 'Bloodhail',
    artist: 'Have A Nice Life',
  },
  {
    track: 'The Day Shift',
    artist: 'Pg.Lost',
  },
  {
    track: 'Waves',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Signal Tree',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Jura',
    artist: 'pg.lost',
  },
  {
    track: 'Virée nocturne',
    artist: 'Les Discrets',
  },
  {
    track: 'Les amis de minuit',
    artist: 'Les Discrets',
  },
  {
    track: 'Surrogate Head',
    artist: 'The Physics House Band',
  },
  {
    track: 'Calypso',
    artist: 'The Physics House Band',
  },
  {
    track: 'Memories',
    artist: 'Palisades',
  },
  {
    track: 'TheGrandestNothing [prod. by hool]',
    artist: 'BONES',
  },
  {
    track: 'CtrlAltDelete [prod. by migu]',
    artist: 'BONES',
  },
  {
    track: 'SystemPreferences [prod. by asbtrkt]',
    artist: 'BONES',
  },
  {
    track: 'Contours',
    artist: 'look, orion!',
  },
  {
    track: 'A Volatile Mind',
    artist: 'look, orion!',
  },
  {
    track: 'Not in Love',
    artist: 'Crystal Castles',
  },
  {
    track: 'Birds',
    artist: 'Crystal Castles',
  },
  {
    track: 'Vietnam',
    artist: 'Crystal Castles',
  },
  {
    track: 'Doe Deer',
    artist: 'Crystal Castles',
  },
  {
    track: 'Чуешь Мою Страсть? (BMTH Cover)',
    artist: 'Zmey Gorynich',
  },
  {
    track: '50 оттенков Дамьена Шазелла',
    artist: 'подвал раскольникова',
  },
  {
    track: 'Everything in its right place',
    artist: 'Radiohead',
  },
  {
    track: 'Render',
    artist: 'Northlane',
  },
  {
    track: 'Veridian',
    artist: 'Northlane',
  },
  {
    track: 'Fade',
    artist: 'Northlane',
  },
  {
    track: 'Zero-One',
    artist: 'Northlane',
  },
  {
    track: 'Paragon',
    artist: 'Northlane',
  },
  {
    track: 'Infrared Echoes',
    artist: 'Liongeist',
  },
  {
    track: 'Lightbringer',
    artist: 'Liongeist',
  },
  {
    track: 'Shy',
    artist: 'Liongeist',
  },
  {
    track: 'Winter',
    artist: 'Liongeist',
  },
  {
    track: 'To the Skies, From a Hillside',
    artist: 'Maybeshewill',
  },
  {
    track: 'Flim',
    artist: 'Aphex Twin',
  },
  {
    track: 'San Junipero (80s-90s-00s-??S)',
    artist: 'Clint Mansell',
  },
  {
    track: 'Waves Crashing On Distant Shores Of Time',
    artist: 'Clint Mansell',
  },
  {
    track: 'Bed Of Nails',
    artist: 'The Audiotapes',
  },
  {
    track: "Je N'en Connais Pas La Fin",
    artist: 'Rosetta',
  },
  {
    track: 'Французская',
    artist: 'Futurist',
  },
  {
    track: 'F Metal',
    artist: 'Futurist',
  },
  {
    track: 'Будущее',
    artist: 'Futurist',
  },
  {
    track: "I Love You But I've Chosen Punk",
    artist: 'Futurist',
  },
  {
    track: 'III',
    artist: 'Futurist',
  },
  {
    track: 'II',
    artist: 'Futurist',
  },
  {
    track: 'I',
    artist: 'Futurist',
  },
  {
    track: 'IIII',
    artist: 'Futurist',
  },
  {
    track: 'So Did We',
    artist: 'Isis',
  },
  {
    track: 'We Become Buried',
    artist: 'Funeral Diner',
  },
  {
    track: 'Embrace the Ashes',
    artist: 'Enterprise Earth',
  },
  {
    track: 'Bedsession',
    artist: 'Lakeshores',
  },
  {
    track: 'Астронавт',
    artist: 'ATL',
  },
  {
    track: 'Танцуйте',
    artist: 'ATL',
  },
  {
    track: 'Fire... Deth',
    artist: 'Funeral Diner',
  },
  {
    track: 'I Wish I Could Do The Backstroke',
    artist: 'Funeral Diner',
  },
  {
    track: 'Lackluster',
    artist: 'Funeral Diner',
  },
  {
    track: 'Syncope',
    artist: 'Funeral Diner',
  },
  {
    track: 'O',
    artist: 'Nebulae Come Sweet',
  },
  {
    track: 'Solstice',
    artist: 'Laki Mera',
  },
  {
    track:
      "Бар -2 лесбухи- (ft. Magg '98, Cheenah, Benz, Скриптонит, 104, Truwer, Kolyaolya) [Music by Bower]",
    artist: 'Jillzay',
  },
  {
    track: 'Sketch 4',
    artist: 'Tim Hecker',
  },
  {
    track: 'Sketch_5',
    artist: 'Tim Hecker',
  },
  {
    track: '200 years ago',
    artist: 'Tim Hecker',
  },
  {
    track: 'Rano Pano (Tim Hecker Remix)',
    artist: 'Mogwai',
  },
  {
    track: 'Incurably Optimistic!',
    artist: 'Tim Hecker',
  },
  {
    track: 'The Piano Drop',
    artist: 'Tim Hecker',
  },
  {
    track: 'Carry (Remix by Tim Hecker)',
    artist: 'Isis',
  },
  {
    track: 'Chimeras',
    artist: 'Tim Hecker',
  },
  {
    track: 'In The Fog I',
    artist: 'Tim Hecker',
  },
  {
    track: 'Sea of Pulses',
    artist: 'Tim Hecker',
  },
  {
    track: 'XIX',
    artist: 'состояние птиц',
  },
  {
    track: 'XVII',
    artist: 'состояние птиц',
  },
  {
    track: 'XV',
    artist: 'состояние птиц',
  },
  {
    track: 'Seven',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Dreaming of a painless escape part 1',
    artist: 'Item Caligo',
  },
  {
    track: 'Waiting for tears',
    artist: 'Item Caligo',
  },
  {
    track: 'Adaptation of the Koto Song',
    artist: 'The Kilimanjaro Darkjazz Ensemble',
  },
  {
    track: 'Dragonflies to Sew You Up',
    artist: 'Prurient',
  },
  {
    track: 'The Piano Drop',
    artist: 'Tim Hecker',
  },
  {
    track: 'sometimes,idontunderstand',
    artist: 'surrenderdorothy',
  },
  {
    track: 'whatcouldpossiblygowrong',
    artist: 'surrenderdorothy',
  },
  {
    track: 'theoceanhasneverbeensocold',
    artist: 'surrenderdorothy',
  },
  {
    track: 'usedcar',
    artist: 'surrenderdorothy',
  },
  {
    track: 'heldaghost',
    artist: 'surrenderdorothy',
  },
  {
    track: 'mydadtookmehere,soimtakingyou',
    artist: 'surrenderdorothy',
  },
  {
    track: 'nohardfeelings',
    artist: 'surrenderdorothy',
  },
  {
    track: 'thefeelingismutual',
    artist: 'surrenderdorothy',
  },
  {
    track: 'spinningthecompas',
    artist: 'surrenderdorothy',
  },
  {
    track: 'Celladoor',
    artist: 'The Kilimanjaro Darkjazz Ensemble',
  },
  {
    track: 'Lobby',
    artist: 'The Kilimanjaro Darkjazz Ensemble',
  },
  {
    track: 'All Is Violent, All Is Bright',
    artist: 'God Is An Astronaut',
  },
  {
    track: 'New noise',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'New Requiem',
    artist: 'Postcard from the Badlands',
  },
  {
    track: 'Untitled Landscape',
    artist: 'Postcard from the Badlands',
  },
  {
    track: 'Uneven Tide',
    artist: 'Postcard from the Badlands',
  },
  {
    track: 'Brittlestar',
    artist: 'Postcard from the Badlands',
  },
  {
    track: 'Билет',
    artist: 'Луперкаль',
  },
  {
    track: 'Bird Awakens the Mountain',
    artist: 'Postcard from the Badlands',
  },
  {
    track: 'Sleep',
    artist: 'Trawma',
  },
  {
    track: 'Capture Castles',
    artist: 'And So I Watch You From Afar',
  },
  {
    track: 'Hole',
    artist: '65daysofstatic',
  },
  {
    track: 'The Fall Of Math',
    artist: '65daysofstatic',
  },
  {
    track: 'I Swallowed Hard, Like I Understood',
    artist: '65daysofstatic',
  },
  {
    track: 'Default This',
    artist: '65daysofstatic',
  },
  {
    track: 'andaðu',
    artist: 'I.V',
  },
  {
    track: 'Homesick (The Cure Cover)',
    artist: 'Rosetta',
  },
  {
    track: 'Truth Begins',
    artist: 'Fink',
  },
  {
    track: 'Miles Apart (Sad Song Version)',
    artist: 'Acres',
  },
  {
    track: 'прощание',
    artist: 'факел',
  },
  {
    track: 'Мультивселенная Печаль',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Стадионы Мая',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Лес Сквозь Думы',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Хостелы',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'В Питере Все Столь Одарены...',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Six Days at the Bottom of the Ocean',
    artist: 'Explosions In The Sky',
  },
  {
    track: 'Logic of a Dream',
    artist: 'Explosions In the Sky',
  },
  {
    track: 'Disintegration Anxiety',
    artist: 'Explosions In the Sky',
  },
  {
    track: 'Landing Cliffs',
    artist: 'Explosions In The Sky',
  },
  {
    track: 'Deep, Deep',
    artist: 'Have a Nice Life',
  },
  {
    track: 'Waiting For Black Metal Records To Come In The Mail',
    artist: 'Have a Nice Life',
  },
  {
    track: 'Любовь и немного смерти',
    artist: 'JANE AIR',
  },
  {
    track: 'Sofisticated Fuck Princess Please Leave Me Alone',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Silently Leaving the Room',
    artist: "Carissa's Wierd",
  },
  {
    track: 'September Come Take This Heart Away',
    artist: "Carissa's Wierd",
  },
  {
    track: 'Вода',
    artist: 'Аффинаж',
  },
  {
    track: 'Выпьем за любовь (Игорь Николаев cover)',
    artist: 'EarzOnFire и Друзья',
  },
  {
    track: 'Home Away From Here',
    artist: 'Touché Amoré',
  },
  {
    track: 'farewell',
    artist: 'изнурение',
  },
  {
    track: '6',
    artist: 'изнурение',
  },
  {
    track: 'Конфискатор',
    artist: 'культура курения',
  },
  {
    track: 'Avalon',
    artist: 'Equador',
  },
  {
    track: 'Blood',
    artist: 'Equador',
  },
  {
    track: 'Начало',
    artist: 'Train Derailed',
  },
  {
    track: 'Warm Blood Rush',
    artist: 'Defeater',
  },
  {
    track: 'Dear Father',
    artist: 'Defeater',
  },
  {
    track: 'Waves Crash, Clouds Roll',
    artist: 'Defeater',
  },
  {
    track: 'Empty Glass',
    artist: 'Defeater',
  },
  {
    track: 'No Kind Of Home',
    artist: 'Defeater',
  },
  {
    track: 'White Knuckles',
    artist: 'Defeater',
  },
  {
    track: 'Cemetery Walls',
    artist: 'Defeater',
  },
  {
    track: 'Quiet The Longing',
    artist: 'Defeater',
  },
  {
    track: 'At Peace',
    artist: 'Defeater',
  },
  {
    track: 'Anxiety',
    artist: 'Kai Engel',
  },
  {
    track: 'Hammer the Nails',
    artist: 'Casey Jones',
  },
  {
    track: 'Ночь',
    artist: 'Конец Электроники',
  },
  {
    track: 'Нет',
    artist: 'Der Golem',
  },
  {
    track: 'Солнце мёртвых',
    artist: 'Der Golem',
  },
  {
    track: 'Written, Reside',
    artist: 'Bedside Orchid',
  },
  {
    track: 'Still Glow',
    artist: 'Bedside Orchid',
  },
  {
    track: 'No Love (Instrumental)',
    artist: 'Death Grips',
  },
  {
    track: 'ドウタ途中経過',
    artist: 'Rednestern',
  },
  {
    track: 'Hold Your Breath',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'Two-One (Cover)',
    artist: 'Volumes',
  },
  {
    track: 'piss and vinegar',
    artist: 'The white octave',
  },
  {
    track: 'call the kiss',
    artist: 'The white octave',
  },
  {
    track: 'The Only Moment We Were Alone',
    artist: 'Explosions In The Sky',
  },
  {
    track: 'heldaghost',
    artist: 'surrenderdorothy',
  },
  {
    track: 'Head Rush',
    artist: 'Meniscus',
  },
  {
    track: 'Numbers',
    artist: 'Daughter',
  },
  {
    track: 'Big River Man',
    artist: 'Overhead, The Albatross',
  },
  {
    track: 'Decay',
    artist: 'Terroreast',
  },
  {
    track: 'Blue Day for Croatoa',
    artist: 'Rosetta',
  },
  {
    track: 'ロンググッドバイ',
    artist: 'きのこ帝国',
  },
  {
    track: '海と花束',
    artist: 'きのこ帝国',
  },
  {
    track: 'パラノイドパレード',
    artist: 'きのこ帝国',
  },
  {
    track: 'FLOWER GIRL',
    artist: 'きのこ帝国',
  },
  {
    track: 'Крест',
    artist: 'Колчак',
  },
  {
    track: 'Tides',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Drowning/Sinking',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Callous Heart',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'An Ocean Of Lights',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Frozen',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'The Disappointment',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'A Foreboding Sky',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Crane Lake',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'The Weight Of Faith',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'The Great Red Spot',
    artist: 'Silence Kit',
  },
  {
    track: 'Venus',
    artist: 'Silence Kit',
  },
  {
    track: 'Room 3327',
    artist: 'Meniscus',
  },
  {
    track: '130',
    artist: 'Meniscus',
  },
  {
    track: 'Immersion',
    artist: 'Meniscus',
  },
  {
    track: 'Fight Club',
    artist: 'Meniscus',
  },
  {
    track: 'Cursed',
    artist: 'Meniscus',
  },
  {
    track: 'Infant',
    artist: 'Meniscus',
  },
  {
    track: 'Early Grave',
    artist: 'Architects',
  },
  {
    track: '33 years ago',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Through the gate',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Sentence',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'I am your god',
    artist: 'Suffocate for fuck sake',
  },
  {
    track: 'Oig',
    artist: 'Blueneck',
  },
  {
    track: 'Nattopet',
    artist: 'Detektivbyran',
  },
  {
    track: 'The Great Worm',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'Good Times',
    artist: 'Pianos Become The Teeth',
  },
  {
    track: 'A Foreboding Sky',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Drowning/Sinking',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'Insomnia OST - 18. Closing Titles',
    artist: 'David Julyan',
  },
  {
    track: 'Jackdaw Talk',
    artist: 'Mujuice',
  },
  {
    track: 'Петля',
    artist: 'The Plaksa',
  },
  {
    track: 'Пятна Роршаха',
    artist: 'The Plaksa',
  },
  {
    track: 'Goodbye, Megaton',
    artist: 'Counterparts',
  },
  {
    track: 'Unbeliever',
    artist: 'Architects',
  },
  {
    track: '彫琢した理念は音に宿り、感受する聴衆を『桎梏』から開放する。',
    artist: 'té',
  },
  {
    track: '具体を脱ぎ捨て潜勢を放てば、有為転変は『虚体』の夢に収斂す。',
    artist: 'té',
  },
  {
    track: '過剰な豊潤が退廃である様に、禁欲も過ぎれば陶酔に『溺』れる。',
    artist: 'té',
  },
  {
    track: 'Back to Life',
    artist: 'Weary Eyes',
  },
  {
    track: 'Аллилуйя (feat. Benz, Truwer, 104) [gazgolder.com]',
    artist: 'Jillzay',
  },
  {
    track: 'The Killing Moon',
    artist: 'Echo & the Bunnymen',
  },
  {
    track: 'Некрофилия',
    artist: 'культура курения',
  },
  {
    track: 'танец смерти',
    artist: 'культура курения',
  },
  {
    track: 'Enough',
    artist: 'Husbands',
  },
  {
    track: "The People I'll Become",
    artist: 'Husbands',
  },
  {
    track: 'Be Still',
    artist: 'Husbands',
  },
  {
    track: 'How To Have Sex With A Ghost',
    artist: 'Maybeshewill',
  },
  {
    track: 'Like The Moon Her Kindness',
    artist: 'SEIROM',
  },
  {
    track: 'Midnight Black Earth',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Source',
    artist: 'Kapiton Neklyudov',
  },
  {
    track: 'Serenity',
    artist: 'Volumes',
  },
  {
    track: 'Up All Night',
    artist: 'Volumes',
  },
  {
    track: 'Feels Good',
    artist: 'VOLUMES',
  },
  {
    track: 'Rope',
    artist: 'CASTLEBEAT',
  },
  {
    track: "When I'm Small",
    artist: 'Phantogram',
  },
  {
    track: 'Небо',
    artist: 'Дельфин',
  },
  {
    track: 'II',
    artist: 'Lifeless Existence',
  },
  {
    track: '1',
    artist: 'Blackpants',
  },
  {
    track: 'Джон Баравулькович',
    artist: 'Blackpants',
  },
  {
    track: 'what if this storm ends?',
    artist: 'snow patrol',
  },
  {
    track: 'Bird In A Cage',
    artist: 'Without Falter',
  },
  {
    track: 'Nomad',
    artist: 'Letters For Chimera',
  },
  {
    track: 'The Waiting Room',
    artist: 'Empedy',
  },
  {
    track: 'сингулярность (демо 2015)',
    artist: 'макулатура',
  },
  {
    track: 'падение',
    artist: 'макулатура',
  },
  {
    track: 'острова',
    artist: 'макулатура',
  },
  {
    track: 'On the way to Celephais',
    artist: 'Item Caligo',
  },
  {
    track: 'one step into a new future',
    artist: 'da voile',
  },
  {
    track: 'Ускользает',
    artist: 'Валентин Стрыкало',
  },
  {
    track: 'Mountain Heights & City Lights',
    artist: 'Crooks',
  },
  {
    track: 'Blue Lips',
    artist: 'I Saw Daylight',
  },
  {
    track: 'Hoodwinker',
    artist: 'Enter Shikari',
  },
  {
    track: 'December',
    artist: 'Kai Engel',
  },
  {
    track: 'Blizzard (PON I)',
    artist: 'Kai Engel',
  },
  {
    track: 'Oneiri',
    artist: 'Kai Engel',
  },
  {
    track: 'Cutrains Are Always Drawn',
    artist: 'Kai Engel',
  },
  {
    track: 'Highway To The Stars',
    artist: 'Kai Engel',
  },
  {
    track: 'March',
    artist: 'Kai Engel',
  },
  {
    track: 'Melancholy Aftersounds',
    artist: 'Kai Engel',
  },
  {
    track: 'Silence',
    artist: 'Kai Engel',
  },
  {
    track: 'Comatose',
    artist: 'Kai Engel',
  },
  {
    track: 'Blizzard (PON I)',
    artist: 'Kai Engel',
  },
  {
    track: 'Worldeater',
    artist: 'Northlane',
  },
  {
    track: 'Extraction',
    artist: 'Buried In Verona',
  },
  {
    track: 'Nowhere To Run',
    artist: 'If I Were You',
  },
  {
    track: 'Undead',
    artist: 'Saviour',
  },
  {
    track: 'The Silence Mill',
    artist: 'Kingdom Of Giants',
  },
  {
    track: 'Requiem for Hell',
    artist: 'Mono',
  },
  {
    track: 'Weight of the World',
    artist: 'More Than Life',
  },
  {
    track: 'GJ!',
    artist: 'BABYMETAL',
  },
  {
    track: 'The Downtown Cliche',
    artist: 'Jazz Cartier',
  },
  {
    track: 'Dead Weight',
    artist: 'White Lung',
  },
  {
    track: 'The Bloodening',
    artist: 'Johnny Truant',
  },
  {
    track: 'To The Key Of Evergreen',
    artist: 'The Devil Wears Prada',
  },
  {
    track: 'Spoils to the Victor',
    artist: 'Apollo Brown & Skyzoo',
  },
  {
    track: 'The Vibes',
    artist: 'Apollo Brown & Skyzoo',
  },
  {
    track: "I'm Sorry, This Is",
    artist: 'Oathbreaker',
  },
  {
    track: 'Where I Live',
    artist: 'Oathbreaker',
  },
  {
    track: 'Where Are You Tonight?',
    artist: 'Space Of Variations',
  },
  {
    track: 'All Res',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Unspeakable World',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Branches Break',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Weird Cat',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Quiet Mind',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Smarra',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Initiate',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Surrender to Mountain',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Protest',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Unspeakable World',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Half Heart',
    artist: 'Ghost Cat',
  },
  {
    track: 'Little Tremors',
    artist: 'Ghost Cat',
  },
  {
    track: 'Never Said',
    artist: 'Ghost Cat',
  },
  {
    track: 'Wither',
    artist: 'Ghost Cat',
  },
  {
    track: 'In Transition',
    artist: 'Ghost Cat',
  },
  {
    track: 'Better off Dad',
    artist: 'Ghost Cat',
  },
  {
    track: 'Snakes',
    artist: 'Birds In Row',
  },
  {
    track: 'Sorry Youre Not A Winner (Live At Alexandra Palace)',
    artist: 'Enter Shikari',
  },
  {
    track: 'вальтер',
    artist: 'макулатура',
  },
  {
    track: 'blurred boundaries',
    artist: 'WOODJU',
  },
  {
    track: 'Cherry Waves',
    artist: 'Deftones',
  },
  {
    track: 'Months And Days',
    artist: 'Den Mother',
  },
  {
    track: 'Сингулярность',
    artist: 'Евгений Алехин',
  },
  {
    track: 'Черная лента',
    artist: 'Капитан Ненавидит Море',
  },
  {
    track: 'Ни океанов, ни морей',
    artist: 'Евгений Алехин',
  },
  {
    track: 'Кислород',
    artist: 'Евгений Алехин',
  },
  {
    track: 'Seven Years',
    artist: 'Saosin',
  },
  {
    track: 'Translating the Name',
    artist: 'Saosin',
  },
  {
    track: '3rd Measurement in C',
    artist: 'Saosin',
  },
  {
    track: 'Lost Symphonies',
    artist: 'Saosin',
  },
  {
    track:
      'They Perched On Their Stilts, Pointing And Daring Me To Break Custom',
    artist: 'Saosin',
  },
  {
    track: 'Seven Years (Acoustic)',
    artist: 'Saosin',
  },
  {
    track: '3rd Measurement In C (Acoustic)',
    artist: 'Saosin',
  },
  {
    track: 'Swallowtale',
    artist: 'Plunger',
  },
  {
    track: 'Giftminute',
    artist: 'Midvale',
  },
  {
    track: 'Distress',
    artist: 'suicidekid',
  },
  {
    track: "Three Cassette's",
    artist: 'Youth',
  },
  {
    track: 'Overture',
    artist: 'Youth',
  },
  {
    track: "Boy's Chore",
    artist: 'Youth',
  },
  {
    track: 'Shot Short Range',
    artist: 'Youth',
  },
  {
    track: 'Shelf Life',
    artist: 'Youth',
  },
  {
    track: 'Берегите тепло',
    artist: 'Палисад',
  },
  {
    track: '8',
    artist: 'Палисад',
  },
  {
    track: 'Midwestern Self-Depreciation',
    artist: 'Morning Effort',
  },
  {
    track: "I heard you the first time, it just wasn't funny",
    artist: 'Morning Effort',
  },
  {
    track: 'For Tabasco Use Only',
    artist: 'Morning Effort',
  },
  {
    track: 'Seven',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'In Circles',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Song About An Angel',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Round',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: '47',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Pheurton Skeurto',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Shadows',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: '48',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Grendel',
    artist: 'Sunny Day Real Estate',
  },
  {
    track: 'Angry Son',
    artist: 'Indian Summer',
  },
  {
    track: 'Нет Спасибо',
    artist: 'Имя Твоей Бывшей',
  },
  {
    track: 'Маленький Герой Поневоле',
    artist: 'Имя Твоей Бывшей',
  },
  {
    track: 'Rites of Spring',
    artist: 'Alinda',
  },
  {
    track: 'For Want Of',
    artist: 'Rites Of Spring',
  },
  {
    track: 'Take My Heart (Instrumental)',
    artist: 'Dead Silence Hides My Cries',
  },
  {
    track: 'A Realness',
    artist: 'Boy Harsher',
  },
  {
    track: 'Better Half',
    artist: 'The Volumes',
  },
  {
    track: 'To Keep You Safe',
    artist: 'Heavenfaced',
  },
  {
    track: 'Peace Of Mind',
    artist: 'Volumes',
  },
  {
    track: 'Howl',
    artist: 'Have Mercy',
  },
  {
    track: 'Take My Heart',
    artist: 'Dead Silence Hides My Cries',
  },
  {
    track: 'Unraveled',
    artist: 'Lorn',
  },
  {
    track: 'Set me free',
    artist: 'Lorn',
  },
  {
    track: 'Tal Des Himmels Drei',
    artist: 'Schiller',
  },
  {
    track: 'Wormholes',
    artist: 'Volumes',
  },
  {
    track: 'A Passing Blizzard',
    artist: 'B.T.T.',
  },
  {
    track: 'II',
    artist: 'Lifelorn',
  },
  {
    track: 'Worn Path',
    artist: 'Loma Prieta',
  },
  {
    track: 'Perfect Speed',
    artist: '13 & God',
  },
  {
    track: 'Death - Pierce me (fragment)',
    artist: 'Silencer',
  },
  {
    track: '00',
    artist: 'Колчак',
  },
  {
    track: 'Белые Ночи/ Черные Дни',
    artist: 'Колчак',
  },
  {
    track: 'Поезд-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Город-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Корабль-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Сибирь',
    artist: 'Колчак',
  },
  {
    track: 'Gone With The Wind (Architects cover)',
    artist: 'The Xcerts',
  },
  {
    track: 'Aversion / Les Corps Pour Assiéger La Nuit',
    artist: 'Yarostan',
  },
  {
    track: 'Сезон дождей',
    artist: 'Те дни прошли, их не вернуть',
  },
  {
    track: 'The Plague',
    artist: 'Isahi',
  },
  {
    track: 'Mother Nature',
    artist: 'Hi!Call!Forget',
  },
  {
    track: 'You Will See',
    artist: 'Hi!Call!Forget',
  },
  {
    track: 'Spirit of the Earth',
    artist: 'Hi!Call!Forget',
  },
  {
    track: 'A Victim',
    artist: 'Hi!Call!Forget',
  },
  {
    track: 'Broken and Cursed',
    artist: 'Hi!Call!Forget',
  },
  {
    track: "Don't You Dare to Close Your Eyes",
    artist: 'Hi!Call!Forget',
  },
  {
    track: 'group sex of rabbits',
    artist: 'gidropony',
  },
  {
    track: 'The Upper Sky',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Nusquam',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'hola, dude! discoviolence!',
    artist: 'gidropony',
  },
  {
    track: 'superhero day',
    artist: 'gidropony',
  },
  {
    track: 'Жарче, чем солнце',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'La Boîte À Musique',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Still',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Ups&Downs',
    artist: 'Crystal Lake',
  },
  {
    track: 'Fakeface',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'puppet-show',
    artist: 'Gidropony',
  },
  {
    track: 'a ! c ! a ! b !',
    artist: 'Gidropony',
  },
  {
    track: 'happy idiots',
    artist: 'gidropony',
  },
  {
    track: 'Princess Coca',
    artist: 'Gidropony',
  },
  {
    track: 'Give Me Rest',
    artist: 'Hands',
  },
  {
    track: 'Water',
    artist: 'Hands',
  },
  {
    track: 'The Helix',
    artist: 'Hands',
  },
  {
    track: 'I Will',
    artist: 'Hands',
  },
  {
    track: "I'll get by",
    artist: 'Pianos Become The Teeth',
  },
  {
    track: 'Hiding',
    artist: 'Pianos Become the Teeth',
  },
  {
    track: 'Астронавты',
    artist: 'Краснознаменная Дивизия Имени Моей Бабушки',
  },
  {
    track: 'Annapurnas',
    artist: 'Viva Belgrado',
  },
  {
    track: 'Дорога из желтого кирпича',
    artist: 'Краснознаменная Дивизия Имени Моей Бабушки',
  },
  {
    track: 'Весна в Торонто',
    artist: 'Краснознаменная Дивизия Имени Моей Бабушки',
  },
  {
    track: 'End of the World Sun',
    artist: '65daysofstatic',
  },
  {
    track: 'Glass Houses',
    artist: 'Bad Omens',
  },
  {
    track: '1986-04-27 (Evacuation)',
    artist: 'NotNotice',
  },
  {
    track: 'The Show Must Go On',
    artist: 'Famous Last Words',
  },
  {
    track: "I've Been So Lost For So Long",
    artist: 'American Football',
  },
  {
    track: 'The Valley Dweller',
    artist: 'The Tidal Sleep',
  },
  {
    track: 'Earth',
    artist: 'Therr Maitz',
  },
  {
    track: 'Purple fluid',
    artist: 'Siberia*',
  },
  {
    track: 'Until We Dissolve',
    artist: 'Glasir',
  },
  {
    track: "La Tentation d'exister",
    artist: 'Wolfshade',
  },
  {
    track: 'Deathwish',
    artist: 'Architects',
  },
  {
    track: 'Promise You Gave Me',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Lights go out',
    artist: 'I am waiting for you last summer',
  },
  {
    track: "Don't Go",
    artist: 'I Am Waiting For You Last Summer',
  },
  {
    track: 'New noise',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'D.O.I.T',
    artist: 'Wildways',
  },
  {
    track: 'To The Shore',
    artist: 'Modern Guns',
  },
  {
    track: 'Enola',
    artist: 'Modern Guns',
  },
  {
    track: 'Tomorrow/Lull/Celestial Feedback',
    artist: '65daysofstatic',
  },
  {
    track: 'The Truth',
    artist: 'In Flames',
  },
  {
    track: '3 Seconds To Go',
    artist: 'Wildways',
  },
  {
    track: 'The Hurt Is Gone',
    artist: 'Yellowcard',
  },
  {
    track: 'What You Feel (feat. Lou Miceli)',
    artist: 'Wildways',
  },
  {
    track: 'Faka Faka Yeah',
    artist: 'Wildways',
  },
  {
    track: 'Skins',
    artist: 'Wildways',
  },
  {
    track: 'metro',
    artist: 'Ганджу',
  },
  {
    track: 'no one cares',
    artist: 'Ганджу',
  },
  {
    track: 'Alice Practice (Ost Skins)',
    artist: 'Crystal Castles',
  },
  {
    track: 'Daydreaming',
    artist: 'radiohead',
  },
  {
    track: 'Femen',
    artist: 'Crystal Castles',
  },
  {
    track: 'Fleece',
    artist: 'Crystal Castles',
  },
  {
    track: 'Char',
    artist: 'Crystal Castles',
  },
  {
    track: 'Enth',
    artist: 'Crystal Castles',
  },
  {
    track: 'Sadist',
    artist: 'Crystal Castles',
  },
  {
    track: 'Teach Her How To Hunt',
    artist: 'Crystal Castles',
  },
  {
    track: 'Chloroform',
    artist: 'Crystal Castles',
  },
  {
    track: 'Frail',
    artist: 'Crystal Castles',
  },
  {
    track: 'Concrete',
    artist: 'Crystal Castles',
  },
  {
    track: 'What You Make Of Me',
    artist: 'Holding Onto Hope',
  },
  {
    track: 'The Theory Of Everything',
    artist: 'Johann Johannsson',
  },
  {
    track: 'Sunlight',
    artist: 'September',
  },
  {
    track: 'The Departure',
    artist: 'Cecilia::Eyes',
  },
  {
    track: 'Oig',
    artist: 'Blueneck',
  },
  {
    track: 'The Patron Saint Of Liars And Fakes',
    artist: 'Fall Out Boy',
  },
  {
    track: 'I1 - (Kaytranada x Mr. Carmack)',
    artist: 'Sango',
  },
  {
    track: 'Television (WOODJU RMX)',
    artist: 'Bunji Garlin',
  },
  {
    track: 'За Руку',
    artist: 'T.Wild',
  },
  {
    track: 'Escapeless',
    artist: 'Spicules',
  },
  {
    track: 'A Forefeeling',
    artist: 'Spicules',
  },
  {
    track: 'Generation',
    artist: 'Kapiton Neklyudov',
  },
  {
    track: 'Московские прятки',
    artist: 'Те дни прошли, их не вернуть',
  },
  {
    track: 'Папа фашист',
    artist: 'John Doe',
  },
  {
    track: 'Спасибо',
    artist: 'John Doe',
  },
  {
    track: 'Наскрозь',
    artist: 'Akute',
  },
  {
    track: 'Калі б я застаўся з табой (акустыка)',
    artist: 'Akute',
  },
  {
    track: 'Rise',
    artist: 'Integral',
  },
  {
    track: '1995-12-20T21:34:32+01:00 - Leaks',
    artist: 'Bad Sector',
  },
  {
    track: 'Beyond the Redshift',
    artist: 'Cult of Luna & Julie Christmas',
  },
  {
    track: 'Synergistic Perceptions',
    artist: 'Robert Rich & Brian Lustmord',
  },
  {
    track: 'Kick',
    artist: 'White Rose Movement',
  },
  {
    track: 'Afraid of Heights',
    artist: 'Billy Talent',
  },
  {
    track: 'Ghost Ship of Cannibal Rats',
    artist: 'Billy Talent',
  },
  {
    track: 'мне',
    artist: 'фёдорова',
  },
  {
    track: 'Where Three Rivers Meet',
    artist: 'Amy Lauren',
  },
  {
    track: 'Mahogany Cider',
    artist: 'Amy Lauren',
  },
  {
    track: "You Won't Find Me Here",
    artist: 'Old State',
  },
  {
    track: 'Sundive',
    artist: 'Chewie',
  },
  {
    track: 'Hold My Breath',
    artist: 'Astral',
  },
  {
    track: 'Watcher Of Fading Light',
    artist: 'Veldes',
  },
  {
    track: 'Да Хун Пао (prod. by Volyym)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Сервизы / Слякоть (prod. by Danny Zuckerman)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Timeless',
    artist: 'BONES',
  },
  {
    track: 'WordsCannotEncapsulate',
    artist: 'BONES',
  },
  {
    track: 'Метель (feat. Gospodi Go)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'El Poder',
    artist: 'OsoLuna',
  },
  {
    track: 'Winter Morning I',
    artist: 'Woodkid & Nils Frahm',
  },
  {
    track: 'Cold Little Heart',
    artist: 'Michael Kiwanuka',
  },
  {
    track: 'Love and Hate',
    artist: 'Michael Kiwanuka',
  },
  {
    track: 'Three Hours and a Kitchen Knife (Post-Hardcore.RU)',
    artist: "He Said She's Dead",
  },
  {
    track: 'Dog Goes Meow (Post-Hardcore.RU)',
    artist: "He Said She's Dead",
  },
  {
    track: 'Two Minutes in Hell',
    artist: "He Said She's Dead",
  },
  {
    track: "You're So Cute I Could Beat You Up (Post-Hardcore.RU)",
    artist: "He Said She's Dead",
  },
  {
    track: 'Free For All',
    artist: "He Said She's Dead",
  },
  {
    track: 'After... After',
    artist: 'I Pilot Dæmon',
  },
  {
    track: 'Anthem For the Brokenhearted (Post-Hardcore.RU)',
    artist: "He Said She's Dead",
  },
  {
    track: 'The Crucifixion of Christopher Walken',
    artist: "He Said She's Dead",
  },
  {
    track: 'Half Pipe',
    artist: 'The Silent Partner',
  },
  {
    track: 'Owla Three',
    artist: 'LIGHTNING',
  },
  {
    track: 'Starry Night',
    artist: 'Cloower Wooma',
  },
  {
    track: 'Space Symphony',
    artist: 'Cloower Wooma',
  },
  {
    track: '44 (Noise Version)',
    artist: 'Apparat',
  },
  {
    track: 'Between Monuments',
    artist: 'Valgeir Sigurdsson',
  },
  {
    track: 'Midgard-Earth (Ambient Version',
    artist: 'Astropilot',
  },
  {
    track: 'Gemini',
    artist: 'Boards of Canada',
  },
  {
    track: 'Не Быть Человеком',
    artist: 'Marschak',
  },
  {
    track: '1994',
    artist: 'Departures',
  },
  {
    track: 'Lost',
    artist: 'Departures',
  },
  {
    track: 'In Colour',
    artist: 'Departures',
  },
  {
    track: 'Angry Son',
    artist: 'Indian Summer',
  },
  {
    track: 'Woolworm/Angry Son',
    artist: 'Indian Summer',
  },
  {
    track: 'про бумажные самолётики (Angus and Julia Stone instr.)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'L490',
    artist: '30 Seconds To Mars',
  },
  {
    track: 'Sleeping With Ghosts',
    artist: 'Placebo',
  },
  {
    track: 'Карма велогонщика',
    artist: 'Петля Пристрастия',
  },
  {
    track: '9th',
    artist: 'WOODJU',
  },
  {
    track: 'Endless Rain',
    artist: 'Shirokuma',
  },
  {
    track: 'TORUGWE',
    artist: 'WOODJU',
  },
  {
    track: 'SharQ',
    artist: 'Thundercats',
  },
  {
    track: 'The Black Hand',
    artist: 'Thundercats',
  },
  {
    track: 'Zombie Pigman From The Nether',
    artist: 'Thundercats',
  },
  {
    track: 'Doomsday',
    artist: 'Murray Gold',
  },
  {
    track: 'Bombing Bastards',
    artist: 'Tricky',
  },
  {
    track: 'lynguistics',
    artist: 'cunninlynguists',
  },
  {
    track: 'Breathe',
    artist: 'The Prodigy',
  },
  {
    track: 'WrathOfTheSpaceGod - Part 1 (Prod. By The Virus & Antidote)',
    artist: 'Kamiyada Mayonaka たちの または',
  },
  {
    track: 'Будда',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Груз',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Иллюзия',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Мода и облака',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Автоматизм',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Отдых',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Сторукий',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Airport Security',
    artist: 'Open',
  },
  {
    track: 'Searching For Satellites',
    artist: 'Pitchblend',
  },
  {
    track: 'Balance Restored',
    artist: 'Pitchblend',
  },
  {
    track: 'Somewhere I Could Never Find',
    artist: 'Pitchblend',
  },
  {
    track: 'Celsius',
    artist: 'Pitchblend',
  },
  {
    track: 'The Here and Hereafter',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Nova',
    artist: 'Keava',
  },
  {
    track: 'Белые Ночи/ Черные Дни',
    artist: 'Колчак',
  },
  {
    track: 'We Choose to go to the Moon',
    artist: "There's a Light",
  },
  {
    track: 'Fascinated Fear...',
    artist: 'moYan',
  },
  {
    track: 'Nostalgic',
    artist: 'Lander Configurations',
  },
  {
    track: "Isn't It Beautiful",
    artist: 'Secession Studios',
  },
  {
    track: 'Opening',
    artist: 'Maybeshewill',
  },
  {
    track: 'Take This to Heart',
    artist: 'Maybeshewill',
  },
  {
    track: 'Red Paper Lanterns',
    artist: 'Maybeshewill',
  },
  {
    track: 'Critical Distance',
    artist: 'Maybeshewill',
  },
  {
    track: 'Accolades',
    artist: 'Maybeshewill',
  },
  {
    track: 'An End To Camaraderie',
    artist: 'Maybeshewill',
  },
  {
    track: 'Farewell Sarajevo',
    artist: 'Maybeshewill',
  },
  {
    track: 'Words For Arabella',
    artist: 'Maybeshewill',
  },
  {
    track: 'Relative Minors',
    artist: 'Maybeshewill',
  },
  {
    track: 'Fake My Own Death',
    artist: 'Sum 41',
  },
  {
    track: 'Я и алкоголь',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Death And The Maiden',
    artist: 'Ghost Bath',
  },
  {
    track: 'The Silver Flower Pt. 2',
    artist: 'Ghost Bath',
  },
  {
    track: 'The Silver Flower pt. 1',
    artist: 'Ghost Bath',
  },
  {
    track: 'Beneath The Shade Tree',
    artist: 'Ghost Bath',
  },
  {
    track: 'Happyhouse',
    artist: 'Ghost Bath',
  },
  {
    track: 'Golden Number',
    artist: 'Ghost Bath',
  },
  {
    track: 'Le Noir Deep',
    artist: 'Like Desolate Like True',
  },
  {
    track: 'Mind Cramping Hum',
    artist: 'Like Desolate Like True',
  },
  {
    track: 'So May I Introduce To You',
    artist: 'Dilated Peoples',
  },
  {
    track: 'Need Help',
    artist: 'Mugl',
  },
  {
    track: '01. Sievert',
    artist: 'Nadja - SV [2016]',
  },
  {
    track: '1986-04-27 (Evacuation)',
    artist: 'NotNotice',
  },
  {
    track: '"02:16"',
    artist: 'KOFIN',
  },
  {
    track: 'Question',
    artist: 'KOFIN',
  },
  {
    track: 'Titanic',
    artist: 'KOFIN',
  },
  {
    track: 'Intercom №47',
    artist: 'KOFIN',
  },
  {
    track: 'Comeback',
    artist: 'KOFIN',
  },
  {
    track: 'Flesh And Blood',
    artist: 'We Rise The Tides',
  },
  {
    track: 'Hindsight',
    artist: 'Set in Stone',
  },
  {
    track: 'Back to Reality',
    artist: 'A Moment To Capture',
  },
  {
    track: 'Desertion',
    artist: 'Aspire',
  },
  {
    track: 'Seven Years',
    artist: 'Saosin',
  },
  {
    track: "If You Can't Hang",
    artist: 'Sleeping With Sirens',
  },
  {
    track: 'Fuck',
    artist: 'BMTH',
  },
  {
    track: "Don't go",
    artist: 'BMTH',
  },
  {
    track: 'Марио',
    artist: 'Anacondaz',
  },
  {
    track: 'Heathens',
    artist: 'Twenty One Pilots',
  },
  {
    track: "Robbo's Theme",
    artist: 'Clint Mansell',
  },
  {
    track: 'Tourniquet',
    artist: 'TesseracT',
  },
  {
    track: 'Ocean Avenue',
    artist: 'Yellowcard',
  },
  {
    track: 'что приходит ниоткуда и уходит в никуда',
    artist: '4 позиции бруно',
  },
  {
    track: 'Текст',
    artist: 'Птицами',
  },
  {
    track: 'Seven Prisoners',
    artist: 'Gyves',
  },
  {
    track: 'Нам всегда было свойственно преодолевать невозможное',
    artist: 'Первооткрыватели(Отрывок из к/ф "Интерстеллар"',
  },
  {
    track: '5. Член [Новый Рэп]',
    artist: 'Anacondaz',
  },
  {
    track: 'Против системы',
    artist: 'Anacondaz',
  },
  {
    track: 'Kali b ja zastaŭsia z taboj (album version)',
    artist: 'Akute',
  },
  {
    track: 'Tho You Are Gone I Still Often Walk W/You.',
    artist: 'The Silver Mt. Zion Memorial Orchestra & Tra-La-La Band',
  },
  {
    track: 'Under The Same Sun',
    artist: 'Ben Howard',
  },
  {
    track: 'Стоунхендж',
    artist: 'ATL',
  },
  {
    track: 'Подснежник (Dark Faders prod.)',
    artist: 'ATL',
  },
  {
    track: 'Кто ты?',
    artist: 'Дельфин',
  },
  {
    track: 'Романс',
    artist: 'Dolphin',
  },
  {
    track: 'Запись',
    artist: 'Dolphin',
  },
  {
    track: 'From Terminator 2',
    artist: 'Theme',
  },
  {
    track: 'BFG Division',
    artist: 'Mick Gordon',
  },
  {
    track: 'Till I Die (Machine Gun Kelly Cover)',
    artist: 'Wildways',
  },
  {
    track: 'Till I Die',
    artist: 'Machine Gun Kelly',
  },
  {
    track: 'Secret Invasion',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'New Beginning',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'Eva',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'Afraid of Destiny',
    artist: 'Denis Stelmakh',
  },
  {
    track: 'Бунт',
    artist: 'Скриптонит x Truwer',
  },
  {
    track: '5 здесь, 5 там [gazgolder.com]',
    artist: 'Скриптонит',
  },
  {
    track: 'REPLAY',
    artist: 'WOODJU X MITYA',
  },
  {
    track: 'One Sky Above Us',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Earth Crawler',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Singularity',
    artist: 'New Order',
  },
  {
    track: 'Edge Of The Earth',
    artist: 'Volumes',
  },
  {
    track: 'Broke Love',
    artist: 'Hotel Books',
  },
  {
    track: 'Фейков незарин',
    artist: 'DenDerty',
  },
  {
    track: 'Silver Bullet',
    artist: 'Architects',
  },
  {
    track: 'I Got 5 on It (Whiiite & ETC!ETC! Remix)',
    artist: 'Luniz',
  },
  {
    track: 'Audio On The Bay 2016 Mix',
    artist: 'Vincent',
  },
  {
    track: 'Поезд-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Walking with a Ghost (Kabu Remix)',
    artist: 'The National Fanfare of Kadebostany',
  },
  {
    track: 'Burdens',
    artist: 'Hold Me Above',
  },
  {
    track: 'Море Волнуется Раз',
    artist: 'K.E.FEAR',
  },
  {
    track: 'Всё плохое впереди',
    artist: 'DenDerty',
  },
  {
    track: 'Lane Boy',
    artist: 'Twenty One Pilots',
  },
  {
    track: 'Never So Lost',
    artist: 'Seirom',
  },
  {
    track: 'Skeletal Remains',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Constant Fear',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Destroying Angels',
    artist: 'Bohren & Der Club Of Gore',
  },
  {
    track: 'Dragonflies to Sew You Up',
    artist: 'Prurient',
  },
  {
    track: 'The Piano Drop',
    artist: 'Tim Hecker',
  },
  {
    track: 'Nihilism; Tied Up And Burning',
    artist: 'Gnaw Their Tongues',
  },
  {
    track: 'Playing With My Corpse',
    artist: 'Atrax Morgue',
  },
  {
    track: 'Flowers of flesh',
    artist: 'Nadja',
  },
  {
    track: 'Snowcone',
    artist: 'deadmau5',
  },
  {
    track: 'Ouverture',
    artist: 'janpalach',
  },
  {
    track: 'Opressiya',
    artist: 'General Grievous',
  },
  {
    track: 'Gravity',
    artist: 'Architects',
  },
  {
    track: 'альбатрос',
    artist: 'макулатура',
  },
  {
    track: 'Faka Faka Yeah',
    artist: 'Wildways',
  },
  {
    track: 'Memento Mori',
    artist: 'Architects',
  },
  {
    track: 'From The Wilderness',
    artist: 'Architects',
  },
  {
    track: 'Native Blood',
    artist: 'Silent Planet',
  },
  {
    track: 'Пренебрегая',
    artist: 'Ножевая Драка в Телефонной Будке',
  },
  {
    track: 'Berlin',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Open Water',
    artist: 'Thrice',
  },
  {
    track: 'So You Wanna Be A Superhero',
    artist: "Carissa's Wierd",
  },
  {
    track: 'DEA',
    artist: 'The American Dollar',
  },
  {
    track: 'Downfall',
    artist: 'Architects',
  },
  {
    track: 'Broke Love',
    artist: 'Hotel Books',
  },
  {
    track: 'My Life With You, My Life Without You',
    artist: 'Old Gray',
  },
  {
    track: 'A Poisoned Well',
    artist: 'Greaver',
  },
  {
    track: 'The Undertow',
    artist: 'Posture & The Grizzly',
  },
  {
    track: 'The Way',
    artist: 'Zack Hamsey',
  },
  {
    track: 'Slipshod (Urbandawn Remix)',
    artist: 'Enter Shikari',
  },
  {
    track: 'The Last Garrison (S.P.Y Remix)',
    artist: 'Enter Shikari',
  },
  {
    track: 'The Appeal & the Mindsweep I (Metrik Remix)',
    artist: 'Enter Shikari',
  },
  {
    track: 'Dear Future Historians (London Elektricity Remix)',
    artist: 'Enter Shikari',
  },
  {
    track: 'Myopia (Bop Remix)',
    artist: 'Enter Shikari',
  },
  {
    track: 'The One True Colour (Keeno Remix) www.livingelectro.com',
    artist: 'Enter Shikari',
  },
  {
    track: 'sovstad',
    artist: 'cedron',
  },
  {
    track: 'Frozen',
    artist: 'Devil Sold His Soul',
  },
  {
    track: 'This Song Made Me Think Of You',
    artist: 'Capsize',
  },
  {
    track: 'Guilt Free',
    artist: 'Conceptions',
  },
  {
    track: 'Heavy Minds',
    artist: 'Climates',
  },
  {
    track: 'When I Was 16, I Killed Myself',
    artist: 'Empty Handed',
  },
  {
    track: 'Hurt (Johnny Cash cover)',
    artist: 'Hundredth',
  },
  {
    track: 'Little Richie',
    artist: 'Being As An Ocean',
  },
  {
    track: 'May Be',
    artist: 'Crooks UK',
  },
  {
    track: 'LA Devotee',
    artist: 'Panic! At the Disco',
  },
  {
    track: 'Пока смеются дети',
    artist: 'Луперкаль',
  },
  {
    track: 'Giftminute',
    artist: 'Midvale',
  },
  {
    track: 'Out Of Control',
    artist: 'The Ghost Inside',
  },
  {
    track: 'Demons With Ryu',
    artist: 'Emmure',
  },
  {
    track: 'Замедляя ускоряя ночь',
    artist: 'Jane Air',
  },
  {
    track: 'Не Забывай Меня',
    artist: 'Jane Air',
  },
  {
    track: 'Emkay',
    artist: 'Bonobo',
  },
  {
    track: 'Sapphire',
    artist: 'Bonobo',
  },
  {
    track: 'Russia',
    artist: 'Ramona Falls',
  },
  {
    track: 'Chameleons',
    artist: 'L.O.S.A.I.G!',
  },
  {
    track: 'Under The Same Sun',
    artist: 'Ben Howard',
  },
  {
    track: 'Summerjam feat. Eecii McFly (instr. Code Black)',
    artist: 'ATL',
  },
  {
    track: 'Do You Remember',
    artist: 'More Than Life',
  },
  {
    track: 'Герои',
    artist: 'Sirotkin',
  },
  {
    track: 'Бейся сердце, время биться',
    artist: 'Sirotkin',
  },
  {
    track: 'Мир влюблён в тебя',
    artist: 'KROLiki',
  },
  {
    track: 'Windy Little Town',
    artist: 'Crooks UK',
  },
  {
    track: 'Emma',
    artist: 'Bad Bad Roxanne',
  },
  {
    track: 'Bonjour Tristesse',
    artist: 'Children Of Fall',
  },
  {
    track: 'AMRITA',
    artist: 'WOODJU',
  },
  {
    track: 'ULV',
    artist: 'WOODJU',
  },
  {
    track: 'Every Symphonic Night (Demo)',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'DAWGS (feat Kovalevsky)',
    artist: 'Loqiemean',
  },
  {
    track: 'Ulti',
    artist: ';QWE?-Yo',
  },
  {
    track: 'Useless (Prod. by Greaf)',
    artist: 'BONES',
  },
  {
    track: 'Меридиан (prod. Anton AK)',
    artist: 'Соло',
  },
  {
    track: 'Soft Room',
    artist: 'Lorn',
  },
  {
    track: 'Wandering',
    artist: 'LowXY',
  },
  {
    track: 'Lithium Where Your Shadow Goes (from V/A - Lithium)',
    artist: 'adoptahighway',
  },
  {
    track: 'Blind Eye (adoptahighway Remix)',
    artist: 'Oculi',
  },
  {
    track: 'Stuck In The System',
    artist: 'Lorn',
  },
  {
    track: 'Come Home',
    artist: 'Haruko',
  },
  {
    track: 'Clean Today',
    artist: 'Katatonia',
  },
  {
    track: "Tonight's Music",
    artist: 'Katatonia',
  },
  {
    track: 'Gore',
    artist: 'Deftones',
  },
  {
    track: 'Carry On',
    artist: 'Hundredth',
  },
  {
    track: 'Hurt',
    artist: 'Hundredth',
  },
  {
    track: 'Wolfes',
    artist: 'Quentin Sirjacq',
  },
  {
    track: 'Aquarius',
    artist: 'Quentin Sirjacq',
  },
  {
    track: 'Bodies',
    artist: 'Quentin Sirjacq',
  },
  {
    track: 'Beast Unburdened',
    artist: 'Shea Bilé',
  },
  {
    track: 'Hypnos',
    artist: 'Chelsea Wolfe',
  },
  {
    track: 'Cry',
    artist: 'Marmozets',
  },
  {
    track: 'How To Disappear Completely',
    artist: 'Radiohead',
  },
  {
    track: 'Your Name Here',
    artist: 'Atmosphere',
  },
  {
    track: 'Party Girl',
    artist: 'Chinawoman',
  },
  {
    track: 'Open',
    artist: 'The Cure',
  },
  {
    track: 'Попробуй Сама',
    artist: 'Морэ & Рэльсы',
  },
  {
    track: '8. Dirt',
    artist: 'BONES',
  },
  {
    track: 'DeadBoy',
    artist: 'Bones',
  },
  {
    track: 'HDMI',
    artist: 'BONES',
  },
  {
    track: 'RestInPeace (Prod. by The Virus And Antidote)',
    artist: 'BONES',
  },
  {
    track: 'my secret home',
    artist: 'WOODJU',
  },
  {
    track: 'Lost And Found',
    artist: 'Amon Tobin',
  },
  {
    track: 'Crack 1',
    artist: 'Markul',
  },
  {
    track: '26Monsters',
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'Open Your Mind',
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'Arms & Branches',
    artist: 'WoodJu x CoMa',
  },
  {
    track: "Don't Want You (ft. CoMa)",
    artist: 'WoodJu x CoMa',
  },
  {
    track: "I'm So Tired (ft. CoMa)",
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'Something Here (ft. CoMa)',
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'This Is Our Night (ft. CoMa)',
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'Unrequited (ft. CoMa)',
    artist: 'WoodJu x CoMa',
  },
  {
    track: 'BANGOSHI (DEMO)',
    artist: 'WOODJU',
  },
  {
    track: 'golwe (demo)',
    artist: 'WOODJU',
  },
  {
    track: 'Как же я был слаб в те дни',
    artist: 'Утро',
  },
  {
    track: 'И всюду запах затухших свечей',
    artist: 'Утро',
  },
  {
    track: 'Души стареют быстрее тел',
    artist: 'Утро',
  },
  {
    track: 'True',
    artist: 'Akira Yamaoka',
  },
  {
    track: 'Alone In The Town',
    artist: 'Akira Yamaoka',
  },
  {
    track: 'Null Moon',
    artist: 'Akira Yamaoka',
  },
  {
    track: 'Overdose Delusion',
    artist: 'Akira Yamaoka',
  },
  {
    track: 'Будда',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Груз',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Иллюзия',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Мода и облака',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Автоматизм',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Отдых',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Сторукий',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Вечеринка',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Джон-мщу-за-всех',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Вечеринка',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Gone With the Wind',
    artist: 'Architects',
  },
  {
    track: 'All Away',
    artist: 'Nouvelle Phénomène',
  },
  {
    track: 'Stormo & Goliad',
    artist: 'Yotsuya Kaidan',
  },
  {
    track: 'Tasmanian Tigers',
    artist: 'Yotsuya Kaidan',
  },
  {
    track: 'The Last Bastion',
    artist: 'Absence Of Sense',
  },
  {
    track: 'Flashback',
    artist: 'Porchy ft Oxxxymiron',
  },
  {
    track: 'Transformation',
    artist: 'The Cinematic Orchestra',
  },
  {
    track: 'Morning Has Broken',
    artist: 'David Nevue',
  },
  {
    track: 'Zeitgeist',
    artist: 'Kirill Richter',
  },
  {
    track: 'останься',
    artist: 'J22',
  },
  {
    track: 'вселенская вписка',
    artist: 'J22',
  },
  {
    track: 'творч',
    artist: 'J22',
  },
  {
    track: 'хроники текущих событий',
    artist: 'J22',
  },
  {
    track: 'здесь',
    artist: 'J22',
  },
  {
    track: 'слепое пятно',
    artist: 'J22',
  },
  {
    track: 'паучок всегда с тобой',
    artist: 'J22',
  },
  {
    track: 'когда взорвется Бетельгейзе?',
    artist: 'J22',
  },
  {
    track: 'стартапы из палеолита',
    artist: 'J22',
  },
  {
    track: 'ТЭЦ',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Hearts/Wires',
    artist: 'Deftones',
  },
  {
    track: 'Яма',
    artist: 'Marie Chante',
  },
  {
    track: 'Снег В Аду',
    artist: '[AMATORY]',
  },
  {
    track: 'Lock Bites Key',
    artist: 'Lorn',
  },
  {
    track: 'Mount Kwaku',
    artist: 'Lorn',
  },
  {
    track: 'TATTERED FLAG',
    artist: 'Lorn',
  },
  {
    track: 'BROKEN MANTRA',
    artist: 'LORN',
  },
  {
    track: 'Old Heart Falls',
    artist: 'Katatonia',
  },
  {
    track: 'The Party (Dr. Ozi Remix)',
    artist: 'Childish Gambino',
  },
  {
    track: 'until there is no end',
    artist: 'lorn',
  },
  {
    track: 'Diamond',
    artist: 'Lorn',
  },
  {
    track: 'I Want Magic',
    artist: 'WOODJU',
  },
  {
    track: 'V Λ C U U M',
    artist: 'WOODJU',
  },
  {
    track: 'Madness Of Harley Quinn',
    artist: 'THE IMPALA',
  },
  {
    track: 'Beyond The Stars',
    artist: 'THE IMPALA',
  },
  {
    track: 'Песня Вольного Ветра',
    artist: "Crane's Dreams",
  },
  {
    track: 'Everyday Was',
    artist: 'Black Milk',
  },
  {
    track: "What It's Worth",
    artist: 'Black Milk',
  },
  {
    track: 'Cold, Cold Hands',
    artist: 'Shirokuma',
  },
  {
    track: 'Until We Dissolve',
    artist: 'Glasir',
  },
  {
    track: 'Precipice',
    artist: 'Glasir',
  },
  {
    track: 'Covenant',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'Gu',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Banquet',
    artist: 'Bloc Party',
  },
  {
    track: 'Dance With Dragons',
    artist: 'BrunuhVille',
  },
  {
    track: 'You and I',
    artist: 'BrunuhVille',
  },
  {
    track: 'The Eternal Forest',
    artist: 'BrunuhVille',
  },
  {
    track: 'Lament',
    artist: 'Balmorhea',
  },
  {
    track: 'Remembrance',
    artist: 'Balmorhea',
  },
  {
    track: 'Fake Fealty',
    artist: 'Balmorhea',
  },
  {
    track: 'Theme No. 1',
    artist: 'Balmorhea',
  },
  {
    track: 'The Winter',
    artist: 'Balmorhea',
  },
  {
    track: 'Other (Intro)',
    artist: 'ONUKA',
  },
  {
    track: 'Other',
    artist: 'ONUKA',
  },
  {
    track: 'Vidlik',
    artist: 'ONUKA',
  },
  {
    track: 'Наёк Ёк [Рифмы и Панчи]',
    artist: 'Кровосток',
  },
  {
    track: 'Mountains',
    artist: 'Radical Face',
  },
  {
    track: 'A Pound of Flesh',
    artist: 'Radical Face',
  },
  {
    track: '04 - PROBOSCIS',
    artist: 'FLESH & SPACE',
  },
  {
    track: 'Октябрь',
    artist: "Crane's Dreams",
  },
  {
    track: 'The Water Vs. The Anchor',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'And The Hat Stays On',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'If I Knew Numbers (The Stalemate)',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'Caboose',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'Old Wives Tale',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'An Allusion To Italy',
    artist: 'On The Might Of Princes',
  },
  {
    track: "As Long As She Doesn't Smoke",
    artist: 'On The Might Of Princes',
  },
  {
    track: '13 Cheers For Beer And Bullshit',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'You Can Only Be So Careful',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'my secret home',
    artist: 'WOODJU',
  },
  {
    track: 'SUSHI',
    artist: 'WOODJU',
  },
  {
    track: 'The Water Vs. The Anchor',
    artist: 'On The Might Of Princes',
  },
  {
    track: 'Земля',
    artist: 'Dolphin',
  },
  {
    track: 'Суверенитет',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Le sablier',
    artist: 'Alexandra Streliski',
  },
  {
    track: 'Груз',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Оно',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Transmission',
    artist: 'Joy Division',
  },
  {
    track: 'Insight',
    artist: 'Joy Division',
  },
  {
    track: '6.66 утра',
    artist: 'вы соглашаетесь',
  },
  {
    track: 'коробка',
    artist: 'вы соглашаетесь',
  },
  {
    track: 'и все усилия обратились в прах (на стихи М. Маренкова)',
    artist: 'J22',
  },
  {
    track: 'Day Last',
    artist: 'IAMAGREATSTORM',
  },
  {
    track: 'Welcome To The Universe',
    artist: 'IAMAGREATSTORM',
  },
  {
    track: 'Небо-молот',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Sometimes I Feel Like Nothing',
    artist: 'Hotel Books',
  },
  {
    track: 'Весна',
    artist: '4 Позиции Бруно',
  },
  {
    track: 'proem',
    artist: 'elegy of me',
  },
  {
    track: 'iridescene',
    artist: 'elegy of me',
  },
  {
    track: 'steadfast',
    artist: 'elegy of me',
  },
  {
    track: 'selfimposed',
    artist: 'elegy of me',
  },
  {
    track: 'elegy',
    artist: 'elegy of me',
  },
  {
    track: 'anathemize',
    artist: 'elegy of me',
  },
  {
    track: 'in absence',
    artist: 'elegy of me',
  },
  {
    track: 'conceited (feat Paul of Sorrowka)',
    artist: 'elegy of me',
  },
  {
    track: 'the halt',
    artist: 'elegy of me',
  },
  {
    track: 'Ripples in a Water Scene',
    artist: 'Lubomyr Melnyk',
  },
  {
    track: 'Where We Sleep Is Where We Dream',
    artist: 'Hotel Books',
  },
  {
    track: 'A Match Made In Heaven',
    artist: 'Architects',
  },
  {
    track: 'Redshift',
    artist: 'Enter Shikari',
  },
  {
    track: 'Jigsaw',
    artist: 'Betraying The Martyrs',
  },
  {
    track: 'Your Voice',
    artist: 'Dreamshade',
  },
  {
    track: 'Stalemate',
    artist: 'Enter Shikari',
  },
  {
    track: 'Dead Letters',
    artist: 'Katatonia',
  },
  {
    track: 'Across The Bed',
    artist: 'Volumes',
  },
  {
    track: 'Unopened Letter',
    artist: 'September Stories',
  },
  {
    track: 'Detatched',
    artist: 'September Stories',
  },
  {
    track: 'Regret',
    artist: 'September Stories',
  },
  {
    track: 'Obsession',
    artist: 'September Stories',
  },
  {
    track: 'Let Love Bleed (feat. Shauna Nikles)',
    artist: 'September Stories',
  },
  {
    track: "I'd Give Anything to Feel Something",
    artist: 'September Stories',
  },
  {
    track: 'Outro',
    artist: 'September Stories',
  },
  {
    track: 'September',
    artist: 'Earth Wind and Fire',
  },
  {
    track: 'Show Must Go On',
    artist: 'Warrant',
  },
  {
    track: 'Genie(Dj Vatslav Mix)',
    artist: 'Jaisu',
  },
  {
    track: 'George',
    artist: 'The Casters',
  },
  {
    track: 'Rise of the Idiots (Original Mix)',
    artist: 'Skism',
  },
  {
    track: 'When The Sun Goes Down',
    artist: 'Unknown',
  },
  {
    track: 'Thrown Away',
    artist: 'Vast',
  },
  {
    track: 'Hot Dog',
    artist: 'LIMP BIZKIT',
  },
  {
    track: 'Reaction',
    artist: 'Ганджу',
  },
  {
    track: 'Street wolwe',
    artist: 'Ганджу',
  },
  {
    track: "New York Fuckin City (Dank's Trap Edit)",
    artist: 'DANK (USA)',
  },
  {
    track: 'Act III - The Outburst',
    artist: 'KOFIN',
  },
  {
    track: 'Rotten',
    artist: 'Hacktivist',
  },
  {
    track: 'Чёрный квадрат',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Lost In The Echo (Enmary Remix)',
    artist: 'Linkin Park',
  },
  {
    track: 'Giant',
    artist: 'Last Leaf Down',
  },
  {
    track: 'Inmost Life',
    artist: 'Last Leaf Down',
  },
  {
    track: 'In These Waters',
    artist: 'Last Leaf Down',
  },
  {
    track: 'Find Me',
    artist: 'Annabel Lee',
  },
  {
    track: 'Superstar (Cypress Hill cover)',
    artist: 'Hacktivist',
  },
  {
    track: "Don't Believe What They Say (feat. Angela McCluskey)",
    artist: 'Parov Stelar',
  },
  {
    track: 'Purple fluid',
    artist: 'Siberia*',
  },
  {
    track: 'Valkyrie',
    artist: 'Siberia*',
  },
  {
    track: 'Lost in wars',
    artist: 'Siberia*',
  },
  {
    track: 'Into the Void',
    artist: 'Glasir',
  },
  {
    track: 'Until We Dissolve',
    artist: 'Glasir',
  },
  {
    track: 'Precipice',
    artist: 'Glasir',
  },
  {
    track: "Noyabr'",
    artist: 'more future suffering',
  },
  {
    track: 'Stars on the Pillow',
    artist: 'more future suffering',
  },
  {
    track: 'Mn-t.15',
    artist: 'more future suffering',
  },
  {
    track: 'All Res',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Unspeakable World',
    artist: 'GoGo Penguin',
  },
  {
    track: 'Точка (feat. Илья Черепко-Самохвалов)',
    artist: 'Краснознаменная дивизия имени моей бабушки',
  },
  {
    track: 'Lasca de Madeira (Кики, 2015)',
    artist: 'КДИМБ',
  },
  {
    track: 'Know You',
    artist: 'Bonobo',
  },
  {
    track: "Robbo's Theme",
    artist: 'Clint Mansell',
  },
  {
    track: 'Meds×',
    artist: '× Placebo',
  },
  {
    track: 'Firestarter',
    artist: 'Capture The Crown',
  },
  {
    track: 'Narcissism of Self Animosity',
    artist: 'Isahi',
  },
  {
    track: 'Still',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Accidents (Alexisonfire lullaby cover)',
    artist: 'Sparrow Sleeps',
  },
  {
    track: 'Pyxis',
    artist: 'The Retuses',
  },
  {
    track: 'дурачок (п.у. Дзеси Икита)',
    artist: 'J22',
  },
  {
    track: 'Любит? Не Любит? Я Руки Ломаю',
    artist: 'Date Rape',
  },
  {
    track: 'Cold Waiting',
    artist: 'Shitao',
  },
  {
    track: 'Nights',
    artist: 'Shitao',
  },
  {
    track: 'Her Look',
    artist: 'Shitao',
  },
  {
    track: 'Човен',
    artist: 'Один в каное',
  },
  {
    track: 'Вулиця',
    artist: 'Один в каное',
  },
  {
    track: 'Реквієм',
    artist: 'Один в каное',
  },
  {
    track: 'Коти',
    artist: 'Один в каное',
  },
  {
    track: 'Aotfu',
    artist: '이사히',
  },
  {
    track: 'My Last Whisper',
    artist: '이사히',
  },
  {
    track: 'Eta Carinae (Instrumental)',
    artist: 'Haze',
  },
  {
    track: 'Eta Carinae',
    artist: 'Haze',
  },
  {
    track: 'каждый пытается',
    artist: 'totoro',
  },
  {
    track: 'Carry The Weight',
    artist: 'Adept',
  },
  {
    track: 'One True Color - Live Acoustic at Alexandra Palace',
    artist: 'Enter Shikari',
  },
  {
    track: 'Myopia - Live Acoustic at Alexandra Palace',
    artist: 'Enter Shikari',
  },
  {
    track: 'Torn Apart - Live Acoustic at Alexandra Palace',
    artist: 'Enter Shikari',
  },
  {
    track: 'Juggernauts - Live Acoustic at Alexandra Palace',
    artist: 'Enter Shikari',
  },
  {
    track: 'Juggernauts',
    artist: 'Enter Shikari',
  },
  {
    track: 'Mixtape December 2015',
    artist: 'Hacktivist',
  },
  {
    track: 'Deceive And Defy (feat. Jamie Graham)',
    artist: 'Hacktivist',
  },
  {
    track: 'Локоны',
    artist: 'Скриптонит',
  },
  {
    track: 'Goodbye...',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'Sad Cello',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'RUSH[Theme Suite - Part I]',
    artist: 'Hans Zimmer',
  },
  {
    track: 'Saints & Strangers',
    artist: 'Hans Zimmer',
  },
  {
    track: 'Catharsis is approaching',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'Power VIP',
    artist: 'SLANDER & NGHTMRE',
  },
  {
    track: "We're Doing It",
    artist: 'Rob Bailey & The Hustle Standard',
  },
  {
    track: 'В вишневых садах',
    artist: 'Comme il faut',
  },
  {
    track: 'Forever Lost',
    artist: 'God Is An Astronaut',
  },
  {
    track: 'The Deserted Dreams',
    artist: 'Flesh & Space',
  },
  {
    track: 'Suicidal Minds',
    artist: 'Flesh & Space',
  },
  {
    track: 'Silently Clambering on a Ceiling',
    artist: 'Flesh & Space',
  },
  {
    track: 'From...',
    artist: 'Flesh & Space',
  },
  {
    track: 'Pale Smile of an Overlooked Doll',
    artist: 'Flesh & Space',
  },
  {
    track: 'Sleep easy my child',
    artist: 'Flesh & Space',
  },
  {
    track: 'Road the Leader to the Home',
    artist: 'Flesh & Space',
  },
  {
    track: 'Formalin life',
    artist: 'Flesh & Space',
  },
  {
    track: 'Creeping Around Of It Self',
    artist: 'Flesh & Space',
  },
  {
    track: 'Swallowtale',
    artist: 'Plunger',
  },
  {
    track: 'H.S.',
    artist: 'Plunger',
  },
  {
    track: 'Handed',
    artist: 'Plunger',
  },
  {
    track: 'Enfolded By Plains',
    artist: 'Plunger',
  },
  {
    track: 'Walking To Dawn',
    artist: 'Plunger',
  },
  {
    track: "Inle'",
    artist: 'Plunger',
  },
  {
    track: 'Second Of June',
    artist: 'Plunger',
  },
  {
    track: 'Break The Silence',
    artist: 'Ash & Skies',
  },
  {
    track: 'Script',
    artist: 'Loma Prieta',
  },
  {
    track: 'Bridges',
    artist: 'Loma Prieta',
  },
  {
    track: 'Last City',
    artist: 'Loma Prieta',
  },
  {
    track: 'ASL',
    artist: 'I Set My Friends On Fire',
  },
  {
    track: 'Crank That',
    artist: 'I Set My Friends On Fire',
  },
  {
    track: 'Beauty Is In The Eyes Of the Beerholder',
    artist: 'I Set My Friends On Fire',
  },
  {
    track: 'Walking With A Ghost',
    artist: 'Kadebostany',
  },
  {
    track: 'Overnight',
    artist: 'KOFIN',
  },
  {
    track: 'Seagulls',
    artist: 'KOFIN',
  },
  {
    track: 'Nameless',
    artist: 'KOFIN',
  },
  {
    track: 'Number 50',
    artist: 'KOFIN',
  },
  {
    track: 'Dotted line',
    artist: 'KOFIN',
  },
  {
    track: 'Wear & Tear',
    artist: 'Foals',
  },
  {
    track: 'Slakerbitch',
    artist: 'Placebo',
  },
  {
    track: "Who's They",
    artist: 'Hans Zimmer - Interstellar ISP',
  },
  {
    track: 'They arrive',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'Embers in the Storm',
    artist: 'Hans Zimmer',
  },
  {
    track: 'Имя',
    artist: 'Дельфин',
  },
  {
    track: 'Возвращайся Домой (2016)',
    artist: 'Mujuice/Zemfira',
  },
  {
    track: 'Звезда (2004)',
    artist: 'Дельфин',
  },
  {
    track: 'The Mixture',
    artist: 'Volumes',
  },
  {
    track: '91367',
    artist: 'Volumes',
  },
  {
    track: 'Better Half',
    artist: 'Volumes',
  },
  {
    track: 'Erased',
    artist: 'Volumes',
  },
  {
    track: 'Across The Bed',
    artist: 'Volumes',
  },
  {
    track: 'Pistol Play',
    artist: 'Volumes',
  },
  {
    track: 'Vahle',
    artist: 'Volumes',
  },
  {
    track: 'Neon Eyes',
    artist: 'Volumes',
  },
  {
    track: 'Zzz(Zzz)',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'The Business of Living',
    artist: 'Adept',
  },
  {
    track: 'The Appeal & The Mindsweep I',
    artist: 'Enter Shikari',
  },
  {
    track: 'The One True Color',
    artist: 'Enter Shikari',
  },
  {
    track: 'Anaesthetist',
    artist: 'Enter Shikari',
  },
  {
    track: 'Never Lеt Go Of Microscope',
    artist: 'Enter Shikari',
  },
  {
    track: 'Myopia',
    artist: 'Enter Shikari',
  },
  {
    track: 'Torn Apart',
    artist: 'Enter Shikari',
  },
  {
    track: 'The Bank Of England',
    artist: 'Enter Shikari',
  },
  {
    track: 'Dear Future Historians...',
    artist: 'Enter Shikari',
  },
  {
    track: 'The Appeal & The Mindsweep II',
    artist: 'Enter Shikari',
  },
  {
    track: 'No Sleep (Full Album Preview)',
    artist: 'Volumes',
  },
  {
    track: 'Ashland (feat. Mark Mironov of Betraying The Martyrs)',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Vortex (feat. Sam Arrag of Apart And Divided)',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Unexpected (feat. Sam Arrag of Apart And Divided)',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Magdalene (feat. Sam Arrag of Apart And Divided)',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'The Pressure',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Rage Fighter',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Eternity',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Nonsense',
    artist: 'Change Of Loyalty',
  },
  {
    track: 'Endless night',
    artist: 'Mournful Party',
  },
  {
    track: 'Voice of abyss',
    artist: 'Mournful Party',
  },
  {
    track: 'War Song',
    artist: 'Follow The White Rabbit',
  },
  {
    track: 'A Beautiful Lie',
    artist: '30 Seconds To Mars',
  },
  {
    track: 'Attack',
    artist: '30 Seconds To Mars',
  },
  {
    track: 'We Were Just Kids',
    artist: 'Emmure',
  },
  {
    track: 'Dark Clouds',
    artist: 'Adept',
  },
  {
    track: 'No Guts, No Glory',
    artist: 'Adept',
  },
  {
    track: 'This Day On Our Side',
    artist: 'Sky Architects',
  },
  {
    track: 'Честный обмен (album version)',
    artist: 'Anacondaz',
  },
  {
    track: 'Before You Start Your Day',
    artist: 'Twenty One Pilots',
  },
  {
    track: 'Nuclear (Metal Gear Solid 5: The Phantom Pain OST)',
    artist: 'Mike Oldfield',
  },
  {
    track: 'Empty Squares And Thinner Lines',
    artist: 'Shirokuma',
  },
  {
    track: 'The Rabbits Hole',
    artist: 'Shirokuma',
  },
  {
    track: 'Well',
    artist: 'Shirokuma',
  },
  {
    track: 'Marble White',
    artist: 'Shirokuma',
  },
  {
    track: 'Crystal Shell',
    artist: 'Shirokuma',
  },
  {
    track: 'Узор',
    artist: 'Anacondaz',
  },
  {
    track: 'Круглый год "Дети и Радуга (2012)"',
    artist: 'Anacondaz',
  },
  {
    track: 'La Boîte À Musique',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Still',
    artist: 'Rhian Sheehan',
  },
  {
    track: 'Hometown',
    artist: 'twenty one pilots',
  },
  {
    track: 'Ups&Downs',
    artist: 'Crystal Lake',
  },
  {
    track: 'Always',
    artist: 'Fatherson',
  },
  {
    track: 'Грач',
    artist: 'Краснознаменная дивизия имени моей бабушки',
  },
  {
    track: 'Саундчек',
    artist: 'Краснознаменная дивизия имени моей бабушки',
  },
  {
    track: 'Beloved',
    artist: 'Crystal Lake',
  },
  {
    track: 'I Will',
    artist: 'Hands',
  },
  {
    track: 'Ghandi Mate, Ghandi',
    artist: 'Enter Shikari',
  },
  {
    track: 'ребенок нью эйджа',
    artist: 'J22',
  },
  {
    track: 'останься',
    artist: 'J22',
  },
  {
    track: 'порядок вещей (п.у. kommunikaция)',
    artist: 'J22',
  },
  {
    track: 'Дайвер',
    artist: 'SunSay',
  },
  {
    track: 'Притон',
    artist: 'Скриптонит',
  },
  {
    track: 'All Is Violent, All Is Bright (2005)',
    artist: 'God Is An Astronaut',
  },
  {
    track: 'Sad Cello',
    artist: 'Alexandr Tulupov',
  },
  {
    track: 'I kill people',
    artist: 'Ганджу',
  },
  {
    track: 'Nowena | 9.10',
    artist: 'Amenra',
  },
  {
    track: 'Nasty',
    artist: 'The Prodigy',
  },
  {
    track: 'Untitled',
    artist: 'The Green Kingdom',
  },
  {
    track: 'Летучий Корабль',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Карамаджонг',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Состоянье',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Зима',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Лемминкайнен',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Все Храпят',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Обратно в ракушку',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Реинкарнация',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'VI',
    artist: 'состояние птиц',
  },
  {
    track: 'Листья',
    artist: 'Дельфин',
  },
  {
    track: 'The Ocean Grave',
    artist: 'Adept',
  },
  {
    track: 'Girls',
    artist: 'The Prodigy',
  },
  {
    track: '9.80665',
    artist: 'Jane Air',
  },
  {
    track: 'all i need',
    artist: 'clams casino',
  },
  {
    track: 'Belenos',
    artist: 'Toundra',
  },
  {
    track: 'все времена года',
    artist: 'октябрьское вещание',
  },
  {
    track: 'Breathe Us',
    artist: 'Annabel Lee',
  },
  {
    track: 'Клетка',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'A Stolen Car',
    artist: 'Nils Frahm',
  },
  {
    track: 'Our Own Roof',
    artist: 'Nils Frahm',
  },
  {
    track: 'A Stolen Car',
    artist: 'Nils Frahm',
  },
  {
    track: 'In The Parking Garage',
    artist: 'Nils Frahm',
  },
  {
    track: 'Them',
    artist: 'Nils Frahm',
  },
  {
    track: 'The Bank',
    artist: 'Nils Frahm',
  },
  {
    track: 'The Shooting',
    artist: 'Nils Frahm',
  },
  {
    track: 'Nobody Knows Who You Are',
    artist: 'Nils Frahm',
  },
  {
    track: 'Pendulum',
    artist: 'Nils Frahm',
  },
  {
    track: 'Noise Floor',
    artist: 'I/Ø',
  },
  {
    track: 'Bait & Switch',
    artist: 'I/Ø',
  },
  {
    track: 'Four Dimensions',
    artist: 'Ludovico Einaudi',
  },
  {
    track: 'Scarlet Skyline',
    artist: 'More Than Life',
  },
  {
    track: 'Who Gets Your Love',
    artist: 'Vanilla',
  },
  {
    track: 'Pyxis',
    artist: 'The Retuses',
  },
  {
    track: 'Lasdehnen',
    artist: 'The Retuses',
  },
  {
    track: 'Uncool As Me (feat. Joey Fatone)',
    artist: 'Bloodhound Gang',
  },
  {
    track: 'Молчать и смотреть',
    artist: 'The Retuses',
  },
  {
    track: "Doing' It Right",
    artist: 'Daft Punk',
  },
  {
    track: 'На вершине горы (2014)',
    artist: 'The Korea',
  },
  {
    track: 'Поезд-Призрак',
    artist: 'Колчак',
  },
  {
    track: 'Mahakala',
    artist: 'Crystal Lake',
  },
  {
    track: 'Down, Set, Go',
    artist: 'Underoath',
  },
  {
    track: 'At Las[t]',
    artist: 'Structures',
  },
  {
    track: 'Правда',
    artist: 'Sayanara',
  },
  {
    track: "Even If You Win, You're Still a Rat",
    artist: 'Architects',
  },
  {
    track: 'Constellations',
    artist: 'Enter Shikari',
  },
  {
    track: 'Untitled',
    artist: 'Architects',
  },
  {
    track: 'unspoken',
    artist: 'ritmo',
  },
  {
    track: 'at sea',
    artist: 'ritmo',
  },
  {
    track: 'Судьба (Fate)',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'Sleepless (Album Preview)',
    artist: 'Adept',
  },
  {
    track: 'Мама, я люблю',
    artist: 'Anacondaz',
  },
  {
    track: 'DIPPED INTO POISON',
    artist: 'LORN',
  },
  {
    track: 'Oxbow B',
    artist: 'Lorn',
  },
  {
    track: 'Царапина',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Гомункул',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'всем доволен (петля пристрастия cover)',
    artist: 'Дария Титова',
  },
  {
    track: 'Вниз [gazgolder.com]',
    artist: 'Скриптонит',
  },
  {
    track: 'Чудо',
    artist: 'DenDerty',
  },
  {
    track: '4. Клятвы [Один на один (2014)]',
    artist: 'Звери',
  },
  {
    track: 'Кладбище самолётов',
    artist: 'Валентин Стрыкало',
  },
  {
    track: 'Accidents (Alexisonfire lullaby cover)',
    artist: 'Sparrow Sleeps',
  },
  {
    track: 'нетинебудет (instr.)',
    artist: 'J22',
  },
  {
    track: 'Sleepwalking',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Gentle silence',
    artist: 'Everything is made in china',
  },
  {
    track: 'Echoes',
    artist: 'Everything Is Made in China',
  },
  {
    track: 'Speed My Way',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Fetters',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Dance Pianist',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'Moving Fragments',
    artist: 'Everything Is Made In China',
  },
  {
    track: 'дурачок (п.у. Дзеси Икита)',
    artist: 'J22',
  },
  {
    track: 'не знаю (п.у. Дзеси Икита)',
    artist: 'J22',
  },
  {
    track: 'был в сети',
    artist: 'J22',
  },
  {
    track: 'шутка (на стихи М. Маренкова)',
    artist: 'J22',
  },
  {
    track: 'случайная вакансия',
    artist: 'J22',
  },
  {
    track: 'Untitled',
    artist: 'The Green Kingdom',
  },
  {
    track: 'Лям [gazgolder.com]',
    artist: 'Скриптонит',
  },
  {
    track: 'Океан [gazgolder.com]',
    artist: 'Скриптонит',
  },
  {
    track: 'ABC',
    artist: 'Ludovico Einaudi',
  },
  {
    track: 'Elements',
    artist: 'Ludovico Einaudi',
  },
  {
    track: 'Night',
    artist: 'Ludovico Einaudi',
  },
  {
    track: 'Drop',
    artist: 'Ludovico Einaudi',
  },
  {
    track: 'Дома [gazgolder.com]',
    artist: 'Скриптонит',
  },
  {
    track: 'Refulgence',
    artist: 'Last Leaf Down',
  },
  {
    track: 'In Dreams',
    artist: 'Last Leaf Down',
  },
  {
    track: 'Dusted  ',
    artist: 'Astroid Boys',
  },
  {
    track: 'триумф плоти',
    artist: 'вы соглашаетесь',
  },
  {
    track: 'есть, что вспомнить',
    artist: 'J22',
  },
  {
    track: '私は舞う枯葉。風任せな躍動を自律と『錯誤』する縹渺たる虚体。',
    artist: 'té',
  },
  {
    track: '思想も共感もいらず、ただ幻聴を誘発する『起因』としての音楽。',
    artist: 'té',
  },
  {
    track: '道徳はうつろう教義であり、その『閾』は昼と夜でさえ変容する。',
    artist: 'té',
  },
  {
    track: '『有』。',
    artist: 'té',
  },
  {
    track: '終焉から振り返る我が夢は、陰影の濃淡に浮かぶ『光』の残り香。',
    artist: 'té',
  },
  {
    track: '自由と孤独は秤の上の矛盾であり、その均衡にこそ『檻』がある。',
    artist: 'té',
  },
  {
    track: '離散的な欠片の集合が混沌から『秩序』に変わる時、美は発現す。',
    artist: 'té',
  },
  {
    track: '意味を喪失した時、虚無は私を冒し、享楽だけが『慰』みとなる。',
    artist: 'té',
  },
  {
    track: '夜は光を掩蔽し、幾多の秘密を酌み、さかしまな『夢想』を育む。',
    artist: 'té',
  },
  {
    track: 'Карма велогонщика (вариантов - ноль)',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Дом тысячи сквозняков feat. Ка-тет',
    artist: 'Horus',
  },
  {
    track: 'Прогулка feat. Eecii McFly',
    artist: 'Horus',
  },
  {
    track: 'Проебал feat. Eecii McFly',
    artist: 'Horus',
  },
  {
    track: 'Ночь feat. Rip',
    artist: 'Horus',
  },
  {
    track: 'Ореол',
    artist: 'Horus',
  },
  {
    track: 'МТТН feat. ATL',
    artist: 'Horus',
  },
  {
    track: 'Универсум',
    artist: 'Horus',
  },
  {
    track: "These Colours Don't Run",
    artist: 'Architects',
  },
  {
    track: '97202',
    artist: 'The Tumbled Sea',
  },
  {
    track: 'Не трожь меня, я в хороводе',
    artist: 'DenDerty',
  },
  {
    track: 'Тотальное самоубийство',
    artist: 'DenDerty',
  },
  {
    track: 'Drones',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Mirage',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Ruach',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Ellipse',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Holding Rivers',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Aria',
    artist: 'Oh Hiroshima',
  },
  {
    track: 'Фейков незарин',
    artist: 'DenDerty',
  },
  {
    track: 'Сорваны рамы',
    artist: 'DenDerty',
  },
  {
    track: 'pain and pleasure',
    artist: 'WOODJU X M()RE',
  },
  {
    track: 'LØST T∑MPO',
    artist: 'WOODJU',
  },
  {
    track: 'Утро Которым Мы Умрем',
    artist: 'Mujuice',
  },
  {
    track: 'На Луне',
    artist: 'Mujuice',
  },
  {
    track: 'Кровь На Танцполе',
    artist: 'Mujuice',
  },
  {
    track: 'Каждый день',
    artist: 'Mujuice',
  },
  {
    track: 'Выздоравливай скорей!',
    artist: 'Mujuice',
  },
  {
    track: 'Приключения',
    artist: 'Mujuice',
  },
  {
    track: 'Милый друг',
    artist: 'Mujuice',
  },
  {
    track: 'Обещания',
    artist: 'Mujuice',
  },
  {
    track: 'Юность',
    artist: 'Mujuice',
  },
  {
    track: 'Города',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Different (feat. Logonaut)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Marathon',
    artist: 'Birds In Row',
  },
  {
    track: 'Не выходи из комнаты (Бродский)',
    artist: '43ai',
  },
  {
    track: 'Above the Earth',
    artist: 'If These Trees Could Talk',
  },
  {
    track: 'Dear Youth (Day 52)',
    artist: 'The Ghost Inside',
  },
  {
    track: 'Другие',
    artist: '[Amatory]',
  },
  {
    track: 'Остановить время',
    artist: '[Amatory]',
  },
  {
    track: '15/03',
    artist: '[Amatory]',
  },
  {
    track: 'Mercy',
    artist: 'The Ghost Inside',
  },
  {
    track: 'Untitled II',
    artist: 'Architects',
  },
  {
    track: 'Shadow Of A Doubt',
    artist: 'Architects',
  },
  {
    track: 'The Distant Blue',
    artist: 'Architects',
  },
  {
    track: 'Youth Is Wasted On The Young',
    artist: 'Architects',
  },
  {
    track: 'Colony Collapse',
    artist: 'Architects',
  },
  {
    track: 'C.A.N.C.E.R',
    artist: 'Architects',
  },
  {
    track: 'Dead Man Talking',
    artist: 'Architects',
  },
  {
    track: 'Broken Cross',
    artist: 'Architects',
  },
  {
    track: 'Naysayer',
    artist: 'Architects',
  },
  {
    track: 'Gravedigger',
    artist: 'Architects',
  },
  {
    track: 'Devils Island',
    artist: 'Architects',
  },
  {
    track: 'Hollow Crown',
    artist: 'Architects',
  },
  {
    track: 'Follow the Water',
    artist: 'Architects',
  },
  {
    track: 'Desire',
    artist: 'Meg Myers',
  },
  {
    track: 'Ghandi Mate, Ghandi',
    artist: 'Enter Shikari',
  },
  {
    track: 'Sssnakepit',
    artist: 'Enter Shikari',
  },
  {
    track: 'I Have a Problem ☠',
    artist: 'Beartooth',
  },
  {
    track: 'The Wretched',
    artist: 'Attack Attack!',
  },
  {
    track: 'Elephants',
    artist: 'Our Last Night',
  },
  {
    track: 'Things That Rhyme With Orange',
    artist: 'I Set My Friends On Fire',
  },
  {
    track: 'Stick Stickly',
    artist: 'Attack Attack!',
  },
  {
    track: 'Second and Sebring',
    artist: 'Of Mice And Man',
  },
  {
    track: 'ОПРСТ',
    artist: 'Harajiev Smokes Virginia!',
  },
  {
    track: 'The Ivory Tower',
    artist: 'Adept',
  },
  {
    track: 'Enter',
    artist: '10th Fiord',
  },
  {
    track: "Flower's Secret",
    artist: '10th Fiord',
  },
  {
    track: 'Aftermath',
    artist: 'Adept',
  },
  {
    track: 'Heart Vs. Beats',
    artist: 'Adept',
  },
  {
    track: 'Friends That Used To Be',
    artist: 'Adept',
  },
  {
    track: 'Means To An End',
    artist: 'Adept',
  },
  {
    track: 'Orion',
    artist: 'Adept',
  },
  {
    track: 'Dead Planet',
    artist: 'Adept',
  },
  {
    track: 'Secrets',
    artist: 'Adept',
  },
  {
    track: '...Meltdown',
    artist: 'Enter Shikari',
  },
  {
    track: 'System...',
    artist: 'Enter Shikari',
  },
  {
    track: 'Forever And A Day',
    artist: 'Adept',
  },
  {
    track: 'Gangsta',
    artist: 'ScHoolboy Q',
  },
  {
    track: 'Second Sight',
    artist: 'The American Dollar',
  },
  {
    track: 'Теперь (перевод Atmosphere)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Интуиция и Наука',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Лацканы',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Интеллект с кулаками',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Честно feat. Oxxxymiron',
    artist: 'I1',
  },
  {
    track: 'Acid Rain',
    artist: 'Lorn',
  },
  {
    track: 'Singularity',
    artist: 'New Order',
  },
  {
    track: 'Leave a Trace',
    artist: 'CHVRCHES',
  },
  {
    track: 'No Roof',
    artist: 'MadBliss',
  },
  {
    track: 'Tourniquet',
    artist: 'TesseracT',
  },
  {
    track: 'Surrender',
    artist: 'Billy Talent',
  },
  {
    track: 'Shifted Thoughts (feat. La Mar)',
    artist: 'Mazde',
  },
  {
    track: '3. Nevermore',
    artist: 'I am waiting for you last summer (Come Full Circle / 2011)',
  },
  {
    track: 'Away from here',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Solar Wind',
    artist: 'I Am Waiting For You Last Summer',
  },
  {
    track: 'Girls In The Back',
    artist: 'White Rose Movement',
  },
  {
    track: 'Even I, Even You',
    artist: 'Role',
  },
  {
    track: 'John P.',
    artist: 'Tiny Moving Parts',
  },
  {
    track: 'Forest cowboys',
    artist: 'Siberia*',
  },
  {
    track: 'No Line on the Horizon',
    artist: 'Defying the Decay',
  },
  {
    track: 'Take Your Lies Away',
    artist: 'Hearthsides',
  },
  {
    track: 'Exodus 23:1 (feat. The Dream)',
    artist: 'Pusha T',
  },
  {
    track: 'Numbers On The Board',
    artist: 'Pusha T',
  },
  {
    track: 'Event horizon',
    artist: 'I am waiting for you last summer',
  },
  {
    track: "Dreamers' shelter",
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Medley Season',
    artist: 'I Am Waiting For You Last Summer',
  },
  {
    track: 'Fashion Killa',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Black Shoes',
    artist: 'Funeralbloom',
  },
  {
    track: 'Бездыханным [vk.com/oxxxymiron]',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Psycho',
    artist: 'Yellow Claw & GRX & Cesqeaux',
  },
  {
    track: 'Kaolo Pt. 2',
    artist: 'Yellow Claw',
  },
  {
    track: 'Gangsigns',
    artist: 'Gameface',
  },
  {
    track: 'Hold Me Close [cut]',
    artist: 'NGHTMRE',
  },
  {
    track: 'The Quarantine',
    artist: 'SAYMYNAME',
  },
  {
    track: 'Rampage',
    artist: 'SAYMYNAME',
  },
  {
    track: 'Engine 45',
    artist: 'The Ghost Inside',
  },
  {
    track: 'Bangkok (Datadex Re-Rub)',
    artist: 'Boris Dlugosch',
  },
  {
    track: 'Woah',
    artist: 'SAYMYNAME',
  },
  {
    track: 'Turning It Up',
    artist: 'Made Monster X SCRVP',
  },
  {
    track: 'Without U',
    artist: 'WATGOOD',
  },
  {
    track: 'Warning',
    artist: 'NGHTMRE & Slander',
  },
  {
    track: 'Live @ Alfa Future People 2015',
    artist: 'Dropzone',
  },
  {
    track: 'Bless That (feat. Tha Trickaz & Armanni Reign)',
    artist: '12th Planet',
  },
  {
    track: 'Street',
    artist: 'NGHTMRE',
  },
  {
    track: 'Addiction',
    artist: 'Aksaut',
  },
  {
    track: 'Arrival of the Birds',
    artist: 'The Cinematic Orchestra',
  },
  {
    track: 'فتاة سخيفة',
    artist: 'CAIN',
  },
  {
    track: 'нетинебудет',
    artist: 'J22',
  },
  {
    track: 'Проснись',
    artist: 'John Doe',
  },
  {
    track: '4. Наших планет нет [prod. prvrln] (#XYND 2015)',
    artist: 'Schokk',
  },
  {
    track:
      '2. XYND (feat. Шура Кузнецова) [prod. Никола Мельников] (#XYND 2015)',
    artist: 'Schokk',
  },
  {
    track: '7. Грусть [prod. prvrln] (#XYND 2015)',
    artist: 'Schokk',
  },
  {
    track: '12. По плану [prod. I|MaxMuzik] (#XYND 2015)',
    artist: 'Schokk',
  },
  {
    track: '15. Outro [prod. (I|MaxMuzik] (#XYND 2015)',
    artist: 'Schokk',
  },
  {
    track: 'Безумие (RMX) [Новый Рэп]',
    artist: 'Oxxxymiron & ЛСП',
  },
  {
    track: 'Sweetness [FULL ALBUM]',
    artist: 'Bonobo',
  },
  {
    track: 'Black Sands (full album)',
    artist: 'Bonobo',
  },
  {
    track: 'Cloower Wooma',
    artist: 'Mix 4 Another Music',
  },
  {
    track: 'Long Rifle',
    artist: '22LR',
  },
  {
    track: "Merethe Soltvedt's Vocals",
    artist: 'Merethe Soltvedt, Two Steps From Hell, Thomas J.Bergersen',
  },
  {
    track: "we don't sleep at night",
    artist: '22LR',
  },
  {
    track: 'short jmps',
    artist: '22LR',
  },
  {
    track: '28 days later cover',
    artist: 'Lerimpresa',
  },
  {
    track: 'If the Last Star Fell',
    artist: 'Lerimpresa',
  },
  {
    track: 'Iron Sky',
    artist: 'Paolo Nutini',
  },
  {
    track: 'Kavachi',
    artist: 'Manitee & Sober Rob',
  },
  {
    track: 'Final Frontier',
    artist: 'Thomas Bergersen',
  },
  {
    track: 'Time (Inception OST, covered by Alvarez Guitars)',
    artist: 'Hans Zimmer',
  },
  {
    track: 'Marry Me (OST Pirates Of The Caribbean Unreleased Material)',
    artist: 'Hans Zimmer',
  },
  {
    track: 'Interstellar: Main Theme',
    artist: 'Hans Zimmer',
  },
  {
    track: 'gnrtn',
    artist: 'WOODJU',
  },
  {
    track: 'Элегантный народ',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Tell Me',
    artist: 'Emalkay',
  },
  {
    track: 'Один на один',
    artist: 'Звери - Один на один (2014)',
  },
  {
    track: 'Солнце за нас',
    artist: 'Звери',
  },
  {
    track: 'gnrtn (demo)',
    artist: 'WOODJU',
  },
  {
    track: 'Earthboy',
    artist: 'DIIV',
  },
  {
    track: 'Goodbye, 2007',
    artist: '65daysofstatic',
  },
  {
    track: 'Смена',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Kiev',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Safe In The Steep Cliffs (Full Album)',
    artist: 'Emancipator',
  },
  {
    track: 'Afterglow',
    artist: 'Emancipator',
  },
  {
    track:
      'The Angry River (feat. Father John Misty & S. I. Istwa, True Detective OST 8 Episode)',
    artist: 'The Hat',
  },
  {
    track: 'Undercover Martyn',
    artist: 'Two Door Cinema Club',
  },
  {
    track: 'Cigarettes In The Theatre',
    artist: 'Two Door Cinema Club',
  },
  {
    track: 'Otherside',
    artist: 'Red Hot Chili Peppers',
  },
  {
    track: 'Cant Stop',
    artist: 'Red Hot Chili Peppers',
  },
  {
    track: 'Другая музыка',
    artist: 'THE CINEMATIC ORCHESTRA',
  },
  {
    track: 'Your Way',
    artist: 'Netsky',
  },
  {
    track: 'Tech Nine',
    artist: 'Styles Of Beyond',
  },
  {
    track: 'Кошкино время',
    artist: 'Некоторое Отсутствие Пуговиц',
  },
  {
    track: 'Page One',
    artist: 'Clem Leek',
  },
  {
    track: "And Now, She's Gone",
    artist: 'Clem Leek',
  },
  {
    track: 'Другая музыка',
    artist: 'THE AMERICAN DOLLAR+ интервью+ ASTRAL 2',
  },
  {
    track: 'A Familiar Taste',
    artist: 'Trent Reznor and Atticus Ross',
  },
  {
    track: 'Ready To Go 2014',
    artist: 'Limp Bizkit ft. Lil Wayne',
  },
  {
    track: 'Sleep',
    artist: 'The Dandy Warhols',
  },
  {
    track: 'From Nowhere',
    artist: 'Dan Croll',
  },
  {
    track: 'Golden Skans',
    artist: 'Klaxons',
  },
  {
    track: 'In The End',
    artist: 'Black Veil Brides',
  },
  {
    track: 'keep it low',
    artist: 'Ганджу',
  },
  {
    track: 'Your Motivation',
    artist: 'Ганджу',
  },
  {
    track: 'Swart Hart',
    artist: 'Ганджу',
  },
  {
    track: 'Reaction[ vk.com/evilmickey ]',
    artist: 'Ганджу',
  },
  {
    track: 'Heist Successful (Payday 2 OST)',
    artist: 'Simon Viklund',
  },
  {
    track: 'Dusk to Dawn [full album]',
    artist: 'Emancipator',
  },
  {
    track: 'Mad World (instrumental)',
    artist: 'Adam Lambert',
  },
  {
    track: 'On Melancholy Hill',
    artist: 'Gorillaz',
  },
  {
    track: 'Clint Eastwood',
    artist: 'Gorillaz',
  },
  {
    track: '19-2000',
    artist: 'Gorillaz',
  },
  {
    track: 'Pirate Jet',
    artist: 'Gorillaz',
  },
  {
    track: 'Stylo',
    artist: 'Gorillaz',
  },
  {
    track: 'Rhinestone Eyes',
    artist: 'Gorillaz',
  },
  {
    track: 'Kids With Guns',
    artist: 'Gorillaz',
  },
  {
    track: 'Tommorow Comes Today',
    artist: 'Gorillaz',
  },
  {
    track: 'El Manana',
    artist: 'Gorillaz',
  },
  {
    track: 'Feel Good Inc',
    artist: 'Gorillaz',
  },
  {
    track: 'Снайпер',
    artist: 'Кровосток',
  },
  {
    track: 'Ногти',
    artist: 'Кровосток',
  },
  {
    track: 'Летом',
    artist: 'Кровосток',
  },
  {
    track: 'То что ползает...',
    artist: 'Кровосток',
  },
  {
    track: 'Череповец',
    artist: 'Кровосток',
  },
  {
    track: 'Ломбард',
    artist: 'Кровосток',
  },
  {
    track: 'Зёма',
    artist: 'Кровосток',
  },
  {
    track: 'Секс это',
    artist: 'Кровосток',
  },
  {
    track: 'Загробная',
    artist: 'Кровосток',
  },
  {
    track: 'Патологоанатом',
    artist: 'Кровосток',
  },
  {
    track: 'В баре',
    artist: 'Кровосток',
  },
  {
    track: 'Unmake the Wild Light',
    artist: '65daysofstatic',
  },
  {
    track: 'Prisms',
    artist: '65daysofstatic',
  },
  {
    track: 'Heat Death Infinity Splitter',
    artist: '65daysofstatic',
  },
  {
    track: 'Radio Protector',
    artist: '65daysofstatic',
  },
  {
    track: 'Fix the Sky a Little',
    artist: '65daysofstatic',
  },
  {
    track: 'Hole',
    artist: '65daysofstatic',
  },
  {
    track: 'The Fall Of Math',
    artist: '65daysofstatic',
  },
  {
    track: 'I Swallowed Hard, Like I Understood',
    artist: '65daysofstatic',
  },
  {
    track: 'Retreat! Retreat!',
    artist: '65daysofstatic',
  },
  {
    track: 'Весна опять наебала',
    artist: 'Лёха Никонов',
  },
  {
    track: 'Винстон',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Дворы',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Наша Ночь',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Край Ночи',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Все Зря!',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Каждый прожитый миг',
    artist: 'Top-Display!',
  },
  {
    track: 'В мире животных',
    artist: 'Top-Display!',
  },
  {
    track: 'Одиночество',
    artist: 'Top-Display!',
  },
  {
    track: 'Вас добавили',
    artist: 'Top-Display!',
  },
  {
    track: 'Ураган',
    artist: 'Top-Display!',
  },
  {
    track: 'Если не наступит завтра',
    artist: 'Top-Display!',
  },
  {
    track: 'Мир оживших машин',
    artist: 'Top-Display!',
  },
  {
    track: 'Does',
    artist: 'Pompeya',
  },
  {
    track: '90',
    artist: 'Pompeya',
  },
  {
    track: 'Slow',
    artist: 'Pompeya',
  },
  {
    track: 'Real',
    artist: 'Pompeya',
  },
  {
    track: 'Pasadena',
    artist: 'Pompeya',
  },
  {
    track: '(Druun)',
    artist: 'DIIV',
  },
  {
    track: 'Human',
    artist: 'DIIV',
  },
  {
    track: 'Oshin (Subsume)',
    artist: 'DIIV',
  },
  {
    track: 'Wait',
    artist: 'DIIV',
  },
  {
    track: 'Past Lives',
    artist: 'DIIV',
  },
  {
    track: 'How Long Have You Known?',
    artist: 'DIIV',
  },
  {
    track: 'Doused',
    artist: 'DIIV',
  },
  {
    track: 'Ride',
    artist: 'Twenty One Pilots',
  },
  {
    track: 'Stressed Out',
    artist: 'Twenty One Pilots',
  },
  {
    track: 'Meridian',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'June 22',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Ritual',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'War',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Emmy',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Aurora',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Vostok',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'Whales',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'LOVE',
    artist: 'Eleventh Vibration',
  },
  {
    track: 'The World Was Once Beautiful',
    artist: 'September',
  },
  {
    track: 'The World Will Continue Spinning Without Me',
    artist: 'September',
  },
  {
    track: 'The Stars Will Continue Shining Without You',
    artist: 'September',
  },
  {
    track: 'Your Voice Fades, In Time',
    artist: 'September',
  },
  {
    track: 'Flutter',
    artist: 'Bonobo',
  },
  {
    track: 'Days To Come',
    artist: 'Bonobo',
  },
  {
    track: 'Not Tomorrow (Piano)',
    artist: 'Silent Hill',
  },
  {
    track: 'No Strings Attached',
    artist: 'Netsky',
  },
  {
    track: 'Sweater Weather',
    artist: 'Vitamin String Quartet',
  },
  {
    track: 'Feel Good Inc.',
    artist: 'The Vitamin String Quartet',
  },
  {
    track: "don't panic",
    artist: 'the vitamin string quartet',
  },
  {
    track: 'Street Spirit (Tribute To Radiohead)',
    artist: 'The Vitamin String Quartet',
  },
  {
    track: 'In The End (LP cover)',
    artist: 'The Vitamin String Quartet',
  },
  {
    track: "Don't Panic",
    artist: 'Coldplay',
  },
  {
    track: 'Numb',
    artist: 'The Vitamin String Quartet',
  },
  {
    track: 'Still Waiting (Sum 41 cover)',
    artist: 'The Vitamin String Quartet',
  },
  {
    track: "Jack's Smirking Revenge",
    artist: 'The Dust Brothers',
  },
  {
    track: 'Нищеброд (Мой Диплом)',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Проснись',
    artist: 'John Doe',
  },
  {
    track: 'Нам всегда было свойственно преодолевать невозможное',
    artist: 'Первооткрыватели',
  },
  {
    track: 'mix 4 Another Music',
    artist: 'Insane Fennel',
  },
  {
    track: 'Touched',
    artist: 'VAST',
  },
  {
    track: 'и дельфины',
    artist: 'Персонаж',
  },
  {
    track: 'Другая музыка',
    artist: 'INCUBUS',
  },
  {
    track: 'Plain',
    artist: 'Jesse Boykins III',
  },
  {
    track: 'An unfinished life',
    artist: 'Audiomachine',
  },
  {
    track: 'V Λ C U U M',
    artist: 'Ганджу',
  },
  {
    track: 'les rues',
    artist: '22LR',
  },
  {
    track: 'Dionysus',
    artist: '22LR',
  },
  {
    track: 'shade',
    artist: '22LR',
  },
  {
    track: 'Get The Fuck Up!',
    artist: 'Yelawolf',
  },
  {
    track: 'brain tumor',
    artist: 'Ганджу',
  },
  {
    track: 'Fucking Heat ⇆',
    artist: 'Ганджу',
  },
  {
    track: 'Street wolwe',
    artist: 'Ганджу',
  },
  {
    track: 'I feel',
    artist: 'Ганджу',
  },
  {
    track: 'September',
    artist: 'Earth Wind and Fire',
  },
  {
    track: 'Show Must Go On',
    artist: 'Warrant',
  },
  {
    track: 'Genie(Dj Vatslav Mix)',
    artist: 'Jaisu',
  },
  {
    track: 'George',
    artist: 'The Casters',
  },
  {
    track: 'HPL (концовка песни)',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Земфире',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'мы бы задыхались...от нежности',
    artist: 'Эрнесто Заткнитесь и Земфира',
  },
  {
    track: 'Тhe game is on',
    artist: 'OST Шерлок Холмс сериал ВВС',
  },
  {
    track: 'Бродский в Крыму',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Шинель',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Бывших всегда встречаешь в самых непредсказуемых местах',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Фон Триер',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Серая Лада',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'ГОΛОС',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Памяти «Винампа»',
    artist: 'Эрнесто Заткнитесь',
  },
  {
    track: 'Times',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Wind Song',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Tema celeste',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Michael',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: "Un'Ora",
    artist: 'Roberto CacciapagLia',
  },
  {
    track: 'Atlantico',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Sarabanda',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Danza in Re minore',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: "We've only just begun (OST 1408)",
    artist: 'The Carpenters',
  },
  {
    track: 'Серебро',
    artist: 'Дельфин',
  },
  {
    track: 'Весна',
    artist: 'Дельфин',
  },
  {
    track: 'Тебя',
    artist: 'Дельфин',
  },
  {
    track: 'Июнь',
    artist: 'Дельфин',
  },
  {
    track: 'Back Home (feat. Mos Def, Acyde & A$AP Yams)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Everyday (feat. Rod Stewart & Miguel)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Dreams (Interlude)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'M’$ [Remix] (feat. Lil’ Wayne)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Better Things',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Westside Highway (feat. James Fauntleroy)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Pharsyde (feat. Joe Fox)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Electric Body (feat. Schoolboy Q, Theola Borden & Joe Fox)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Lord Pretty Flacko Jodye 2 (Lpfj2)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'JD (feat. James Franco)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'L$D',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Excuse Me',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Canal St. (feat. Bones)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Fine Whine (feat. M.I.A., Future & Joe Fox)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Holy Ghost (feat. Joe Fox)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'War of The World',
    artist: 'DJ Pablo',
  },
  {
    track: 'W.A.R.',
    artist: 'Dj Pablo',
  },
  {
    track: 'One Bboy',
    artist: 'DJ PaBLo',
  },
  {
    track: "BBOY'S WAR",
    artist: 'DJ PABLO',
  },
  {
    track: 'Эпиграф',
    artist: 'Мокрица',
  },
  {
    track: 'Серая пыль',
    artist: 'Мокрица',
  },
  {
    track: 'Рядом со мной',
    artist: 'Мокрица',
  },
  {
    track: 'Я твой друг до конца',
    artist: 'Мокрица',
  },
  {
    track: 'Млечная желанная',
    artist: 'Мокрица',
  },
  {
    track: 'Быть другим',
    artist: 'Мокрица',
  },
  {
    track: 'Metropolis | Dubstep Sector',
    artist: 'Emalkay',
  },
  {
    track: 'Massive',
    artist: 'Emalkay',
  },
  {
    track: 'The Last Garrison',
    artist: 'Enter Shikari',
  },
  {
    track: 'Self vs Self(feat. "In Flames")',
    artist: 'Pendulum',
  },
  {
    track: 'Recurring',
    artist: 'Bonobo',
  },
  {
    track: 'Pick up',
    artist: 'Bonobo',
  },
  {
    track: 'The Last Garrison',
    artist: 'Enter Shikari',
  },
  {
    track: 'Sorry, You Are Not A Winner',
    artist: 'Enter Shikari',
  },
  {
    track: "What's Beef",
    artist: 'A$AP Rocky',
  },
  {
    track: 'Wood Nymph | KLEFTIS 2014',
    artist: 'Scady',
  },
  {
    track: 'Chop Suey (System of a Down cover)',
    artist: 'Enter Shikari',
  },
  {
    track: 'El Poder',
    artist: 'OsoLuna',
  },
  {
    track: 'Belenos',
    artist: 'Toundra',
  },
  {
    track: 'Four Years Dead',
    artist: 'September',
  },
  {
    track: 'Three Small Words Have Always Kept Me Running',
    artist: 'September',
  },
  {
    track: 'Fall Asleep',
    artist: 'September',
  },
  {
    track: 'Sunlight',
    artist: 'September',
  },
  {
    track: 'Нет!',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'Что Такое Счастье?',
    artist: 'Последние Танки В Париже',
  },
  {
    track: 'хитиновый покров (oxxxymiron cover)',
    artist: 'Святослав Свидригайлов',
  },
  {
    track: 'Volt',
    artist: 'Yung Lean',
  },
  {
    track: 'Дежавю',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Човен (на слова Франка)',
    artist: 'Один в каное',
  },
  {
    track: 'Пообіцяй мені',
    artist: 'Один в каное',
  },
  {
    track: 'First Snow',
    artist: 'Emancipator',
  },
  {
    track: 'Safe In The Steep Cliffs',
    artist: 'Emancipator',
  },
  {
    track: 'Mystery (Live)',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'Autumn Dance',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'Doused',
    artist: 'DIIV',
  },
  {
    track: 'Мне бы дышать',
    artist: 'Top-Display!',
  },
  {
    track: 'Главное-манёвр!',
    artist: 'Василий Стрельников',
  },
  {
    track: 'New York Bittersweet Symphony',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Lord Pretty Flacko Jodye 2',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Energy',
    artist: 'Drake',
  },
  {
    track: 'Sweatpants',
    artist: 'Childish Gambino',
  },
  {
    track: '90',
    artist: 'Pompeya',
  },
  {
    track: 'Жаркое Лето',
    artist: 'Top-Display!',
  },
  {
    track: 'Palace',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Ghetto Symphony (feat. Gunplay & A$AP Ferg)',
    artist: 'A$AP Rocky',
  },
  {
    track: 'Backseat Freestyle',
    artist: 'Kendrick Lamar',
  },
  {
    track: 'Качели',
    artist: 'John Doe',
  },
  {
    track: 'miXXXtape II: Долгий путь домой (2013)',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Бегчы',
    artist: 'Akute',
  },
  {
    track: 'Constellations',
    artist: 'Enter Shikari',
  },
  {
    track: 'Belenos',
    artist: 'Toundra',
  },
  {
    track: 'Maraclea',
    artist: 'Keava',
  },
  {
    track: 'The Scientis',
    artist: 'Coldplay',
  },
  {
    track: 'The Reason',
    artist: 'Hoobastank',
  },
  {
    track: 'Больше Бена',
    artist: 'Oxxxymiron & OXPA',
  },
  {
    track: 'Неваляшка',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Retreat! Retreat!',
    artist: '65daysofstatic',
  },
  {
    track: "Aren't We All Running?",
    artist: '65daysofstatic',
  },
  {
    track: 'Адзiноцтва',
    artist: 'AKUTE',
  },
  {
    track: 'Сухим Из Воды',
    artist: 'Markul',
  },
  {
    track: 'ZLOI NEGR',
    artist: 'Markul',
  },
  {
    track: 'У моей мечты (video version)',
    artist: 'Проект Увечье (Луперкаль)',
  },
  {
    track: 'Топь',
    artist: 'Луперкаль',
  },
  {
    track: 'Through The Glass',
    artist: 'Stone Sour',
  },
  {
    track: 'Гонзо',
    artist: 'Луперкаль',
  },
  {
    track: 'Безысходность',
    artist: 'Луперкаль',
  },
  {
    track: 'Медвежий угол',
    artist: 'Луперкаль',
  },
  {
    track: '? & James',
    artist: 'Pat Metheny, Christian Mcbride, Antonio Sanchez',
  },
  {
    track: 'Если меня совсем нет',
    artist: 'Дима Птицами',
  },
  {
    track: 'Признаки жизни',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Хитиновый Покров [vk.com/oxxxymiron]',
    artist: 'Oxxxymiron',
  },
  {
    track: 'Дорога',
    artist: 'ПТВП',
  },
  {
    track: 'My calujem sonca',
    artist: 'AKUTE',
  },
  {
    track: 'Ночь',
    artist: 'Кровосток',
  },
  {
    track: 'Зимняя',
    artist: 'Кровосток',
  },
  {
    track: 'Метадон',
    artist: 'Кровосток',
  },
  {
    track: 'Фейков незарин',
    artist: 'DenDerty',
  },
  {
    track: 'Солнечный Город',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'В правильной комнате',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Radio Protector',
    artist: '65daysofstatic',
  },
  {
    track: 'Wind',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'Compassion',
    artist: 'Ilya Beshevli',
  },
  {
    track: 'The Fall Of Math',
    artist: '65daysofstatic',
  },
  {
    track: 'Earth Burns',
    artist: 'Porchy feat. Oxxxymiron',
  },
  {
    track: 'Ножи',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Эпилептроник',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Сатурн',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Жарче, чем солнце',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Диктор',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'А вообще (Ура космосу!)',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Секс Это (2014)',
    artist: 'Кровосток',
  },
  {
    track: 'Сэмплер альбома "Ломбард"',
    artist: 'Кровосток',
  },
  {
    track: 'Into Darkness',
    artist: 'Thomas Bergersen',
  },
  {
    track: 'Interstellar Trailer No. 4 Music Culmination',
    artist: 'Thomas Bergersen',
  },
  {
    track: 'Solitude',
    artist: 'Nikola Melnikov',
  },
  {
    track: 'Всем доволен',
    artist: 'Петля пристрастия',
  },
  {
    track: 'Дышать и смотреть',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Dead Dogs',
    artist: 'Lorn',
  },
  {
    track: 'Weigh Me Down',
    artist: 'Lorn',
  },
  {
    track: 'Mercy',
    artist: 'Lorn',
  },
  {
    track: 'Times',
    artist: 'Roberto Cacciapaglia',
  },
  {
    track: 'Идеального нету',
    artist: 'Петля пристрастия',
  },
  {
    track: 'Entangled',
    artist: 'Lorn',
  },
  {
    track: 'Through The Walls',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Автоматизм',
    artist: 'Петля Пристрастия',
  },
  {
    track: 'Promise You Gave Me',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Endless',
    artist: 'I am waiting for you last summer',
  },
  {
    track: 'Альпы Пальмы (BarBQ remix)',
    artist: 'Илья Лагутенко и Mars Needs Lovers',
  },
  {
    track: 'Альпы Пальмы (Illuminated Faces remix)',
    artist: 'Илья Лагутенко и Mars Needs Lovers',
  },
  {
    track: 'Альпы Пальмы',
    artist: 'Илья Лагутенко и Mars Needs Lovers',
  },
];

export default tracks;
