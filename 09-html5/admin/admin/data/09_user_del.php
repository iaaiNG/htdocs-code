<?php
    require_once("00_init.php");
    @$uid = $_REQUEST["uid"];
    $sql = "update xz_user set expire = 1 where uid=$uid ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_affected_rows($conn);
    if($result&&$row>0)
        echo '{"msg":"删除成功"}';
    else
        echo '{"msg":"操作失败"}}';
