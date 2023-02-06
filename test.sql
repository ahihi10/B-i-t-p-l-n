-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 06, 2023 lúc 08:38 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `test`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`username`, `email`, `pass`) VALUES
('ad1', 'ad1@gmail.com', 123),
('ad2', 'ad2@gmail.com', 123),
('ad3', 'ad3@gmail.com', 123);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `commic`
--

CREATE TABLE `commic` (
  `commicid` int(11) NOT NULL,
  `name_commic` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `publishyear2` varchar(4) NOT NULL,
  `type` varchar(100) NOT NULL,
  `rent_day` varchar(100) NOT NULL,
  `pages` varchar(100) NOT NULL,
  `paper_size` varchar(10) NOT NULL,
  `language` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `commic`
--

INSERT INTO `commic` (`commicid`, `name_commic`, `author`, `publishyear2`, `type`, `rent_day`, `pages`, `paper_size`, `language`) VALUES
(11, 'Doraemontap1', 'FujikoF.Fujio', '1969', 'truyentranh', '5000', '194', 'A5', 'VietNam'),
(12, 'Doraemontap2', 'FujikoF.Fujio', '1969', 'truyentranh', '5000', '194', 'A5', 'VietNam');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `customersid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `id_film` int(11) NOT NULL,
  `Rental_period` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `money_bet` varchar(100) NOT NULL,
  `total_money` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`customersid`, `name`, `tel`, `id_film`, `Rental_period`, `money_bet`, `total_money`) VALUES
(101, 'Lan', '123123321', 1, '2023-01-22 01:52:45', '5000', ''),
(102, 'Linh', '123456789', 12, '2023-01-25 04:19:50', '5000', ''),
(103, 'Long', '99999999', 3, '2023-03-02 04:29:50', '15000', ''),
(105, 'Lien', '0189898989', 1, '2023-02-04 06:02:30', '5000', ''),
(106, 'Lim', '01234567', 1, '2023-01-21 10:00:00', '5000', '0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `film`
--

CREATE TABLE `film` (
  `filmid` int(11) NOT NULL,
  `name_film` varchar(100) NOT NULL,
  `directors` varchar(100) NOT NULL,
  `publishyear` varchar(4) NOT NULL,
  `category` varchar(100) NOT NULL,
  `rentbyday` varchar(100) NOT NULL,
  `time` time NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `resolution` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `film`
--

INSERT INTO `film` (`filmid`, `name_film`, `directors`, `publishyear`, `category`, `rentbyday`, `time`, `capacity`, `resolution`) VALUES
(1, 'Vuonsaobang', 'JeonKiSang', '2009', 'Chinhkich', '10000', '05:59:59', '64bit', 'FHD'),
(2, 'Vaemseden', 'LeeJang-hoon', '2018', 'Langman', '10000', '02:12:22', '64bit', 'FHD');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `commic`
--
ALTER TABLE `commic`
  ADD PRIMARY KEY (`commicid`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customersid`);

--
-- Chỉ mục cho bảng `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`filmid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
