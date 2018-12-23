<?php
require("00_init.php");
@$family_id = $_REQUEST['family_id'];
@$title = $_REQUEST['title'];
@$subtitle = $_REQUEST['subtitle'];
@$price = $_REQUEST['price'];
@$promise = $_REQUEST['promise'];
@$spec = $_REQUEST['spec'];
@$name = $_REQUEST['name'];
@$os = $_REQUEST['os'];
@$memory = $_REQUEST['memory'];
@$resolution = $_REQUEST['resolution'];
@$video_card = $_REQUEST['video_card'];
@$cpu = $_REQUEST['cpu'];
@$video_memory = $_REQUEST['video_memory'];
@$category = $_REQUEST['category'];
@$disk = $_REQUEST['disk'];
@$details = $_REQUEST['details'];
@$shelf_time = $_REQUEST['shelf_time'];
@$sold_count = $_REQUEST['sold_count'];
@$is_onsale = $_REQUEST['is_onsale'];
@$cuid = $_REQUEST['cuid'];

if(!preg_match("/^[0-9]+$/", $family_id)){
    exit('{"code":-1, "msg":"类别id有误"}');
}

if(!preg_match("/[\x{4e00}-\x{9fa5}a-zA-Z0-9]+/u", $title)){
    exit('{"code":-1, "msg":"标题有误"}');
}

$sql = "insert into xz_laptop values(null, $family_id, '$title', '$subtitle', $price, '$promise', '$spec', '$name', '$os', '$memory', '$resolution', '$video_card', '$cpu', '$video_memory', '$category', '$disk', '$details', unix_timestamp(), 0, $is_onsale, '0', $cuid, now(), 0, 0)";

$result = mysqli_query($conn, $sql);
$rowsCount = mysqli_affected_rows($conn);
if($result&&$rowsCount>0){
    echo '{"code":1,"msg":"添加成功"}';
}else{
    echo '{"code":-1,"msg":"添加失败"}';
}

