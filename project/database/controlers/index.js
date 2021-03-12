const {User,Blog} = require('../models/config.js');

const findUserAndUpdate = (data) => {
    User1 = new User({ firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password });
    return new Promise((resolve, reject) => {
        User.findOne({ email: data.email }, (err, res) => {
            if (err) return reject(err);
            if (res) {
                res.update({ firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password }, () => {
                    if (err) return reject(err);
                    resolve({ type : 'updated' ,firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password });
                });


            }
            else {
                User1.save(function (err) {
                    if (err) return reject(err);
                    resolve({ type : 'inserted' ,firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password })

                })
            }
        })
    })

};
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        })
    })
}
const findBlogAndUpdate = (data) => {
    Blog1 = new Blog({ title: data.title, author: data.author, imageUrl: data.imageUrl, body: data.body,views:data.views});
    return new Promise((resolve, reject) => {
        Blog.findOne({ title: data.title }, (err, res) => {
            if (err) return reject(err);
            if (res) {
                res.update({ title: data.title, author: data.author,imageUrl: data.imageUrl, body: data.body,views: data.views}, () => {
                    if (err) return reject(err);
                    resolve({ type : 'updated' ,title: data.title, author: data.author, imageUrl: data.imageUrl, body: data.body, views: data.views});
                });


            }
            else {
                Blog1.save(function (err) {
                    if (err) return reject(err);
                    resolve({ type : 'inserted' ,title: data.title, author: data.author, imageUrl: data.imageUrl,body: data.body,views: data.views})

                })
            }
        })
    })

};
const fetchBlog = () => {
    return new Promise((resolve, reject) => {
        Blog.find({}, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        })
    })
}

module.exports.findUserAndUpdate = findUserAndUpdate;
module.exports.fetchUser = fetchUser;
module.exports.findBlogAndUpdate= findBlogAndUpdate;
module.exports.fetchBlog= fetchBlog;
