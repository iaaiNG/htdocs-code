<?php
  require("init.php");
  $uid = $_REQUEST['uid'];
  $upwd = $_REQUEST['upwd'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $user_name = $_REQUEST['user_name'];
  $gender = $_REQUEST['gender'];
  $sql = "update xz_user set 
    upwd='$upwd',
    email='$email',
    phone='$phone',
    user_name='$user_name',
    gender = '$gender'
    where uid=$uid;
    ";
  $result = mysqli_query($conn,$sql);
  if($result==false){
    echo "操作失败：$sql";
  }else{
    $res = "<script>";
      $res .= "alert('更新成功');";
      $res .= "location.href='homework.html';";
    $res .= "</script>";
    echo $res;
  }
?>