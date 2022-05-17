-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2018 at 08:45 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oas`
--
CREATE DATABASE IF NOT EXISTS `oas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `oas`;

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
-- Table structure for table `bid_master`
--

CREATE TABLE `bid_master` (
  `bid_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `bid_date` datetime NOT NULL,
  `bid_price` decimal(10,4) NOT NULL,
  `bid_count` int(11) NOT NULL,
  `previous_bid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bid_master`
--

INSERT INTO `bid_master` (`bid_id`, `product_id`, `username`, `bid_date`, `bid_price`, `bid_count`, `previous_bid`) VALUES
(1, 2, 'minesh', '2018-03-03 21:46:00', '121002.0000', 2, '[{\"bidDate\":\"2018-03-03 21:40:00\",\"Amount\":\"120001.0000\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `category_master`
--

CREATE TABLE `category_master` (
  `cat_id` int(10) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_master`
--

INSERT INTO `category_master` (`cat_id`, `cat_name`) VALUES
(1, 'Car');

-- --------------------------------------------------------

--
-- Table structure for table `city_master`
--

CREATE TABLE `city_master` (
  `city_id` int(10) NOT NULL,
  `state_id` int(10) NOT NULL,
  `country_id` int(10) NOT NULL,
  `city_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='City_Master';

--
-- Dumping data for table `city_master`
--

INSERT INTO `city_master` (`city_id`, `state_id`, `country_id`, `city_name`) VALUES
(1, 1, 1, 'Surat');

-- --------------------------------------------------------

--
-- Table structure for table `country_master`
--

CREATE TABLE `country_master` (
  `country_id` int(10) NOT NULL,
  `country_name` varchar(30) NOT NULL,
  `country_code` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country_master`
--

INSERT INTO `country_master` (`country_id`, `country_name`, `country_code`) VALUES
(1, 'India', 'IN');

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
  `feed_msg` text NOT NULL,
  `posting_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback_master`
--

INSERT INTO `feedback_master` (`feed_id`, `feed_fname`, `feed_email`, `feed_contact`, `feed_subj`, `feed_msg`, `posting_date`) VALUES
(1, 'Minesh', 'Mamrawala5@gmail.com', '9712377268', '', 'Testing Message', '2018-03-04 01:08:04');

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
  `photo` varchar(255) NOT NULL,
  `package_descr` text NOT NULL,
  `bid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `package_master`
--

INSERT INTO `package_master` (`package_id`, `pname`, `pprice`, `photo`, `package_descr`, `bid`) VALUES
(2, '10 Rupees in 2 Bid', '10', '10-Rupees-film-by-Sagar-Sahay-128x128.jpg', '2 bid package rupee', 2),
(3, '5 Rupees in 1 Bid', '5', '10-Rupees-film-by-Sagar-Sahay-128x128.jpg', '5 Rupees in 1 Bid', 1);

-- --------------------------------------------------------

--
-- Table structure for table `package_user_master`
--

CREATE TABLE `package_user_master` (
  `puid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `total_package_bid` int(10) NOT NULL,
  `purchase_date` datetime NOT NULL,
  `package_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `package_user_master`
--

INSERT INTO `package_user_master` (`puid`, `username`, `total_package_bid`, `purchase_date`, `package_id`) VALUES
(1, 'minesh', 2, '2018-03-03 07:46:54', 2);

-- --------------------------------------------------------

--
-- Table structure for table `payment_master`
--

CREATE TABLE `payment_master` (
  `pid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `package_id` int(11) NOT NULL,
  `amount` decimal(10,4) NOT NULL,
  `status` int(11) NOT NULL,
  `payment_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_master`
--

INSERT INTO `payment_master` (`pid`, `username`, `package_id`, `amount`, `status`, `payment_date`) VALUES
(1, 'minesh', 2, '10.0000', 1, '2018-03-03 07:46:54');

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
  `min_bid_price` decimal(10,4) NOT NULL,
  `status` int(10) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `startdate` datetime NOT NULL,
  `enddate` datetime NOT NULL,
  `product_condition` int(11) NOT NULL,
  `posting_date` datetime NOT NULL,
  `resprice` decimal(10,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Product_Master';

--
-- Dumping data for table `product_master`
--

INSERT INTO `product_master` (`product_id`, `cat_id`, `username`, `productname`, `description`, `min_bid_price`, `status`, `photo`, `startdate`, `enddate`, `product_condition`, `posting_date`, `resprice`) VALUES
(2, 1, 'admin', 'Vintage Car LX', 'Testing Description,\r\nTesting Car, Good Mileage, etc...', '120000.0000', 1, '3065_Vintage_Cares1.jpg', '2018-01-21 00:00:00', '2018-03-31 00:00:00', 1, '2018-03-03 08:19:16', '100000.0000');

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE `state_master` (
  `state_id` int(10) NOT NULL,
  `country_id` int(10) NOT NULL,
  `state_name` varchar(30) NOT NULL,
  `state_code` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state_master`
--

INSERT INTO `state_master` (`state_id`, `country_id`, `state_name`, `state_code`) VALUES
(1, 1, 'Gujarat', 'GU');

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
  `country_id` int(30) NOT NULL,
  `state_id` int(30) NOT NULL,
  `city_id` int(30) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Contact` varchar(20) NOT NULL,
  `Photo` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `balance_bid` int(11) NOT NULL,
  `zipcode` varchar(7) NOT NULL,
  `paypal_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='User_Master';

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`Username`, `FirstName`, `LastName`, `Gender`, `Address`, `country_id`, `state_id`, `city_id`, `Email`, `Contact`, `Photo`, `Password`, `Type`, `balance_bid`, `zipcode`, `paypal_email`) VALUES
('admin', 'Harshit', 'Bagga', 'M', 'Surat', 1, 1, 1, 'mineshmamrawala5@gmail.com', '1234567891', 'admin.png', 'YWRtaW4=', 'Admin', 0, '395017', ''),
('minesh', 'Minesh', 'Mamrawala', 'M', '138-New Aashirwad Villa', 1, 1, 1, 'mineshmamrawala5@gmail.com', '9712377268', 'client-11.png', 'bWluZXNoMTIz', 'User', 5, '395017', 'minesh138@hotmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bidconfirm_master`
--
ALTER TABLE `bidconfirm_master`
  ADD PRIMARY KEY (`confirm_bid_id`);

--
-- Indexes for table `bid_master`
--
ALTER TABLE `bid_master`
  ADD PRIMARY KEY (`bid_id`);

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
-- Indexes for table `payment_master`
--
ALTER TABLE `payment_master`
  ADD PRIMARY KEY (`pid`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bidconfirm_master`
--
ALTER TABLE `bidconfirm_master`
  MODIFY `confirm_bid_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bid_master`
--
ALTER TABLE `bid_master`
  MODIFY `bid_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category_master`
--
ALTER TABLE `category_master`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `city_master`
--
ALTER TABLE `city_master`
  MODIFY `city_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `country_master`
--
ALTER TABLE `country_master`
  MODIFY `country_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `feedback_master`
--
ALTER TABLE `feedback_master`
  MODIFY `feed_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `news_master`
--
ALTER TABLE `news_master`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `package_master`
--
ALTER TABLE `package_master`
  MODIFY `package_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `package_user_master`
--
ALTER TABLE `package_user_master`
  MODIFY `puid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payment_master`
--
ALTER TABLE `payment_master`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `state_master`
--
ALTER TABLE `state_master`
  MODIFY `state_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
