-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               11.6.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table rest.meals
DROP TABLE IF EXISTS `meals`;
CREATE TABLE IF NOT EXISTS `meals` (
  `meal_id` int(11) NOT NULL AUTO_INCREMENT,
  `meal_type` ENUM('meat', 'fish', 'vegan') NOT NULL,
  `meal_name` varchar(50) NOT NULL,
  `meal_content` varchar(200) DEFAULT NULL,
  `allergens` varchar(200) DEFAULT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`meal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table rest.meals: ~13 rows (approximately)
INSERT INTO `meals` (`meal_id`, `meal_type`, `meal_name`, `meal_content`, `allergens`, `price`) VALUES
	(1, 'vegan', '비빔밥 | Bibimbap', 'Keitettyä riisiä, kasviksia ja kananmunaa', 'v, g, vg (pyydettäessä)', 15),
	(2, 'meat', '불고기 비빔밥 | Naudanliha-bibimbap', 'Keitettyä riisiä, kasviksia, kananmunaa ja naudanlihaa', 'sis. soija, seesami, gluteeni', 17),
	(3, 'meat', '치킨 비빔밥 | Kana-bibimbap', 'Keitettyä riisiä, kasviksia, kananmunaa ja kanaa', 'sis. soija, seesami, gluteeni', 17),
	(4, 'meat', '제육 비빔밥 | Sianliha-bibimbap', 'Keitettyä riisiä, kasviksia, kananmunaa ja sianlihaa', 'sis. soija, seesami, gluteeni', 17),
	(5, 'vegan', '두부 비빔밥 | Tofu-bibimbap', 'Keitettyä riisiä, kasviksia, kananmunaa ja tofua', 'v, g, vg (pyydettäessä)', 17),
	(6, 'meat', '불고기 | Bulgogi', 'Marinoitua naudanlihaa, riisiä, kasviksia ja seesaminsiemeniä', 'sis. soija, seesami, gluteeni', 16),
	(7, 'meat', '닭불고기 | Dak bulgogi', 'Marinoitua kananlihaa, riisiä, kasviksia ja seesaminsiemeniä', 'sis. soija, seesami, gluteeni', 16),
	(8, 'meat', '돼지불고기 | Dwaeji bulgogi', 'Chilikastikkeessa marinoitua sianlihaa, riisiä, kasviksia ja seesaminsiemeniä', 'sis. soija, seesami, gluteeni', 16),
	(9, 'vegan', '김치찌개 | Kimchi jjigae', 'Kimchikeittoa, tofua, sianlihaa ja riisiä', 'sis. soija, seesami, gluteeni', 16),
	(10, 'fish', '김치 | Kimchi', 'Fermentoitua kiinankaalia, chiliä ja valkosipulia ', '', 4),
	(11, 'vegan', '김밥 | Kimbap', 'Riisiä, merilevää, kasviksia ja kananmunaa ', 'sis. kananmuna, seesami, soija, v, vg (pyydettäessä)', 7),
	(12, 'vegan', '잡채 | Japchae', 'Lasinuudeleita, kasviksia ja seesamiöljyä', 'sis. soija, seesami, gluteeni, v, vg (pyydettäessä)', 8),
	(13, 'vegan', '파전 | Pajeon', 'Korealainen pannukakku, kevätsipulia ja kasviksia', 'sis. gluteeni, kananmuna', 9);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
