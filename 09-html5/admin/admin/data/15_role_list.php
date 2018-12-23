<?php
require_once("00_init.php");
$sql = "select * from xz_role";
$result = mysqli_query($conn, $sql);
$roles = mysqli_fetch_all($result,1);
echo json_encode($roles);