SET NAMES UTF8;
DROP DATABASE IF EXISTS mydata;
CREATE DATABASE mydata CHARSET=UTF8;
USE mydata;
CREATE TABLE user(
  uid INT,
  uname VARCHAR(9),
  upwd VARCHAR(12),
  email VARCHAR(64),
  phone CHAR(11),
  avatar VARCHAR(128),
  userName VARCHAR(6),
  sex CHAR(6 ),
  isOnline BOOL,
  registerTime DATETIME
);
INSERT INTO user VALUE
(1,'丁丁','123456','123@tedu.com','12345678910','i.jpg','丁大伟','male',1,'2017-5-9'),
(2,'弱弱','123456','123@tedu.com','12345678910','i.jpg','丁大伟','male',1,'2017-5-9'),
(3,'YY','123456','123@tedu.com','12345678910','i.jpg','丁大伟','male',1,'2017-5-9'),
(4,'开开','123456','123@tedu.com','12345678910','i.jpg','丁大伟','male',1,'2017-5-9');