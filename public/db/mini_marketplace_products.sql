-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mini_marketplace
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_archived` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_products_1_idx` (`seller_id`),
  CONSTRAINT `fk_products_1` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'laptop','HP laptop',32000,1,1,'2018-11-14 08:47:56','2018-11-14 08:47:56',1),(3,'ayush','aIQDAW',6563,7,1,'2018-11-14 10:02:10','2018-11-14 10:02:10',1),(4,'mi phone','mi phone with charger',10000,1,7,'2018-11-14 10:09:50','2018-11-14 10:09:50',1),(5,'mi phone','mi phone with charger',10000,1,7,'2018-11-14 10:17:42','2018-11-14 10:17:42',0),(6,'mi','mi phone with charger',10000,1,7,'2018-11-14 10:18:09','2018-11-14 10:18:09',0),(7,'chai','chai pi lo',500,35,7,'2018-11-14 10:18:53','2018-11-14 10:18:53',0),(8,'mi phone','mi phone with charger',10000,0,7,'2018-11-14 10:19:30','2018-11-14 10:19:30',0),(9,'mi phone','mi phone with charger',10000,0,7,'2018-11-14 10:19:52','2018-11-14 10:19:52',0),(10,'mi phone','mi phone with charger',10000,0,7,'2018-11-14 10:20:01','2018-11-14 10:20:01',0),(11,'mi phone','mi phone with charger',10000,1,7,'2018-11-14 10:20:50','2018-11-14 10:20:50',0),(12,'mi phone','mi phone with charger',1,1,7,'2018-11-14 10:21:29','2018-11-14 10:21:29',0),(13,'mi phone','mi phone with charger',10000,1,7,'2018-11-14 10:21:37','2018-11-14 10:21:37',0),(14,'mi phone','mi phone with charger',10000,34,7,'2018-11-14 10:22:01','2018-11-14 10:22:01',0),(15,'mi phone','mi phone with charger',10000,34,7,'2018-11-14 10:24:53','2018-11-14 10:24:53',0),(16,'mi phone','mi phone with charger',10000,34,7,'2018-11-14 10:45:27','2018-11-14 10:45:27',0),(17,'mi phone','mi phone with charger',10000,34,7,'2018-11-14 11:21:17','2018-11-14 11:21:17',0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-15 12:41:56
