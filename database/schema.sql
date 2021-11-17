CREATE DATABASE IF NOT EXISTS products;

USE products;

CREATE TABLE products(
  id int not null auto_increment,
  name varchar(40) not null,
  slogan varchar(125) null,
  description varchar(200) null,
  category varchar(40) not null,
  default_price int not null
  PRIMARY KEY ( id )
);

CREATE TABLE features(
  id INT NOT NULL AUTO_INCREMENT,
  product_id int not null,
  feature VARCHAR(30) null,
  value VARCHAR(60) null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE styles(
  id INT NOT NULL AUTO_INCREMENT,
  product_id int not null,
  name varchar(60) null
  sale_price int null,
  original_price int null,
  default_style int null
  PRIMARY KEY ( id ),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE skus(
  id INT NOT NULL AUTO_INCREMENT,
  style_id int not null,
  size VARCHAR(5) null,
  quantity int null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (style_id) REFERENCES styles(id)
);
CREATE TABLE photos(
  id INT NOT NULL AUTO_INCREMENT,
  style_id int not null,
  url VARCHAR(500) null,
  thumbnail_url VARCHAR(500) null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (style_id) REFERENCES styles(id)
);