<?php 
	#1、创建一个包含城市信息的二维数组
	$array=[
		["哈尔滨","齐齐哈尔","牡丹江"],
		["长春","吉林","四平"],
		["沈阳","大连","鞍山"]
	];
	#2、接收前端传递过来的province的value
	$pid = $_REQUEST["pid"];
	#3、根据传递过来的value值获取具体的城市信息
	$cities = $array[$pid];
	#4、将获取的城市信息拼成<option>
	$opts="";
	for($i=0;$i<count($cities);$i++){
		$opts.="<option value='$i'>$cities[$i]</option>";
	}
	#5、将拼成的信息 响应给客户端
	echo $opts;
?>