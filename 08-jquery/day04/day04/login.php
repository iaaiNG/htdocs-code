<?php
    session_start();
    header("Content-Type:application/json");
    require_once("init.php");
    @$uname = $_REQUEST["uname"];
    @$upwd = $_REQUEST["upwd"];
    $sql = "select * from xz_user where uname='$uname' and upwd='$upwd'";
    $result = sql_execute($sql);
    if($result){
        $_SESSION["uid"] = $result[0]["uid"];
        echo json_encode(["ok"=>1, "uname"=>$result[0]["uname"]]);
    }
    else
        echo json_encode(["ok"=>0,"msg"=>"错错错啦"]);
?>