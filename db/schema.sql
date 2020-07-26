-- DONE! 

CREATE DATABASE burgers_db; 
USE burgers_db; 

CREATE TABLE burgers(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	name TEXT NOT NULL,
	devoured BOOLEAN DEFAULT false
); 

