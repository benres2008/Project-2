CREATE DATABASE black_market_db;
USE black_market_db;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
	delieverable BOOLEAN DEFAULT true,
    price integer(20) not null,
    currency varchar(5) not null,
    quantity varchar(20) not null,
    payment_method varchar(30) not null,
	PRIMARY KEY (id)
);