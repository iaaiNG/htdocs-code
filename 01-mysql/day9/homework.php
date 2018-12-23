<?php
  $conn = mysqli_connect('localhost','root','','tedu',3306);
  #$sql = "INSERT INTO emp VALUE(NULL,'LQW',20000,'1994-09-05',50);";
  $sql = "DELETE FROM emp WHERE eid=1;";
  $result = mysqli_query($conn,$sql);
  if($result == false){
    echo "执行失败";
  }else{
    echo "执行成功";
  };
?>