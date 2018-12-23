<?php
header("Access-Control-Allow-Origin:*");
    header("Content-Type:application/json");
    $conn = mysqli_connect("localhost","root","","xz",3306);
    $sql = "set names UTF8;";
    mysqli_query($conn,$sql);
