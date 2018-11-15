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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(32) NOT NULL,
  `mobile` decimal(10,0) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `address_line1` varchar(100) NOT NULL,
  `address_line2` varchar(100) DEFAULT NULL,
  `city` varchar(32) NOT NULL,
  `state` varchar(32) NOT NULL,
  `pincode` int(6) DEFAULT NULL,
  `is_archived` int(1) DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_users_1_idx` (`role_id`),
  CONSTRAINT `fk_users_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ayush','ayushranka23@gmail.com','password123',7879546765,1,'bagwat nagar','','mandsaur','MP',458001,0,'2018-11-13 05:22:43','2018-11-13 05:22:43'),(5,'ayush','ayush@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 05:38:51','2018-11-13 05:38:51'),(7,'ay','ayush34@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 05:39:59','2018-11-13 05:39:59'),(9,'ayu','ayush3@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 05:40:29','2018-11-13 05:40:29'),(10,'ayus','ayushjk@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 05:40:37','2018-11-13 05:40:37'),(11,'ayush','ayushjk1@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 05:40:45','2018-11-13 05:40:45'),(13,'ayush','ayushjk178@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:12:42','2018-11-13 11:12:42'),(15,'ayush','ayushjk0j178@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:16:05','2018-11-13 11:16:05'),(16,'ayush','ayushjk0j10o8@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:17:06','2018-11-13 11:17:06'),(17,'ayush','ayushjk0j10lko8@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:17:57','2018-11-13 11:17:57'),(18,'ayush','ayushjk0j10nlko8@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:19:00','2018-11-13 11:19:00'),(19,'ayush','ayushranka34@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:20:48','2018-11-13 11:20:48'),(20,'ayush','ayushranka347@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:22:36','2018-11-13 11:22:36'),(21,'ayush','ayushranka346@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:24:50','2018-11-13 11:24:50'),(23,'ayush','ayushranka3l6@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:28:21','2018-11-13 11:28:21'),(25,'ayush','ayushranka3ll6@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 11:28:33','2018-11-13 11:28:33'),(27,'ayush','ayushranka3lll6@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:02:20','2018-11-13 12:02:20'),(29,'ayush','ayushrankall6@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:04:29','2018-11-13 12:04:29'),(31,'ayush','ayushrankaall6@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:09:17','2018-11-13 12:09:17'),(32,'ayush','ayushranka12@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:11:54','2018-11-13 12:11:54'),(34,'ayush','ayushranka13@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:18:21','2018-11-13 12:18:21'),(36,'ayush','ayushranka14@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:18:52','2018-11-13 12:18:52'),(38,'ayush','ayushranka15@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:19:56','2018-11-13 12:19:56'),(39,'ayush','ayushranka16@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:21:05','2018-11-13 12:21:05'),(40,'ayush','ayushranka17@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:23:33','2018-11-13 12:23:33'),(41,'ayush','ayushranka18@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:26:00','2018-11-13 12:26:00'),(43,'ayush','ayushranka19@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:26:37','2018-11-13 12:26:37'),(45,'ayush','ayushranka20@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:27:54','2018-11-13 12:27:54'),(47,'ayush','ayushranka21@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:28:19','2018-11-13 12:28:19'),(48,'ayush','ayushranka22@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:35:37','2018-11-13 12:35:37'),(50,'ayush','ayushranka24@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:38:47','2018-11-13 12:38:47'),(52,'ayush','ayushranka25@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:39:22','2018-11-13 12:39:22'),(54,'ayush','ayushranka26@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:41:40','2018-11-13 12:41:40'),(56,'ayush','ayushranka27@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:42:07','2018-11-13 12:42:07'),(57,'ayush','ayushranka28@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:44:33','2018-11-13 12:44:33'),(58,'ayush','ayushranka29@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-13 12:45:08','2018-11-13 12:45:08'),(60,'ayush','ranjit@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 05:14:43','2018-11-14 05:14:43'),(61,'ayush','ranjit1@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 05:19:24','2018-11-14 05:19:24'),(63,'ayush','ranjitbiharwala@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 05:42:24','2018-11-14 05:42:24'),(65,'ayush','ranjitbiharwaolk@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 06:29:46','2018-11-14 06:29:46'),(66,'ayush','ranjitbiharwaolkkh@gmail.com','12345qwert',8978675678,2,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 09:17:05','2018-11-14 09:17:05'),(67,'dfjhkdhk','dskfhsdkj@gmail.com','sdfkhsdfsdkh32748',8723653846,2,'weiuwruisdfsdkfjhk','seuiedfg','sdfui','sfuidysdui',376328,0,'2018-11-14 09:19:46','2018-11-14 09:19:46'),(68,'ranjit','sfjhkfsdjk@gmail.com','jksadashjk34w',7899999234,1,'sdfskdjfsfjkh','skfjsfjhk','ksdjkf','sdjkfjhk',234762,0,'2018-11-14 09:33:12','2018-11-14 09:33:12'),(69,'122334434','ewriuweru@gmail.com','hgsdfjg378r4627',8973249723,1,'ehwerwejhk','hdgsadgjasj','sdjgsfgj','jshfsdfjh',247823,0,'2018-11-14 09:35:40','2018-11-14 09:35:40'),(70,'ayush','ranji78@gmail.com','12345qwert',8978675678,1,'bangalore','indoreahkfajf','bangalore','karnakata',487987,0,'2018-11-14 09:36:51','2018-11-14 09:36:51'),(71,'ruiewryiu','ewiurewri@gmail.com','DFHKDGDKHDFJHK',7768324768,2,'uiryedfgdfk','dgkhgskgskh','sdfkhjfsdfkhj','djkhskjdsfkjh',389745,0,'2018-11-14 14:00:36','2018-11-14 14:00:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
