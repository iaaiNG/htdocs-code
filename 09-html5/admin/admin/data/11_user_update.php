<?php
    require_once("00_init.php");
    @$uid = $_REQUEST["uid"];
    @$oldUPwd = $_REQUEST["oldUPwd"];
    @$newUPwd = $_REQUEST["newUPwd"];
    $sql = "update xz_user set upwd=md5('$newUPwd') where uid=$uid and upwd=md5('$oldUPwd')";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_affected_rows($conn);
    if($result&&$row>0)
        echo '{"msg":"密码修改成功"}';
    else
        echo '{"msg":"修改失败，旧密码输入错误","sql":"'.$sql.'"}';