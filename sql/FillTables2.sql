INSERT INTO orders.Item (CODE,NAME,PRICE,CATEGORY) VALUES ('99-1234-GY29','Table tennis blade',13.5,'Sport');
INSERT INTO orders.Customer (NAME,CODE,ADDRESS,DISCOUNT) VALUES ('Customer1','9999-1965','142800, Mos. obl, Stupino, Pushkina 19, 110',0.5);
INSERT INTO orders.Orders (CUSTOMER_ID,ORDER_DATE,SHIPMENT_DATE,ORDER_NUMBER,STATUS) VALUES (1,'2017-01-15','2017-01-16' ,1025,'Processing');
INSERT INTO orders.OrderElem (ORDER_ID,ITEM_ID,ITEMS_COUNT,ITEM_PRICE) VALUES (3,1,5,7.3);

