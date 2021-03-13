const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js')
//TODO : some imports for your database
const controller = require('../database/controlers/index.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/journals', (req, res) => {

  const data = [
    req.body.firstName,
    req.body.lastName,
    req.body.Email_Adress,
    req.body.password
  ]
  controller.findUserAndUpdate(data)
    .then((result) => {

      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send('error')
    })
});
app.get('/journals', (req, res) => {
  controller.fetchUser()
    .then((resultat) => {
      res.status(200).send(resultat)
    })
    .catch(err => {
      res.status(500).send('error')
    })

})

// app.post('/blog', (req, res) => {
//   const params = [
//     req.body.title,
//     req.body.author,
//     req.body.imageUrl,
//     req.body.body,
//     req.body.views
//   ]
//   console.log('**********************', params)


// })
app.get('/blog', (req, res) => {
  db.selectAll((err, results) => {
    err ? res.status(500).json(err) : res.status(200).json(results)
  })
})

app.patch('/blog/:blogId', function (req, res) {
  db.updateviews([req.body.views, req.params.blogId], (err, results) => {
    err ? console.log(err) : res.status(201).send(results, 'updated')
  })
})

app.post('/blog', function (req, res) {
  db.postBlog([req.body.title, req.body.author, req.body.imageUrl, req.body.body, req.body.views], function (err, results) {
    if (err) {
      console.log(err)
    }
    res.json('welcome ')
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

