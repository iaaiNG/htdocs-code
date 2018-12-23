<?php
  $name = $_REQUEST['uname'];
  $conn = mysqli_connect('localhost','root','','mydata',3306);
  $sql = "SELECT * FROM xz_user WHERE uname='$name';";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_row($result);
  if($row != NULL){
    echo "用户名已存在";
  }else{
    echo "通过";
  }
?>