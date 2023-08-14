-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2023 at 08:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `client`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(250) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `contact` int(10) NOT NULL,
  `email` varchar(250) NOT NULL,
  `message` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `contact`, `email`, `message`) VALUES
(34, 'sateesh', 'polina', 2147483647, 'polinaSateesh@gmail.com', 'Testing update'),
(36, 'sateesh', 'polina', 2147483647, 'polina@123gmail.com', '123'),
(37, 'sateesh', 'polina', 2147483647, 'polina@123gmail.com', 'sateesh'),
(39, 'sateesh', 'polina', 2147483647, 'polinaSatees@123gmail.com', 'sateesh'),
(47, 'polina', 'sateesh', 2147483647, 'polinasateesh111@gmail.com', 'Testing edit'),
(48, 'satees', 'pol', 2147483647, 'sat@gmail.com', 'sdsdf'),
(49, 'hi', 'hi', 2147483647, 'polina@gmail.com', 'hi'),
(50, 'sateesh', 'polina', 2147483647, 'polinasateesh@123', 'hi'),
(51, 'sateesh', 'polina', 2147483647, 'polina@123gmail.com', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
