### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);




-- CREATE DATABASE burgers_db; 
-- USE burders_db; 

-- CREATE TABLE burgers(
-- 	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
-- 	name TEXT NOT NULL,
-- 	devoured BOOLEAN, DEFAULT false,
-- ); 