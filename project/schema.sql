DROP DATABASE IF EXISTS journal;

CREATE DATABASE journal;

USE journal;

CREATE TABLE IF NOT EXISTS blogs(
id int NOT NULL AUTO_INCREMENT,
 title varchar(50) NOT NULL,
 author varchar(50) NOT NULL,
  imageUrl text NOT NULL,
  body TEXT NOT NULL,
  views int NOT NULL,
  PRIMARY KEY (id)
);


