<?php 
	#1、增加响应消息头
	header("Content-Type:application/json");
	#2、声明一个普通数组，并且以 JSON 的格式进行响应
	$province=["黑龙江","吉林","辽宁"];
	#3、将 $province 转换成JSON格式的字符串，再响应
	$str = json_encode($province);
	#4、将 $str 响应给客户端
	echo $str;
?>