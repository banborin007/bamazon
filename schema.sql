DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT (10) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    primary key (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 500, 20),
("Hat", "Apparel", 20, 20),
("Screw Driver", "Tools", 5, 100),
("Notebook", "School Supplies", 1, 1000),
("Pan", "Kitchenware", 50, 200),
("Desk", "Office Supply", 100, 20),
("Body Wash", "Bath", 8, 100),
("Banana", "Produce", 1, 100),
("Shovel", "Outdoor Equipment", 20, 15),
("2 x 4 Plank", "Carpentry", 10, 30);