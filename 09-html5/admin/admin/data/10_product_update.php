<?php
    require_once("00_init.php");
    @$lid = $_REQUEST["lid"];
    @$price = $_REQUEST["price"];
    $uid = 1;
    $sql = "update xz_laptop set price='$price',mtime=now(),muid=$uid where lid=$lid ";
    $result = mysqli_query($conn, $sql);
    if($result)
        echo '{"msg":"更新成功"}';
    else
        echo '{"msg":"操作失败"}';