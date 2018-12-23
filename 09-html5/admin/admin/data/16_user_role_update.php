<?php
require_once("00_init.php");
$uid = $_REQUEST["uid"];
$rid = $_REQUEST["rid"];
$sql = "insert into xz_users_roles values(null,$rid,$uid)";
$result = mysqli_query($conn, $sql);
$row = mysqli_affected_rows($conn);
if($result&&$row>0)
    echo '{"code":1, "msg":"更新成功"}';
else
    echo '{"code":-1, "msg":"操作失败"}';