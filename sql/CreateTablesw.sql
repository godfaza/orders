use orders;
CREATE TABLE IF NOT EXISTS orders.Item(
ID INT NOT NULL AUTO_INCREMENT,
CODE VARCHAR(12) NOT NULL,
NAME VARCHAR(300) NOT NULL,
PRICE DECIMAL(10,2),
CATEGORY VARCHAR(30) NOT NULL,
PRIMARY KEY (ID))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS orders.Customer(
ID INT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(100) NOT NULL,
CODE VARCHAR(9) NOT NULL,
ADDRESS VARCHAR(300) NOT NULL,
DISCOUNT DECIMAL(10,2),
PRIMARY KEY (ID))
ENGINE = InnoDB; 

CREATE TABLE IF NOT EXISTS orders.Orders(
ID INT NOT NULL AUTO_INCREMENT,
CUSTOMER_ID INT NOT NULL,
ORDER_DATE DATE NOT NULL,
SHIPMENT_DATE DATE,
ORDER_NUMBER DECIMAL,
STATUS	VARCHAR(100) NOT NULL,
PRIMARY KEY (ID),
FOREIGN KEY (CUSTOMER_ID) REFERENCES Customer(ID))
ENGINE = InnoDB; 

CREATE TABLE IF NOT EXISTS orders.OrderElem(
ID INT NOT NULL AUTO_INCREMENT,
ORDER_ID INT NOT NULL,
ITEM_ID INT NOT NULL,
ITEMS_COUNT INT NOT NULL,
ITEM_PRICE DECIMAL(10,2),
PRIMARY KEY (ID),
FOREIGN KEY (ORDER_ID) REFERENCES Orders(ID),
FOREIGN KEY (ITEM_ID) REFERENCES Item(ID))
ENGINE = InnoDB; 

CREATE TABLE IF NOT EXISTS orders.Groups (
ID INT NOT NULL AUTO_INCREMENT ,
NAME VARCHAR(45) NOT NULL ,
PRIMARY KEY (ID))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS orders.User (
ID INT NOT NULL AUTO_INCREMENT ,
FULLNAME VARCHAR(100) NOT NULL ,
USERNAME VARCHAR(20) NOT NULL ,
PASSWORD VARCHAR(100) NOT NULL ,
EMAIL VARCHAR(100) NOT NULL ,
GROUP_ID INT NOT NULL ,
CUSTOMER_ID INT NOT NULL,
PRIMARY KEY (ID),
FOREIGN KEY (GROUP_ID) REFERENCES Groups(ID),
FOREIGN KEY (CUSTOMER_ID) REFERENCES Customer(ID))
ENGINE = InnoDB; 

