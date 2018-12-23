<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/10
 * Time: 0:41
 */
session_start();
header("Content-Type:text/plain");
@$code=$_REQUEST["code"];
if(strtolower($code)==strtolower($_SESSION["code"]))
    echo "true";
else
    echo "false";