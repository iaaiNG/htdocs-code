<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type:application/json");
    $conn = mysqli_connect("localhost","root","","xz",3306);
    $sql = "set names UTF8;";
    mysqli_query($conn,$sql);
    @$n = $_REQUEST["uname"];
    @$p = $_REQUEST["upwd"];
    $sql = "select uid from xz_user where uname='$n' and upwd=md5('$p') ";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    if($row){
        $_SESSION["uid"]=$row[0];
        echo json_encode(["code"=>1, "msg"=>"登录成功"]);
    }
    else
        echo json_encode(["code"=>-1, "msg"=>"用户名或密码有误"]);