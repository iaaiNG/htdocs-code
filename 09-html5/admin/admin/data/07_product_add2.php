<?php
require("00_init.php");
$sql = "select distinct category from xz_laptop ";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_all($result);
//var_dump($row);
echo json_encode($row);
