const mysql  = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig)
const posts = [
  {
    title: 'for you, from me. no justice. no peace.',
    author: ' Robin Sokoloff',
    imageUrl: 'https://www.pittwire.pitt.edu/sites/default/files/Getty-1254977263_InsideDisplay.jpg',
    createdAt: '2017-11-14T05:57:26.037Z',
    body: `“Not talking about racism in America, is racism.”  
    The person who was first brave enough to look me in the eyes and say these words, 
    no matter what it could cost him, shall not be named. This moment is not his labor, It’s mine.
     It’s yours. 
     This moment is the moment for white people, and…
`,
    views: 310
  },
  {
    title: 'Can Tall Lamps Help you in an Apocalypse?',
    author: 'Staci Jacobs',
    imageUrl: 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/84176928_2851463734920030_8614584603312652288_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8lXDzfiNKDAAX9xqldm&_nc_ht=scontent.ftun4-1.fna&oh=4477b62925b26f66e139fa0d8fc4f248&oe=60712D12',
    createdAt: '2017-11-13T03:30:26.037Z',
    body:`Hello, please introduce yourself. Hi, I’m basla hassine, 
    bar professional, actor and fight director. Fight Director..tell me more. 
    I choreograph violence for the stage.  That’s exciting. 
    Do you think stage combat has prepared you for the quickly approaching Apocalypse? 
    Sure, I have swords. 
    And for those of us that don’t have swords… Baseball bat, Bottle…
`,
    views: 423
  },
  {
    title: 'Crushing It at Home – The New Cocktail Trend?',
    author: 'Staci Jacobs',
    imageUrl: 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/123140214_2052183334912258_6869813513045506630_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=j8u_opEigLIAX_fxuSa&_nc_ht=scontent.ftun4-1.fna&oh=ab97776480f75d5ec5699311afd81f0f&oe=60711AC4',
    createdAt: '2017-11-11T01:24:26.037Z',
    body: `Happy Saturday (it is Saturday right?) Introduce yourself, please. 
    Hi I’m gaston, Bar Manager at Town Stages. Actor and Voice Over Artist. 
    A man of many useful trades. Being a bar veteran, 
    I assume you have a well-stocked bar and proper set up at all times, especially now.
     The local liquor store shut…
`,
    views: 675
  },
  {
    title: 'An Interview with MinuteZero – Talking Company, PJs and Quarantine Games',
    author: 'Marina Montesanti',
    imageUrl: 'https://media2.fdncms.com/chronogram/imager/u/original/10230800/board-games.jpg',
    createdAt: '2017-11-08T05:05:26.037Z',
    body: `Welcome 2020 Sokoloff Arts Fellowship Company, MinuteZero!  
    Thanks for taking time out of your binge streaming to chat! Please introduce yourself. 
    Hello! We are MinuteZero. A theater production company that specializes in immersive, 
    personalized, and site specific live art.  Does talking 
    at four walls in PJs count? Sure! Thanks, I feel productive. Under normal circumstances,…
`,
    views: 479
  },
  {
    title: 'CEO to Karen from Events “Splurge on This Year’s Holiday Party,” Hands Her Nineteen Wet Dollars',
    author: 'Connor Sampson',
    imageUrl: 'https://townstages.com/wp-content/uploads/2020/05/CV8A0620-scaled.jpg',
    createdAt: '2017-11-10T05:05:26.037Z',
    body: `Tech N’ Tech, a New York City-based tech start-up 
    that absolutely does tech-related tech venture capital tech 
    just raised a $32.5 million seed round this past Monday. To celebrate,
     their CEO, John Whitman, handed Karen from events nineteen wet dollar bills and told her to really 
    “splurge on this year’s holiday party.”
`,
    views: 1243
  },
  {
    title: 'Neverland is in – Tribeca?',
    author: 'Marina Montesanti',
    imageUrl: 'https://townstages.com/wp-content/uploads/2020/05/CV8A0620-scaled.jpg',
    createdAt: '2017-11-10T05:05:26.037Z',
    body: `Once every four years, February gets an extra day,
     so it seems only right that Leap Day babies get an exceptional party. 
     Keren Precel and her extraordinary team from Simply Perfect transformed Town Stages
      into Neverland and made this Peter Pan themed party soar!  
    Keren described to us the experience she created: Multiple rooms allowed…
`,
    views: 156
  }
];


const insert = (data) => {
    return new Promise((resolve, reject) => {
        for (const blog of data) {
            let syntax = ` insert into blogs( title, author, imageUrl, body, views) values (? ,? ,? ,? ,? )`
            connection.query(syntax, [blog.title, blog.author, blog.imageUrl, blog.body, blog.views], (err, res) => {
                if (err) return reject(err)
                return resolve(res)
            })
        }
    })
}
insert(posts)
    .then(_ => {
        connection.end()
    })
    .catch(err=>{
        throw err
    })

