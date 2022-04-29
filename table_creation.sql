DROP TABLE IF EXISTS heroku_2ee3dca429e41e2.color_code;

CREATE TABLE IF NOT EXISTS heroku_2ee3dca429e41e2.color_code (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	color_name VARCHAR(20) NOT NULL,
	color_value VARCHAR(10) NOT NULL
);

INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('White', '#fff');
INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('Pink', '#f6c2d9');
INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('Yellow', '#fff69b');
INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('Green', '#bcdfc9');
INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('Blue', '#a1c8e9');
INSERT INTO heroku_2ee3dca429e41e2.color_code (color_name, color_value) VALUES ('Purple', '#e4dae2');

SELECT * FROM heroku_2ee3dca429e41e2.color_code;


DROP TABLE IF EXISTS heroku_2ee3dca429e41e2.note;

CREATE TABLE IF NOT EXISTS heroku_2ee3dca429e41e2.note (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(50) NULL,
	content VARCHAR(200) NOT NULL,
	color VARCHAR(10) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	created_by VARCHAR(20) NOT NULL
);

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 1', 'Content 1', '#fff', '2022-04-29 12:00:00', 'Admin');

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 2', 'Content 2', '#f6c2d9', '2022-04-29 12:00:00', 'Admin');

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 3', 'Content 3', '#fff69b', '2022-04-29 12:00:00', 'Admin');

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 4', 'Content 4', '#bcdfc9', '2022-04-29 12:00:00', 'Admin');

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 5', 'Content 5', '#a1c8e9', '2022-04-29 12:00:00', 'Admin');

INSERT INTO heroku_2ee3dca429e41e2.note (title, content, color, created_on, created_by) 
VALUES ('Tip 6', 'Content 6', '#e4dae2', '2022-04-29 12:00:00', 'Admin');

SELECT * FROM heroku_2ee3dca429e41e2.note;