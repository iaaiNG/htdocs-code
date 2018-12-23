<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/10
 * Time: 16:47
 */
$url = "http://tedu.cn/imgs/logo.png";
$i = strripos($url,"/");
$filename = substr($url,$i+1);
$i = strripos($filename,".");
$ext = substr($filename,$i);
echo $filename."<br>";
echo $ext;