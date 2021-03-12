DROP DATABASE IF EXISTS journal;

CREATE DATABASE journal;

USE journal;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  email varchar(50)NOT NULL,
  password varchar(50) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS blogs (
id int NOT NULL AUTO_INCREMENT ,
 title varchar(50) NOT NULL,
 author varchar(50) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  body TEXT NOT NULL,
  views int NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
