const db  = require('./index.js');
const Blog = require('./index.js');

const posts = [
  {
    title: 'Marvel Universe’s New Superhero: The Multi-Hyphenate',
    author: 'Staci Jacobs',
    imageUrl: '',
    createdAt: '2017-11-14T05:57:26.037Z',
    body: `Hello, introduce yourself… Hi, I’m Charlotte Purser. Bar Professional and multi-faceted self-producing artist.
     Filmmaker, writer, actor photographer… and I have a podcast. All The Things! 
     Yup What are you drinking right now? A beer *gasps with joy as Charlotte holds up a Corona Beer*
      Way to support! *Laughs* Other than enjoying a Corona during Corona,…
`,
    views: 316
  },
  {
    title: 'Can Tall Lamps Help you in an Apocalypse?',
    author: 'Staci Jacobs',
    imageUrl: '',
    createdAt: '2017-11-13T03:30:26.037Z',
    body:`Hello, please introduce yourself. Hi, I’m Leighton Samuels, bar professional, 
    actor and fight director. Fight Director..tell me more. I choreograph violence for the stage. 
     That’s exciting. Do you think stage combat has prepared you for the quickly approaching Apocalypse? 
    Sure, I have swords. And for those of us that don’t have swords… Baseball bat, Bottle…
`,
    views: 256
  },
  {
    title: 'Crushing It at Home – The New Cocktail Trend?',
    author: 'Staci Jacobs',
    imageUrl: '',
    createdAt: '2017-11-11T01:24:26.037Z',
    body: `Happy Thursday (it is Thursday right?) Introduce yourself, please. 
    Hi I’m Brandon Tyler Harris, Bar Manager at Town Stages. Actor and Voice Over Artist. 
    A man of many useful trades. Being a bar veteran, 
    I assume you have a well-stocked bar and proper set up at all times, especially now. 
    The local liquor store shut…
`,
    views: 763
  },
  {
    title: 'An Interview with MinuteZero – Talking Company, PJs and Quarantine Games',
    author: 'Marina Montesanti',
    imageUrl: '',
    createdAt: '2017-11-08T05:05:26.037Z',
    body: `Welcome 2020 Sokoloff Arts Fellowship Company, MinuteZero! 
     Thanks for taking time out of your binge streaming to chat! Please introduce yourself. 
     Hello! We are MinuteZero. A theater production company that specializes in immersive, personalized, and site specific live art.  Does talking at four walls in PJs count? Sure! Thanks, I feel productive. 
    Under normal circumstances,…
`,
    views: 643
  },
  {
    title: 'What Do All Theater Companies With The Best COVID-19 Responses Have In Common?',
    author: ' Marina Montesanti',
    imageUrl: '',
    createdAt: '2017-11-10T05:05:26.037Z',
    body: `Welcome 2020 Fellows Julia and Kate, please introduce yourselves! Hi, I’m Kate. 
    Hi, I’m Julia. We are the founders of Theatre to the people! 
    Tell me about Theater to the People and what do you love about the specific project 
    you are bringing to Town Stages. Julia: 
    What I (we) love about TTTP is how…
`,
    views: 479
  }
];

const insertSampleBlogs = function() {
  Blog.create(posts)
    .then(() => db.disconnect());
};

insertSampleBlogs();