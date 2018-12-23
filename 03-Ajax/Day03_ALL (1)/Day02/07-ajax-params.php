<?php 
	#获取前端传递过来的参数 uname
	$uname = $_REQUEST["uname"];
	#拼字符串 欢迎 : $uname 响应给前端
	echo "欢迎 : $uname";
?>