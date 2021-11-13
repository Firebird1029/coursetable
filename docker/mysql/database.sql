-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Nov 13, 2021 at 08:27 PM
-- Server version: 10.6.5-MariaDB-1:10.6.5+maria~focal
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yaleplus`
--
CREATE DATABASE IF NOT EXISTS `yaleplus` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `yaleplus`;

-- --------------------------------------------------------

--
-- Table structure for table `StudentBluebookSettings`
--

CREATE TABLE `StudentBluebookSettings` (
  `netId` char(8) NOT NULL,
  `evaluationsEnabled` tinyint(1) UNSIGNED NOT NULL,
  `first_name` varchar(256) DEFAULT NULL COMMENT 'User''s first name',
  `last_name` varchar(256) DEFAULT NULL COMMENT 'User''s last name',
  `email` varchar(256) DEFAULT NULL COMMENT 'User''s email address',
  `upi` int(11) DEFAULT NULL COMMENT 'Universal Personal Identifier used by Yale Directory',
  `school` varchar(256) DEFAULT NULL COMMENT 'User''s school',
  `year` int(11) DEFAULT NULL COMMENT 'User''s year of graduation',
  `college` varchar(256) DEFAULT NULL COMMENT 'User''s residential college',
  `major` varchar(256) DEFAULT NULL COMMENT ' User''s major',
  `curriculum` varchar(256) DEFAULT NULL COMMENT 'User''s curriculum (for grad students)',
  `challengeTries` int(11) NOT NULL DEFAULT 0 COMMENT 'Number of attempts at challenge'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `StudentFacebookFriends`
--

CREATE TABLE `StudentFacebookFriends` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `netId` char(8) NOT NULL,
  `name` varchar(255) NOT NULL,
  `facebookId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `StudentFriends`
--

CREATE TABLE `StudentFriends` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_netid` char(8) NOT NULL,
  `receiver_netid` char(8) NOT NULL,
  `status` enum('pending','confirmed','declined') NOT NULL,
  `sender_facebook_id` bigint(20) UNSIGNED DEFAULT NULL,
  `receiver_facebook_id` bigint(20) UNSIGNED DEFAULT NULL,
  `timestamp_requested` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `timestamp_updated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `StudentFriends`
--

INSERT INTO `StudentFriends` (`id`, `sender_netid`, `receiver_netid`, `status`, `sender_facebook_id`, `receiver_facebook_id`, `timestamp_requested`, `timestamp_updated`) VALUES
(1, 'ach88', 'bmw49', 'pending', NULL, NULL, '2021-11-13 19:56:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Students`
--

CREATE TABLE `Students` (
  `netId` char(8) NOT NULL DEFAULT '',
  `facebookId` bigint(20) UNSIGNED NOT NULL,
  `facebookDataJson` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `WorksheetCourses`
--

CREATE TABLE `WorksheetCourses` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `net_id` char(8) NOT NULL,
  `oci_id` mediumint(8) UNSIGNED NOT NULL,
  `season` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `StudentBluebookSettings`
--
ALTER TABLE `StudentBluebookSettings`
  ADD PRIMARY KEY (`netId`);

--
-- Indexes for table `StudentFacebookFriends`
--
ALTER TABLE `StudentFacebookFriends`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `netId_friendFacebookId` (`netId`,`facebookId`),
  ADD KEY `netId` (`netId`);

--
-- Indexes for table `StudentFriends`
--
ALTER TABLE `StudentFriends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`netId`),
  ADD KEY `facebookId` (`facebookId`);

--
-- Indexes for table `WorksheetCourses`
--
ALTER TABLE `WorksheetCourses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `net_id_oci_id_season` (`net_id`,`oci_id`,`season`),
  ADD KEY `net_id` (`net_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `StudentFacebookFriends`
--
ALTER TABLE `StudentFacebookFriends`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59251421;

--
-- AUTO_INCREMENT for table `StudentFriends`
--
ALTER TABLE `StudentFriends`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WorksheetCourses`
--
ALTER TABLE `WorksheetCourses`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1213985;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
