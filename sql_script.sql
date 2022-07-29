DROP DATABASE recollection;

CREATE DATABASE recollection;

SELECT * FROM recollection.user;
SELECT * FROM recollection.role;
SELECT * FROM recollection.warranty_category;
SELECT * FROM recollection.warranty;

DROP TABLE IF EXISTS recollection.user_roles;
DROP TABLE IF EXISTS recollection.user;
DROP TABLE IF EXISTS recollection.role;
DROP TABLE IF EXISTS recollection.hibernate_sequence;

SELECT * FROM recollection.hibernate_sequence;

INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (1, 'Mobiles and Tablets', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (2, 'Home Appliances', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (3, 'Computers and Laptops', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (4, 'Audio, Video, Gaming and Wearables', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (5, 'Cameras', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (6, 'Watches', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (7, 'Travel and Luggage', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (8, 'Sports and Outdoors equipment', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (9, 'Home and Living', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (10, 'Health and Beauty', 'Admin', current_timestamp(), 'Admin', current_timestamp());
INSERT INTO recollection.warranty_category (id, name, created_by, created_on, updated_by, updated_on) 
VALUES (11, 'Others', 'Admin', current_timestamp(), 'Admin', current_timestamp());