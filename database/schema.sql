drop database if exists products;
CREATE DATABASE products;

\c products

CREATE TABLE products(
  id  serial,
  name varchar(40) not null,
  slogan varchar(125) null,
  description varchar(1000) null,
  category varchar(40) not null,
  default_price int not null,
  PRIMARY KEY ( id )
);

CREATE TABLE features(
  id serial,
  product_id int not null,
  feature VARCHAR(30) null,
  value VARCHAR(60) null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE styles(
  id serial,
  product_id int not null,
  name varchar(60) null,
  sale_price text null,
  original_price text null,
  default_style boolean default false,
  PRIMARY KEY ( id ),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE skus(
  id serial,
  style_id int not null,
  size VARCHAR(15) null,
  quantity int null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (style_id) REFERENCES styles(id)
);
CREATE TABLE photos(
  id serial,
  style_id int not null,
  url text null,
  thumbnail_url text null,
  PRIMARY KEY ( id ),
  FOREIGN KEY (style_id) REFERENCES styles(id)
);

-- copy products from '/seed/product.csv' delimiter ',' csv header;
-- copy features from '/seed/features.csv' delimiter ',' csv header;
-- copy styles from '/seed/styles.csv' delimiter ',' csv header;
-- copy skus from '/seed/skus.csv' delimiter ',' csv header;
-- copy photos from '/seed/photos.csv' delimiter ',' csv header;


copy products from '/Users/michael/Desktop/HR School Stuff/SDC/CSV data/product.csv' delimiter ',' csv header;
copy features from '/Users/michael/Desktop/HR School Stuff/SDC/CSV data/features.csv' delimiter ',' csv header;
copy styles from '/Users/michael/Desktop/HR School Stuff/SDC/CSV data/styles.csv' delimiter ',' csv header;
copy skus from '/Users/michael/Desktop/HR School Stuff/SDC/CSV data/skus.csv' delimiter ',' csv header;
copy photos from '/Users/michael/Desktop/HR School Stuff/SDC/CSV data/photos.csv' delimiter ',' csv header;

-- creates index on foreign keys
create index feature_idx on features(product_id);
create index style_idx on styles(product_id);
create index skus_idx on skus(style_id);
create index photo_idx on photos(style_id);
