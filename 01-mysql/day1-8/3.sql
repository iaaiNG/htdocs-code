SET NAMES UTF8;
DROP DATABASE IF EXISTS mydata;
CREATE DATABASE mydata CHARSET=UTF8;
USE mydata;
CREATE TABLE laptop(
  id INT,
  title VARCHAR(10),
  price DECIMAL(6,1),
  num INT,
  putaway_date DATE
);
INSERT INTO laptop VALUE(1, "联想", 4999, 5, "2017-5-1");
INSERT INTO laptop VALUE(2, "神舟", 2500.5, 10, "2017-6-1");
INSERT INTO laptop VALUE(3, "苹果", 11999, 15, "2017-7-1");
SELECT * FROM laptop;