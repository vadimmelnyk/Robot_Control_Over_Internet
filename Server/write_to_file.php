<?php
if (isset($_POST["drive"])) {$var = $_POST["drive"];}
else {$var = 0;}
$file = "drive.txt";
$handle = fopen($file,"w+");
fwrite($handle,$var);
fclose($handle);

if (isset($_POST["camera"])) {$var = $_POST["camera"];}
else {$var = 0;}
$file = "camera.txt";
$handle = fopen($file,"w+");
fwrite($handle,$var);
fclose($handle);
?>