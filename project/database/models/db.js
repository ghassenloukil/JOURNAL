var mysql = require('mysql');
const mysqlConfig = require('../controlers/config2.js')
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

postBlog = function (title ,author,imageUrl,body,views,cb){
    var queryStr = `INSERT INTO blogs (title,author,imageUrl,body,views) VALUES (?,?,?,?,?)`
    connection.query (queryStr ,[title,author,imageUrl,body,views], function (err,results){
        if (err){
            cb (err,null)
        }
        cb (results,null)
    })
}


module.exports.selectAll = selectAll;
module.exports.updateviews = updateviews;
module.exports.postBlog = postBlog;