var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var usersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String ,
  password: String
});

var blogsSchema = mongoose.Schema({
  title: String,
  author: String ,
  imageUrl : String ,
  body: String ,
  views : Number
})

var User = mongoose.model('User', usersSchema);
var Blog = mongoose.model('Blog', blogsSchema);

var selectAll = function(callback) {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var selectAll = function(callback) {
  Blog.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;