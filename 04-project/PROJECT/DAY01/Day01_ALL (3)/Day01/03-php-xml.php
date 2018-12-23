<?php 
	#1、响应消息头
	header("Content-Type:application/xml");
	#2、生成 xml 格式的字符串，并进行响应
	$xml="<?xml version='1.0' encoding='utf-8' ?>";
	$xml.="<list>";
		$xml.="<stu>";
			$xml.="<name>卡卡西</name>";
			$xml.="<age>30</age>";
			$xml.="<gender>男</gender>";
		$xml.="</stu>";
	$xml.="</list>";
	echo $xml;
?>