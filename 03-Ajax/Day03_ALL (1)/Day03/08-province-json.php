<?php 
	#1、增加响应消息头
	header("Content-Type:application/json");
	#2、创建省份的数组
	$province=["黑龙江","吉林","辽宁"];
	#3、将数组转换成JSON格式字符串，并且响应给客户端
	echo json_encode($province);
?>