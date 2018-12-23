SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE student(
  id INT,
  name VARCHAR(6),
  gender VARCHAR(2),
  score DECIMAL(4,1),
  birthday DATE
);
SHOW TABLES;
INSERT INTO student VALUES(101, "Tom", "男", 99.5, "1994-10-1");
INSERT INTO student VALUES(102, "Mary", "男", 80, "1994-10-2");
INSERT INTO student VALUES(103, "Sum", "男", 59.5, "1994-10-3");

SELECT * FROM student;