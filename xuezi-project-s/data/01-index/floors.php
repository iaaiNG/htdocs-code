<?php
header("Content-Type:application/json");
require_once("../init.php");
$output=[
    "f1"=>[],
    "f2"=>[],
    "f3"=>[],
];
$sql = "select * from xz_index_product where seq_recommended>0 order by seq_recommended limit 6;";
$output["f1"] = sql_execute($sql);

$sql = "select * from xz_index_product where seq_new_arrival>0 order by seq_new_arrival limit 6;";
$output["f2"] = sql_execute($sql);

$sql = "select * from xz_index_product where seq_top_sale>0 order by seq_top_sale limit 6;";
$output["f3"] = sql_execute($sql);
echo json_encode($output);