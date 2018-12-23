<?php 
	#接收前端传递过来的数据 uname
	$uname=$_REQUEST["uname"];
	#如果 uname 的值为 admin 的话，则视为已存在，否则不存在
	if($uname == "admin"){
		echo "用户名称已存在";
	}else{
		echo "通过";
	}
?>