<?php
  require('init.php');
  $uname = $_REQUEST['uname'];
  $sql = "SELECT * FROM xz_user WHERE uname='$uname';";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_row($result);
  if($row==NULL){
    echo "通过";
  }else{
    echo "用户名已被占用";
  }
?>