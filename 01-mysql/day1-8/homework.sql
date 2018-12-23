SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE banji(
  bid INT,
  bname VARCHAR(7),
  stuCount INT
);
INSERT INTO banji VALUE(10, 'WEB1706', 3);
INSERT INTO banji VALUE(20, 'WEB1707', 2);
INSERT INTO banji VALUE(30, 'WEB1708', 2);
CREATE TABLE student(
  sid INT,
  sname VARCHAR(6),
  score DECIMAL(4,1),
  schoolData DATE,
  bjId VARCHAR(7)
);
INSERT INTO student VALUE
(1, '啊啊', 88, '2017-7-1', 'WEB1706'),
(2, '试试', 89, '2017-7-2', 'WEB1706'),
(3, '单单', 90, '2017-7-3', 'WEB1706'),
(4, '纷纷', 91, '2017-7-4', 'WEB1707'),
(5, '刚刚', 92, '2017-7-5', 'WEB1707'),
(6, '嘿嘿', 93, '2017-7-6', 'WEB1708'),
(7, '拜拜', 94, '2017-7-7', 'WEB1708');

DELETE FROM student WHERE sid=7;
UPDATE banji SET stuCount=1 WHERE bid=30;

UPDATE banji SET stuCount=2 WHERE bid=10;
UPDATE banji SET stuCount=3 WHERE bid=20;
UPDATE student SET bjID='WEB1707' WHERE sid=3;
