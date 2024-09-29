-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 29, 2024 at 02:43 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `total` decimal(10,2) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `picture` varchar(255) DEFAULT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `picture`, `stock`) VALUES
(11, 'Aficionado F1 85ML', 99.00, 'Aficionado F1 85ML For UNISEX Inspired by the scent of CK ONE  An Eau De Toilette SprayCharacteristics:FRESH, IRIS, AMBERY & GREEN85ml Bottle with protective pouch', 'C:\\wamp64\\www\\ecommercedb\\uploads\\1727535973334.png', 20),
(12, 'Aficionado F1 85ML', 99.00, 'Aficionado F1 85ML For UNISEX Inspired by the scent of CK ONE  An Eau De Toilette SprayCharacteristics:FRESH, IRIS, AMBERY & GREEN85ml Bottle with protective pouch', 'C:\\wamp64\\www\\ecommercedb\\uploads\\1727535973559.png', 60),
(13, 'Aficionado F1 85ML', 99.00, 'Aficionado F1 85ML For UNISEX Inspired by the scent of CK ONE  An Eau De Toilette SprayCharacteristics:FRESH, IRIS, AMBERY & GREEN85ml Bottle with protective pouch', 'C:\\wamp64\\www\\ecommercedb\\uploads\\1727566988663.png', 0),
(14, 'Aficionado F1 85ML', 99.00, 'Aficionado F1 85ML For UNISEX Inspired by the scent of CK ONE  An Eau De Toilette SprayCharacteristics:FRESH, IRIS, AMBERY & GREEN85ml Bottle with protective pouch', 'C:\\wamp64\\www\\ecommercedb\\uploads\\1727567014921.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `userType` enum('user','admin') DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullName`, `username`, `userType`) VALUES
(5, 'erika@finaltesting.com', '1234', 'erika joy', 'erika mae', 'user'),
(2, 'harshid.vasoya2827@gmail.com', '1234', 'Reymel Rey Mislang', 'reymelrey20', 'admin'),
(3, 'reymelrey@gmail.com', 'admin', 'Reymel Rey Mislang', 'admin', 'admin'),
(4, 'matt@gmai.com', '123456', 'Matthew Balinton', 'tangaka', 'user'),
(6, 'user@user.com', 'user', 'user', 'user', 'user'),
(7, 'admin@admin', 'admin', 'admin', 'admin2', 'admin');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
