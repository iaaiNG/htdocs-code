<?php
  $uname = $_REQUEST['uname'];
  $upwd  = $_REQUEST['upwd'];
  $conn = mysqli_connect('localhost','root','','mydata',3306);
  $sql = "SELECT * FROM xz_user WHERE uname='$uname' AND upwd='$upwd';";
  $result = mysqli_query($conn,$sql);
  $assoc = mysqli_fetch_assoc($result);
  if($assoc == NULL){
    echo "用户名或密码错误";
  }else{
    echo "登陆成功";
  }
?>