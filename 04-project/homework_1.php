<?php
  require('init.php');
  $uid = $_REQUEST['uid'];
  $sql = "DELETE FROM xz_user WHERE uid='$uid';";
  $result = mysqli_query($conn,$sql);
?>