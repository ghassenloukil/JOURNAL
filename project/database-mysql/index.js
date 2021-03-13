var mysql = require('mysql');
const mysqlConfig = require('./config.js')
const connection = mysql.createConnection(mysqlConfig);
connection.connect (err => {
    if (err) {
        console.log (err);
    }
    else {
        console.log ('Connected to mysql')
    }
})


var selectAll = function(callback) {
  connection.query('SELECT * FROM blogs', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const updateviews=function(views,id,callback){
    connection.query(`UPDATE SET views=${views} WHERE id=${id}`,[views,id],(error,results)=>{
        if(error)callback(error)
        callback(results)
    })
}

const postBlog = function (params ,cb){
    var queryStr = `INSERT INTO blogs (title,author,imageUrl,body,views) VALUES (?,?,?,?,?);`
    connection.query (queryStr ,params, function (err,results){
        if (err){
            console.log(err)
        }
        return cb (err,results)
    })
}


module.exports.selectAll = selectAll;
module.exports.updateviews = updateviews;
module.exports.postBlog = postBlog;