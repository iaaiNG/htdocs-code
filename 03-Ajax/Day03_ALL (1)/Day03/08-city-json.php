<?php 
	#1、增加响应消息头
	header("Content-Type:application/json");
	#2、声明一个城市的二维数组
	$city = [
		["哈尔滨","齐齐哈尔","牡丹江"],
		["长春","吉林","四平"],
		["沈阳","大连","鞍山"]
	];
	#3、获取前端请求过来的数据，即省份的value，并保存在 pid 中
	$pid = $_REQUEST["pid"];
	#4、在二维数组中，获取一个子数组，并以JSON的格式进行响应
	echo json_encode($city[$pid]);
?>