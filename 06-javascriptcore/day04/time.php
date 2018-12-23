<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/13
 * Time: 11:38
 */
header("Content-Type:application:json");
$output = [
    "now" => getdate()[0],
    "end" => strtotime("2018/10/1 00:00")
];
echo json_encode($output);