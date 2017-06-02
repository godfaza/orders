-- MySQL dump 10.13  Distrib 5.1.73, for redhat-linux-gnu (x86_64)
--
-- Host: localhost    Database: orders
-- ------------------------------------------------------
-- Server version	5.1.73

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Customer`
--

use orders;
DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customer` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `CODE` varchar(9) NOT NULL,
  `ADDRESS` varchar(300) NOT NULL,
  `DISCOUNT` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'xCustomer1','xyz1','142800, Mos. obl, Stupino, Pushkina 19, 110','0.50'),(2,'XYZCustomer_added','1129-6635','142800, Mikshnevo vl 41','0.15');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Groups`
--

DROP TABLE IF EXISTS `Groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Groups`
--

LOCK TABLES `Groups` WRITE;
/*!40000 ALTER TABLE `Groups` DISABLE KEYS */;
INSERT INTO `Groups` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `Groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Item`
--

DROP TABLE IF EXISTS `Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Item` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CODE` varchar(12) NOT NULL,
  `NAME` varchar(300) NOT NULL,
  `PRICE` decimal(10,2) DEFAULT NULL,
  `CATEGORY` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Item`
--

LOCK TABLES `Item` WRITE;
/*!40000 ALTER TABLE `Item` DISABLE KEYS */;
INSERT INTO `Item` VALUES (17,'00-1234-XX00','ItemXYZ','1.00','unknown'),(18,'00-1234-XX00','ItemXYZ','1.00','unknown'),(19,'00-1234-XX00','ItemXYZ','1.00','unknown'),(20,'00-1234-XX00','ItemXYZ','1.00','unknown');
/*!40000 ALTER TABLE `Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderElem`
--

DROP TABLE IF EXISTS `OrderElem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `OrderElem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ORDER_ID` int(11) NOT NULL,
  `ITEM_ID` int(11) NOT NULL,
  `ITEMS_COUNT` int(11) NOT NULL,
  `ITEM_PRICE` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ORDER_ID` (`ORDER_ID`),
  KEY `ITEM_ID` (`ITEM_ID`),
  CONSTRAINT `OrderElem_ibfk_1` FOREIGN KEY (`ORDER_ID`) REFERENCES `Orders` (`ID`) ON DELETE CASCADE, 
  CONSTRAINT `OrderElem_ibfk_2` FOREIGN KEY (`ITEM_ID`) REFERENCES `Item` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderElem`
--

LOCK TABLES `OrderElem` WRITE;
/*!40000 ALTER TABLE `OrderElem` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderElem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CUSTOMER_ID` int(11) NOT NULL,
  `ORDER_DATE` date NOT NULL,
  `SHIPMENT_DATE` date DEFAULT NULL,
  `ORDER_NUMBER` decimal(10,0) DEFAULT NULL,
  `STATUS` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `CUSTOMER_ID` (`CUSTOMER_ID`),
  CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `Customer` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (1,1,'2017-01-15','2017-01-16','1025','Processing');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FULLNAME` varchar(100) NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `GROUP_ID` int(11) NOT NULL,
  `CUSTOMER_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `GROUP_ID` (`GROUP_ID`),
  KEY `CUSTOMER_ID` (`CUSTOMER_ID`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`GROUP_ID`) REFERENCES `Groups` (`ID`),
  CONSTRAINT `User_ibfk_2` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `Customer` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Adminstrator','admin','1234','godfaza@gmail.com',1,1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-10 15:41:00
