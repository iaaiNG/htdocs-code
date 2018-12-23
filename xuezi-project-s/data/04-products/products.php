<?php
header("Content-Type:application/json");
require_once("../init.php");
$output=[
    "count"=>0,
    "pageSize"=>9,
    "pageCount"=>0,
    "pageNo"=>0,
    "data"=>[]
];
@$kw=$_REQUEST["kw"];
@$pno=$_REQUEST["pno"];
if(!$pno)$pno=0;
$sql="SELECT lid,title,price,(select md from xz_laptop_pic WHERE lid=laptop_id limit 1) as md FROM xz_laptop";
if($kw){
    $kws=explode(" ",$kw);
    $kwSql=" WHERE ";
    for($i=0;$i<count($kws);$i++){
        $kwSql.="title like '%".$kws[$i]."%' ";
        if($i!=count($kws)-1)
            $kwSql.="and ";
    }
    $sql=$sql.$kwSql;
}
$result = sql_execute($sql);
$output["count"]=count($result);
$sql=$sql." limit ".($pno*$output["pageSize"]).",".$output["pageSize"];
$result = sql_execute($sql);
$output["data"]=$result;
$output["pageCount"]=ceil($output["count"]/$output["pageSize"]);
$output["pageNo"]=$pno;
echo json_encode($output);