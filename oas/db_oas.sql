-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 07, 2017 at 09:55 PM
-- Server version: 5.6.34
-- PHP Version: 5.6.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oas`
--
CREATE DATABASE IF NOT EXISTS `oas` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `oas`;

-- --------------------------------------------------------

--
-- Table structure for table `bid_master`
--

CREATE TABLE `bid_master` (
  `bid_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `bid_date` date NOT NULL,
  `bid_price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bidconfirm_master`
--

CREATE TABLE `bidconfirm_master` (
  `confirm_bid_id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `bid_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Bidconfirm_Master';

-- --------------------------------------------------------

--
-- Table structure for table `category_master`
--

CREATE TABLE `category_master` (
  `cat_id` int(10) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `city_master`
--

CREATE TABLE `city_master` (
  `city_id` int(10) NOT NULL,
  `state_id` int(10) NOT NULL,
  `country_id` int(10) NOT NULL,
  `city_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='City_Master';

-- --------------------------------------------------------

--
-- Table structure for table `country_master`
--

CREATE TABLE `country_master` (
  `country_id` int(10) NOT NULL,
  `country_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country_master`
--

INSERT INTO `country_master` (`country_id`, `country_name`) VALUES
(1, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_master`
--

CREATE TABLE `feedback_master` (
  `feed_id` int(10) NOT NULL,
  `feed_fname` varchar(255) NOT NULL,
  `feed_email` varchar(255) NOT NULL,
  `feed_contact` varchar(20) NOT NULL,
  `feed_subj` varchar(255) NOT NULL,
  `feed_msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `news_master`
--

CREATE TABLE `news_master` (
  `nid` int(11) NOT NULL,
  `nname` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `package_master`
--

CREATE TABLE `package_master` (
  `package_id` int(10) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `pprice` decimal(10,0) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `package_user_master`
--

CREATE TABLE `package_user_master` (
  `puid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `total_package_bid` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_master`
--

CREATE TABLE `product_master` (
  `product_id` int(10) NOT NULL,
  `cat_id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `min_bid_price` decimal(10,0) NOT NULL,
  `status` int(10) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Product_Master';

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE `state_master` (
  `state_id` int(10) NOT NULL,
  `country_id` int(10) NOT NULL,
  `state_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state_master`
--

INSERT INTO `state_master` (`state_id`, `country_id`, `state_name`) VALUES
(1, 1, 'Gujarat');

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `Username` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Address` text NOT NULL,
  `Country` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Contact` varchar(20) NOT NULL,
  `Photo` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='User_Master';

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`Username`, `FirstName`, `LastName`, `Gender`, `Address`, `Country`, `State`, `City`, `Email`, `Contact`, `Photo`, `Password`, `Type`) VALUES
('admin', 'Harshit', 'Bhagga', 'M', 'Surat', '1', '1', '1', 'admin@gmail.com', '1234567891', 'admin.png', 'CtmaUDw/547eJRFQ2nLCSj0GQibsPU7i0Hqn8BvaQ60=', 'Admin'),
('harshit', 'Harshit', 'Bhagga', '', '', '', '', '', 'harshit@gmail.com', '1234567892', '', 'harshit', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `user_package_master`
--

CREATE TABLE `user_package_master` (
  `upid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bid_master`
--
ALTER TABLE `bid_master`
  ADD PRIMARY KEY (`bid_id`);

--
-- Indexes for table `bidconfirm_master`
--
ALTER TABLE `bidconfirm_master`
  ADD PRIMARY KEY (`confirm_bid_id`);

--
-- Indexes for table `category_master`
--
ALTER TABLE `category_master`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `city_master`
--
ALTER TABLE `city_master`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `country_master`
--
ALTER TABLE `country_master`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `feedback_master`
--
ALTER TABLE `feedback_master`
  ADD PRIMARY KEY (`feed_id`);

--
-- Indexes for table `news_master`
--
ALTER TABLE `news_master`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `package_master`
--
ALTER TABLE `package_master`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `package_user_master`
--
ALTER TABLE `package_user_master`
  ADD PRIMARY KEY (`puid`);

--
-- Indexes for table `product_master`
--
ALTER TABLE `product_master`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `state_master`
--
ALTER TABLE `state_master`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`Username`);

--
-- Indexes for table `user_package_master`
--
ALTER TABLE `user_package_master`
  ADD PRIMARY KEY (`upid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bid_master`
--
ALTER TABLE `bid_master`
  MODIFY `bid_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bidconfirm_master`
--
ALTER TABLE `bidconfirm_master`
  MODIFY `confirm_bid_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category_master`
--
ALTER TABLE `category_master`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `city_master`
--
ALTER TABLE `city_master`
  MODIFY `city_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `country_master`
--
ALTER TABLE `country_master`
  MODIFY `country_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `feedback_master`
--
ALTER TABLE `feedback_master`
  MODIFY `feed_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `news_master`
--
ALTER TABLE `news_master`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `package_master`
--
ALTER TABLE `package_master`
  MODIFY `package_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `package_user_master`
--
ALTER TABLE `package_user_master`
  MODIFY `puid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `state_master`
--
ALTER TABLE `state_master`
  MODIFY `state_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_package_master`
--
ALTER TABLE `user_package_master`
  MODIFY `upid` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
