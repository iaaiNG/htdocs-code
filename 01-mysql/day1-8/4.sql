SET NAMES UTF8;
DROP DATABASE IF EXISTS mydata;
CREATE DATABASE mydata CHARSET=UTF8;
USE mydata
CREATE TABLE laptop(
  lid TINYINT,
  title VARCHAR(20),
  price DECIMAL(6,1),
  spec VARCHAR(20),
  shelfTime DATE,
  isOnsale BOOL,
  stockCount SMALLINT
);
INSERT INTO laptop VALUE
(1,'联想',5999,'L1','2017-5-6',true,333),
(2,'神舟',2666,'L2','2016-5-6',false,3),
(3,'苹果',9999.9,'L3','2014-5-6',false,411),
(4,'雪梨',1200,'L4','2015-5-6',true,20);