<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
$data = [
    ["name"=>"tom"],
    ["name"=>"james"],
    ["name"=>"jerry"],
];
echo json_encode($data);