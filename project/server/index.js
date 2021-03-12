const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/models/index.js')
//TODO : some imports for your database
const controller = require('../database/controlers/index.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/journals', (req, res) => {
 
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.Email_Adress,
    password: req.body.password
  }
  controller.findUserAndUpdate(data)
    .then((result) => {
      
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send('error')
    })
});
app.get('/journals',(req,res) => {
  controller.fetchUser()
  .then((resultat) =>{
    res.status(200).send(resultat)
  })
  .catch(err => {
    res.status(500).send('error')
  })

})

app.post('/journals', (req, res) => {
const data = {
  title: req.body.title,
  author: req.body.author,
  imageUrl: req.body.imageUrl,
  body: req.body.body,
  views : req.body.views
}
controller.findBlogAndUpdate(posts)
  .then((result) => {
    
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send('error')
  })
})
app.get('/journals',(req,res) => {
controller.fetchBlog()
.then((resultat) =>{
  res.status(200).send(resultat)
})
.catch(err => {
  res.status(500).send('error')
})

})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

