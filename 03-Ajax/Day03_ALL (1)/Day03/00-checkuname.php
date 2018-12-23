<?php 
	#1、数据库连接
	require("00-init.php");
	#2、接收前端传递过来的数据
	$uname = $_REQUEST["uname"];
	#3、到数据库中验证用户名称是否存在
	$sql="select * from xz_user where uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row == null){
		echo "通过";
	}else{
		echo "用户名称已存在";
	}
?>