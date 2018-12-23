<?php
  $uname = $_REQUEST['uname'];
  $upwd = $_REQUEST['upwd'];
  $cpwd = $_REQUEST['cpwd'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $user_name = $_REQUEST['user_name'];
  $gender = $_REQUEST['gender'];
  require('init.php');
  $sql = "INSERT INTO xz_user(uid,uname,upwd,email,phone,user_name,gender)
                      VALUE (NULL,'$uname','$upwd','$email','$phone','$user_name',$gender);";
  $result = mysqli_query($conn,$sql);
  if($result==true){
    echo "<script>alert注册成功</script>";
  }else{
    echo "<script>alert注册失败</script>";
  }
?>