<?php
header("Content-Type:application/json");
require_once("./init.php");
@$kw=$_REQUEST["term"];
$sql="SELECT title as label FROM xz_laptop";
if($kw){
    $kws=explode(" ",$kw);
    $kwSql=" WHERE ";
    for($i=0;$i<count($kws);$i++){
        $kws[$i] = str_replace("'", "", $kws[$i]);
        $kwSql.="title like '%".$kws[$i]."%' ";
        if($i!=count($kws)-1)
            $kwSql.="and ";
    }
    $sql=$sql.$kwSql;
}
$sql=$sql." limit 10";
echo json_encode(sql_execute($sql));