<?php 
	#1、声明响应消息头
	header("Content-Type:application/json");
	#2、声明一个关联数组
	$array=[
		"uname"=>"YangMi",
		"ugender"=>"Female",
		"uage"=>30
	];
	#3、将关联数组通过 json_encode() 转换成JSON格式的字符串
	$str = json_encode($array);
	#4、将字符串响应给客户端
	echo $str;
?>