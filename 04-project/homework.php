<?php
  header("Content-Type:application/json");
  require('init.php');
  $sql = "SELECT * FROM xz_user;";
  $result = mysqli_query($conn,$sql);
  $assoc = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $str = json_encode($assoc);
  echo $str;
?>
