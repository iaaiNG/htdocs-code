<?php
require_once("00_init.php");
require_once("00_imageUtils.php");
@$file = $_FILES["mypic"];
$rs = empty($file);
if($rs==true){
    die('{"code":-1, "msg":"没有上传文件请检查"}');
}

$picname = $file["name"];
$picsize = $file["size"];
if($picsize>512*1024*1024){
    die('{"code":-2, "msg":"文件不能超出 512K"}');
}
$type = strstr($picname, '.');
if($type != ".gif" && $type != ".jpg" && $type != ".png"){
    die('{"code":-3, "msg":"上传文件格式不正确"}');
}
$imgName = time().rand(1,9999).$type;
$name = "../img/avatar/".$imgName;
move_uploaded_file(
    $file["tmp_name"],
    $name
);

mkThumbnail($name, 51, 51, "../img/avatar/s_".$imgName);
mkThumbnail($name, 82, 82, "../img/avatar/m_".$imgName);


@$uid = $_REQUEST["uid"];
$sql = "update xz_user set avatar = 'img/avatar/s_$imgName' where uid=$uid";
$result = mysqli_query($conn, $sql);
$row = mysqli_affected_rows($conn);
if($result&&$row>0){
    echo "更新成功".$sql;
}

