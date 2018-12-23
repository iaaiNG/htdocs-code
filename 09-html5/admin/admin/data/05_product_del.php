<?php
header("Access-Control-Allow-Origin:*");
    require_once("00_init.php");
    @$lid = $_REQUEST["lid"];
    $sql = "update xz_laptop set expire = 1 where lid=$lid ";
    $result = mysqli_query($conn, $sql);
    if($result)
        echo '{"msg":"删除成功"}';
    else
        echo '{"msg":"操作失败"}';
