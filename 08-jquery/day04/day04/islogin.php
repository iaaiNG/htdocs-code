<?php
    session_start();
    header("Content-Type:application/json");
    require_once("init.php");
    @$uid = $_SESSION["uid"];
    if($uid)
        echo json_encode(["ok"=>1]);
    else
        echo json_encode(["ok"=>0]);
?>