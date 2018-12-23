<?php
require('00_init.php');
@$offset = $_REQUEST["offset"] ? $_REQUEST["offset"] : 0;
@$pageSize = $_REQUEST["pageSize"] ? $_REQUEST["pageSize"] : 10;
@$kw = $_REQUEST["kw"];

$sql = "select count(*) as count from xz_user";
$sql .= trim($kw) != "" ? " where uname like '%$kw%'" : "";
$result = mysqli_query($conn, $sql);
$count = mysqli_fetch_row($result)[0];

$sql = "select uid,avatar,uname,user_name,gender,email,phone,expire from xz_user";
$sql .= trim($kw) != "" ? " where uname like '%$kw%'" : "";
$sql .= " limit $offset,$pageSize";

$result = mysqli_query($conn, $sql);
$list = mysqli_fetch_all($result,1);

$output=[
    "count"=>$count,      //总记录数
    "data"=>$list         //当前页内容
];
echo json_encode($output);