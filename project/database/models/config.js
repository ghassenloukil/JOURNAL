const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    imageUrl: String,
    body: String,
    views: {type: Number, default: 0}
  }, 
    {
      timestamps: true
    }
  );
const User= mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);

module.exports = {User,Blog};