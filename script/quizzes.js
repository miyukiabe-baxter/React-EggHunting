const quizzes = [
  {
    category: 'Science: Computers',
    correct_answer: 'Serbia',
    difficulty: 'medium',
    incorrect_answers: ['Romania', 'Russia', 'Rwanda'],
    question: '.rs is the top-level domain for what country?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Philosophy',
    difficulty: 'medium',
    incorrect_answers: ['Psychology', 'Phrenology', 'Physical Therapy'],
    question: 'A doctor with a PhD is a doctor of what?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Truth',
    difficulty: 'easy',
    incorrect_answers: ['Answer', 'Cause', 'Source'],
    question:
      'According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Five',
    difficulty: 'medium',
    incorrect_answers: ['Twenty', 'Ten', 'One hundred'],
    question:
      'According to the United States CDC, one in how many Americans die annually due to smoking?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Hewlett-Packard',
    difficulty: 'medium',
    incorrect_answers: ['Toshiba', 'Asus', 'Dell'],
    question:
      'Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Game Maker',
    difficulty: 'hard',
    incorrect_answers: ['Stencyl', 'Construct', 'Torque 2D'],
    question:
      'Dutch computer scientist Mark Overmars is known for creating which game development engine?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Markup Language',
    difficulty: 'easy',
    incorrect_answers: [
      'Macro Language',
      'Programming Language',
      'Scripting Language'
    ],
    question: 'HTML is what type of language?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '10 Gb/s',
    difficulty: 'medium',
    incorrect_answers: ['5 Gb/s', '8 Gb/s', '1 Gb/s'],
    question: 'How fast is USB 3.1 Gen 2 theoretically?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '50',
    difficulty: 'hard',
    incorrect_answers: ['59', '60', '25'],
    question: 'How many Hz does the video standard PAL support?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Adios',
    difficulty: 'easy',
    incorrect_answers: ['Hola', 'Au Revoir', 'Salir'],
    question: 'How would one say goodbye in Spanish?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'You smell extremely unpleasant.',
    difficulty: 'hard',
    incorrect_answers: [
      'You are out of shape/weak.',
      'Your appearance is repulsive.',
      'You are incomprehensible/an idiot.'
    ],
    question: 'If someone said "you are olid", what would they mean?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: '$12.7 Billion',
    difficulty: 'medium',
    incorrect_answers: ['$95 Million', '$956 Million', '$2.7 Billion'],
    question: 'In 2013 how much money was lost by Nigerian scams?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Jumping over an office chair',
    difficulty: 'medium',
    incorrect_answers: [
      'Jumping backwards over a desk',
      'Standing on his head',
      'Typing on a keyboard during a handstand'
    ],
    question:
      'In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Hearts',
    difficulty: 'medium',
    incorrect_answers: ['Spades', 'Diamonds', 'Clubs'],
    question:
      'In a standard set of playing cards, which is the only king without a moustache?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Command Line Interface',
    difficulty: 'medium',
    incorrect_answers: [
      'Common Language Input',
      'Control Line Interface',
      'Common Language Interface'
    ],
    question: 'In computing terms, typically what does CLI stand for?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Traffic Collision Avoidance System',
    difficulty: 'hard',
    incorrect_answers: [
      'Traffic Communication Alert System',
      'Traffic Configuration Alignment System',
      'Traffic Call-sign Abbreviation System'
    ],
    question: 'In flight systems, what does the initialism "TCAS" stand for?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Watch',
    difficulty: 'easy',
    incorrect_answers: ['Money', 'Keys', 'Notebook'],
    question: 'In past times, what would a gentleman keep in his fob pocket?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'S',
    difficulty: 'medium',
    incorrect_answers: ['O', 'A', 'C'],
    question: 'In the Morse code, which letter is indicated by 3 dots?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: '1955',
    difficulty: 'medium',
    incorrect_answers: ['1964', '1951', '1947'],
    question: "In what year was McDonald's founded?",
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: "Arby's",
    difficulty: 'easy',
    incorrect_answers: ["McDonald's", 'Burger King', "Wendy's"],
    question: 'In which fast food chain can you order a Jamocha Shake?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '140',
    difficulty: 'easy',
    incorrect_answers: ['120', '160', '100'],
    question: 'On Twitter, what is the character limit for a Tweet?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Cheetah',
    difficulty: 'hard',
    incorrect_answers: ['Puma', 'Tiger', 'Leopard'],
    question:
      'Released in 2001, the first edition of Apple Mac OS X operating system (version 10.0) was given what animal code name?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Dennis Ritchie',
    difficulty: 'easy',
    incorrect_answers: ['Tim Berners Lee', 'al-Khwārizmī', 'Willis Ware'],
    question:
      'The C programming language was created by this American computer scientist. ',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Instruction',
    difficulty: 'hard',
    incorrect_answers: ['Address', 'Data', 'Control'],
    question:
      'The Harvard architecture for micro-controllers added which additional bus?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Taiwan',
    difficulty: 'medium',
    incorrect_answers: [
      'United States',
      'Germany',
      "China (People's Republic of)"
    ],
    question:
      'The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Hexidecimal',
    difficulty: 'easy',
    incorrect_answers: ['Binary', 'Duodecimal', 'Octal'],
    question:
      'The numbering system with a radix of 16 is more commonly referred to as ',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'HD Graphics 500',
    difficulty: 'easy',
    incorrect_answers: [
      'HD Graphics 700 ',
      'HD Graphics 600',
      'HD Graphics 7000'
    ],
    question:
      'The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Economics',
    difficulty: 'medium',
    incorrect_answers: ['Philosophy', 'Politics', 'Physics'],
    question:
      'This field is sometimes known as &ldquo;The Dismal Science.&rdquo;',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Gin',
    difficulty: 'medium',
    incorrect_answers: ['Vodka', 'Rum', 'Tequila'],
    question: 'What alcoholic drink is mainly made from juniper berries?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Ampersand',
    difficulty: 'medium',
    incorrect_answers: ['Interrobang', 'Tilde', 'Pilcrow'],
    question:
      'What character was once considered to be the 27th letter of the alphabet?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Ampersand',
    difficulty: 'medium',
    incorrect_answers: ['Interrobang', 'Tilde', 'Pilcrow'],
    question:
      'What character was once considered to be the 27th letter of the alphabet?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Kentucky Fried Chicken',
    difficulty: 'easy',
    incorrect_answers: [
      'Kentucky Fresh Cheese',
      'Kibbled Freaky Cow',
      'Kiwi Food Cut'
    ],
    question: 'What do the letters of the fast food chain KFC stand for?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Hats',
    difficulty: 'medium',
    incorrect_answers: ['Shoes', 'Belts', 'Shirts'],
    question: 'What does a milliner make and sell?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Moving Picture',
    difficulty: 'easy',
    incorrect_answers: ['Music Player', 'Multi Pass', 'Micro Point'],
    question: 'What does the "MP" stand for in MP3?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Subscriber',
    difficulty: 'easy',
    incorrect_answers: ['Single', 'Secure', 'Solid'],
    question:
      'What does the "S" stand for in the abbreviation SIM, as in SIM card?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Kibibyte',
    difficulty: 'hard',
    incorrect_answers: ['Kylobyte', 'Kilobyte', 'Kelobyte'],
    question:
      'What does the International System of Quantities refer 1024 bytes as?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'I came, I saw, I conquered',
    difficulty: 'hard',
    incorrect_answers: [
      'See no evil, hear no evil, speak no evil',
      'Life, liberty, and happiness',
      'Past, present, and future'
    ],
    question:
      'What does the Latin phrase "Veni, vidi, vici" translate into English?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer:
      "Captures what's on the screen and copies it to your clipboard",
    difficulty: 'easy',
    incorrect_answers: [
      'Nothing',
      "Saves a .png file of what's on the screen in your screenshots folder in photos",
      'Closes all windows'
    ],
    question: 'What does the Prt Sc button do?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Content Delivery Network',
    difficulty: 'medium',
    incorrect_answers: [
      'Content Distribution Network',
      'Computational Data Network',
      'Compressed Data Network'
    ],
    question: 'What does the acronym CDN stand for in terms of networking?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Graphics Processing Unit',
    difficulty: 'medium',
    incorrect_answers: [
      'Gaming Processor Unit',
      'Graphite Producing Unit',
      'Graphical Proprietary Unit'
    ],
    question: 'What does the term GPU stand for?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Multipurpose Internet Mail Extensions',
    difficulty: 'medium',
    incorrect_answers: [
      'Mail Internet Mail Exchange',
      'Multipurpose Interleave Mail Exchange',
      'Mail Interleave Method Exchange'
    ],
    question: 'What does the term MIME stand for, in regards to computing?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Octagon',
    difficulty: 'easy',
    incorrect_answers: ['Hexagon', 'Circle', 'Triangle'],
    question: 'What geometric shape is generally used for stop signs?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'IRC',
    difficulty: 'hard',
    incorrect_answers: ['HTTP', 'HTTPS', 'FTP'],
    question: 'What internet protocol was documented in RFC 1459?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'A body pillow',
    difficulty: 'medium',
    incorrect_answers: [
      'A Chinese meal, essentially composed of fish',
      'A yoga posture',
      'A word used to describe two people who truly love each other'
    ],
    question: 'What is a "dakimakura"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'A flag',
    difficulty: 'medium',
    incorrect_answers: ['A rope', 'A window', 'A type of food'],
    question: 'What is a Burgee?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer:
      'A mall with high vacancy rates or low consumer foot traffic',
    difficulty: 'medium',
    incorrect_answers: [
      'A mall with no stores',
      'A mall that has been condemed',
      'A mall after business hours'
    ],
    question: 'What is a dead mall?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Central Processing Unit',
    difficulty: 'medium',
    incorrect_answers: [
      'Motherboard',
      '"Graphics Processing Unit"',
      'Keyboard'
    ],
    question: 'What is known as "the brain" of the Computer?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Chapeau',
    difficulty: 'easy',
    incorrect_answers: ['Bonnet', 'Eacute', 'Casque'],
    question: 'What is the French word for "hat"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Pomodoro',
    difficulty: 'medium',
    incorrect_answers: ['Aglio', 'Cipolla', 'Peperoncino'],
    question: 'What is the Italian word for "tomato"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Burro',
    difficulty: 'easy',
    incorrect_answers: ['Caballo', 'Toro', 'Perro'],
    question: 'What is the Spanish word for "donkey"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: '24 MPH',
    difficulty: 'hard',
    incorrect_answers: ['15 MPH', '20 MPH', '200 MPH'],
    question: 'What is the airspeed velocity of an unladen swallow?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Nougat',
    difficulty: 'easy',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Skin',
    difficulty: 'easy',
    incorrect_answers: ['Heart', 'large Intestine', 'Liver'],
    question: 'What is the largest organ of the human body?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Jones',
    difficulty: 'easy',
    incorrect_answers: ['Williams', 'Davies', 'Evans'],
    question: 'What is the most common surname Wales?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '.svg',
    difficulty: 'easy',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Polska',
    difficulty: 'easy',
    incorrect_answers: ['Pupcia', 'Polszka', 'Pland'],
    question: 'What is the name of Poland in Polish?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Rosh Hashanah',
    difficulty: 'easy',
    incorrect_answers: ['Elul', 'New Year', 'Succoss'],
    question: 'What is the name of the Jewish New Year?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Me at the zoo',
    difficulty: 'medium',
    incorrect_answers: [
      'tribute',
      'carrie rides a truck',
      'Her new puppy from great grandpa vern.'
    ],
    question: 'What is the name of the very first video uploaded to YouTube?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Feiji',
    difficulty: 'hard',
    incorrect_answers: ['Qiche', 'Zongxian', 'Huojian'],
    question: 'What is the romanized Chinese word for "airplane"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Simjang',
    difficulty: 'hard',
    incorrect_answers: ['Aejeong', 'Jeongsin', 'Segseu'],
    question: 'What is the romanized Korean word for "heart"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Zima',
    difficulty: 'medium',
    incorrect_answers: ['Leto', 'Vesna', 'Osen'],
    question: 'What is the romanized Russian word for "winter"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Kip',
    difficulty: 'medium',
    incorrect_answers: ['Ruble', 'Konra', 'Dollar'],
    question: 'What is the unit of currency in Laos?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Saffron',
    difficulty: 'medium',
    incorrect_answers: ['Cinnamon', 'Cardamom', 'Vanilla'],
    question: "What is the world's most expensive spice by weight?",
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Bearings',
    difficulty: 'easy',
    incorrect_answers: ['Axles', 'Gears', 'Belts'],
    question:
      'What machine element is located in the center of fidget spinners?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Mike',
    difficulty: 'easy',
    incorrect_answers: ['Matthew', 'Mark', 'Max'],
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Bulldog',
    difficulty: 'hard',
    incorrect_answers: ['Yorkshire Terrier', 'Boxer', 'Pug'],
    question:
      'What type of dog is "Handsome Dan", the mascot of Yale University?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Intel 4004',
    difficulty: 'medium',
    incorrect_answers: ['Intel 486SX', 'TMS 1000', 'AMD AM386'],
    question: 'What was the first commerically available computer processor?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Jelly Bean',
    difficulty: 'medium',
    incorrect_answers: ['Lollipop', 'Nutella', 'Froyo'],
    question: 'What was the name given to Android 4.3?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'BackRub',
    difficulty: 'medium',
    incorrect_answers: ['CatMassage', 'SearchPro', 'Netscape Navigator'],
    question: 'What was the original name of the search engine "Google"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Tango',
    difficulty: 'easy',
    incorrect_answers: ['Target', 'Taxi', 'Turkey'],
    question:
      'What word represents the letter "T" in the NATO phonetic alphabet?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: '2004',
    difficulty: 'hard',
    incorrect_answers: ['2000', '2001', '2006'],
    question: 'What year was the RoboSapien toy robot released?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '2016',
    difficulty: 'medium',
    incorrect_answers: ['2013', '2009', '2011'],
    question: 'When did the online streaming service "Mixer" launch?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: '2004',
    difficulty: 'medium',
    incorrect_answers: ['2005', '2003', '2006'],
    question: 'When did the website "Facebook" launch?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: '2000',
    difficulty: 'medium',
    incorrect_answers: ['1998', '1999', '2001'],
    question: 'When was the programming language "C" released?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'South America',
    difficulty: 'medium',
    incorrect_answers: ['Hawaii', 'Europe', 'Asia'],
    question: 'Where did the pineapple plant originate?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Cupertino, California',
    difficulty: 'hard',
    incorrect_answers: [
      'Redwood City California',
      'Redmond Washington',
      'Santa Monica CA'
    ],
    question: 'Where is Apple Inc. headquartered?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'George Washington',
    difficulty: 'easy',
    incorrect_answers: [
      'Thomas Jefferson',
      'Abraham Lincoln',
      'Benjamin Franklin'
    ],
    question: 'Which American president appears on a one dollar bill?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'JavaScript',
    difficulty: 'medium',
    incorrect_answers: ['C#', 'Python', 'PHP'],
    question:
      'Which coding language was the #1 programming language in terms of usage on GitHub in 2015?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Motherboard',
    difficulty: 'easy',
    incorrect_answers: [
      'Central Processing Unit',
      'Hard Disk Drive',
      'Random Access Memory'
    ],
    question:
      'Which computer hardware device provides an interface for all other connected devices to communicate?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Stack',
    difficulty: 'hard',
    incorrect_answers: ['Queue', 'Heap', 'Tree'],
    question: 'Which data structure does FILO apply to?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Wasabi ',
    difficulty: 'medium',
    incorrect_answers: ['Mentsuyu', 'Karashi', 'Ponzu'],
    question:
      'Which essential condiment is also known as Japanese horseradish?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Kilt',
    difficulty: 'medium',
    incorrect_answers: ['Skirt', 'Dress', 'Rhobes'],
    question:
      'Which item of clothing is usually worn by a Scotsman at a wedding?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'C#',
    difficulty: 'medium',
    incorrect_answers: ['Java', 'C++', 'Objective-C'],
    question:
      'Which of the following languages is used as a scripting language in the Unity 3D game engine?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'John F. Kennedy',
    difficulty: 'easy',
    incorrect_answers: [
      'Theodore Roosevelt',
      'Abraham Lincoln',
      'Thomas Jefferson'
    ],
    question: 'Which of the following presidents is not on Mount Rushmore?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Jonathan Ive',
    difficulty: 'medium',
    incorrect_answers: ['Steve Jobs', 'Ronald Wayne', 'Steve Wozniak'],
    question: 'Which of these people was NOT a founder of Apple Inc?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Assembly',
    difficulty: 'medium',
    incorrect_answers: ['Python', 'C#', 'Pascal'],
    question: 'Which of these programming languages is a low-level language?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Heartbleed',
    difficulty: 'hard',
    incorrect_answers: ['Shellshock', '"Corrupted Blood"', 'Shellscript'],
    question:
      'Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Rock Band',
    difficulty: 'easy',
    incorrect_answers: [
      'Meat Beat Mania',
      'Guitar Hero Live',
      'Dance Dance Revolution'
    ],
    question: 'Which one of the following rhythm games was made by Harmonix?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'IKEA',
    difficulty: 'hard',
    incorrect_answers: ['H & M', 'Lindex', 'Clas Ohlson'],
    question: 'Which one of these Swedish companies was founded in 1943?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Mystic Mansion',
    difficulty: 'medium',
    incorrect_answers: ['Trusty Tahr', 'Utopic Unicorn', 'Wily Werewolf'],
    question:
      'Which one of these is not an official development name for a Ubuntu release?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Mac OS',
    difficulty: 'medium',
    incorrect_answers: ['Windows', 'Linux', 'OS/2'],
    question: 'Which operating system was released first?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Java',
    difficulty: 'easy',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
    question:
      'Which programming language shares its name with an island in Indonesia?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'We Love to See You Smile',
    difficulty: 'medium',
    incorrect_answers: [
      'Why Pay More!?',
      'Have It Your Way',
      'Making People Happy Through Food'
    ],
    question: `Which slogan did the fast food company, McDonald's, use before their " I'm Lovin' It" slogan?`,
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'Radia Perlman',
    difficulty: 'hard',
    incorrect_answers: ['Paul Vixie', 'Vint Cerf', 'Michael Roberts'],
    question: 'Who invented the "Spanning Tree Protocol"?',
    type: 'multiple'
  },
  {
    category: 'General Knowledge',
    correct_answer: 'Benjamin Franklin',
    difficulty: 'easy',
    incorrect_answers: [
      'George Washington',
      'Abraham Lincoln',
      'Thomas Jefferson'
    ],
    question: 'Who is depicted on the US hundred dollar bill?',
    type: 'multiple'
  },
  {
    category: 'Science: Computers',
    correct_answer: 'NovodeX',
    difficulty: 'hard',
    incorrect_answers: ['Ageia', 'Nvidia', 'AMD'],
    question:
      'Who is the original author of the realtime physics engine called PhysX?',
    type: 'multiple'
  }
]

module.exports = quizzes
