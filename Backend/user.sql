-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 06:08 PM
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
  `contact` varchar(250) NOT NULL,
  `message` varchar(4000) NOT NULL,
  `image` text NOT NULL,
  `createdDate` varchar(250) NOT NULL,
  `orderCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `contact`, `message`, `image`, `createdDate`, `orderCount`) VALUES
(37, 'sateesh', 'polina', '7730050049', 'hi', '?PNG\r\n\Z\n\0\0\0\rIHDR\0\0?\0\0?\0\0\0ؖ?#\0\0\0KPLTEGpL}?}?|?|?|?}?z?y?|?{?}?c?|?}?z?}?}?}?y?|?|?p?|?}?u\0U?\0\0\0tRNS\0???[r?$?7?C?.??N??g?@?\0\0!IDATx^???\r@0\0\0@??J????????\r??\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0?k[C??R7տe??????2???uT??a????ԁ\0\n7\Z``?z?+?/??JU?8??5??l?K??H?XM???]F?s???[\'???????b(?Ͻ+?b ??7???ȋG?r\n??Vy??2?4?5u\Z???f?	O}[E???Mst<??Я%cp???Nk?w???X??-? cp?7??????bn?*?2j???3\nz]??\rz]??mzY?d\Z?zY???G?Mr?J??S??:???d-zQ??MGxjj?#<????N??R??n???d횺 ?b??H?og???a???-???F?y??b??????۽??6???????????N????Zy???ܭ??1?F:k4??F:[?Aɋ???5I?t??h???\r:wJ??O/?s]???A??@?[|?S????t^???Z??:?,?s[?@H?Q?k?v1?\\x??Ζ9?;??{?????}?u)<??(\"?M߯8?V\\7ս-??????A\Zy???61??!?j??s??O??_كX?8?$?z????0?y\n???Ki?WV???O????XЫ?c??r,??OV?cA?cW[ؼo?R\"5???XЋR????kDA_D>?~?̢?t?c??;?xU0???S>ֺ&??@?ל?#??????U#yGgr??ZT??????1?7uЛA????v??:??A???Z\r??^??۠??A_\n?????M?M?????4wu*?O??#????NKb?cVo꠯?zS??Po꠷?zS?ԛ:?e???A?TsW?gb??zS??՛:?Ǭ??Ao???ک7u?Ǉ&W?q?Ƥ?!)z4?:m??e??Ϡ?թ?:?IR?})?k?gNk~?e???i??(,??W???s e??B??;ԹhX3B??{?????1?~?t?_??<ЏYS??:D.??TcR?f???t??r?߆>F??S??Xk????\Z	?k??g?Fq?????\\)?}??G???x揞^????O??AS????֜(?aP?+(?Z?_?$3?\\?b??N?߻\0Or??m??-{?5??SA?O??k+?_?DE?y???:*3F??ы(z0???q?}>??į?I?Wڌ??l???:\Zgz=????*?L??h???????:?????????:???}?5rԁNT~]?ī?ZG???tK?ԁNT?]y^u????F?5?:\n3{???j?[???????(t?S?K?ڪ????#?Vnt??@\'?G~t~u???ft??@\'2;:?:??3????@??^????$?@?:???T?G?W?Je-?i?@וz?:?)?ެ?Sz????=x????7?4u??D?]oGr1?\0u?e?nB?=	P?.??E????\0u?S??k~??#?@?F?w??ԿP?:????????&?@??K???+Mԁ^?W????Dԁ??/?\\U??$?}?/??G/I?:???b???A??sK?ư??3IP?;r]??7?\'	?@7M????.A?ŤRY͈?{??t???eݑu???gU??Pgn2????֑(u?????E?ݪs?,?Ա>][u??]?:?u??δ%?e?????9?>?u?S=?ݏ?O?u?W짆?=?;??5\'z??Sާ?k??\"ԁ~?&[:\"\Z??u?.?ѡ?\\`E??7???C?L?b???????}i??????Ձ?$??Y?6?, B?k???pm?_@W3?P??el ???Lo??o$Y??9?????K??Ӛ??w???????F??V???????y]O?+????u?ϯފW????{?\"?@?|.{?fU?P?G??-\Z?̵?]y?f???j???S????o?3?ו???o?2o?W?:?ݞ?\n??^??H?:?sյ??B???s??:cQT????ۘ?>?*C=:4??$??@O?????W??|??W\'?$B???өu???:o?Lu?瞼?????P:?:u????u?7??_[P?*?:oY??a}?.?V%?\r?Y?LtVu??*?BPg-}z?/l=[??t?q??????J??S,_=?٪ P轊?T)??͗Qz;Sɣ????VVtk?i?@???~Wt߃?]ѵ??U???jN????ԁnz?:?+MP?@1nY=M?%=M??LOS??	?W?bDo=P?OS??=u?q0,???~߱?*?\0??7????!?_?qfD???j3:??^???Pgi2??? ?_ [p?k\"?^|Vg?/ы??t?l*?ѡ.???F???6nt?˯?B?	t??o?C???%j5?\\?D?????>?u?m\\?SAP?J?iϙ??/??AoA?:i?}䚎?~?X?	\rA?J\r??@P???C?ؤ?ϓ?6?`%????\"??????s?{t?AI.?kُ?????]?yL???zs???e?\0?︪qM??@}???.G??Z?S?S?t??<\0u??.??Lz??V݋?????oP???_;j?SF?M՗[?Z??3??@??Ӷ4??|??????.?Rпҵ??k???Z]?????U?ڎ?r<??y????????l?????^刨8T??r37U/??k?eO???V@??Ք?0uä???wPv?=?gu?*ʮ??^@?t??kd?k&u??_O?M??	??k(?^??????Qoyԝ?#eg????N?F??????S??~??6?=?O?n?n?~:O??{?{????C}?????c^??yD?HS?T\"L?a??ު??(L}z?{s?`/?0???U?`????_??	?Y?z???*0?^\nx[2q?	??V?0?^	[???L!;???G?s??<???zD??3zp\r?,L;?x????`_??\n?\r?3?T??\rL???u???3??{<????3{??:??0?FE??	?ZzR???,??G???h?tω`?c:??,7??ԘeM?,?懳?z????????Q????\rU????e?C=?1L?R??????/??qTղ,??_??Q%\nK]z7???_+L?\r??y??u????4???u9????2???���U??j?f??ap߮??_?Q-߮??S??8&\0\0\0@d?Զ?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0p???????W\0\0\0\0IEND?B`?', '11-10-2023', -1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
