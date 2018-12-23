<?php
header("Access-Control-Allow-Origin:*");
    require_once("00_init.php");
    @$pageSize = $_REQUEST["pageSize"];
    if(!$pageSize)$pageSize=10;
    @$offset = $_REQUEST["offset"];
    if(!$offset)$offset=0;

    @$low = $_REQUEST["low"];
    if(!$low) $low = 0;
    $req = "where price>$low ";

    @$high = $_REQUEST["high"];
    if($high != ""){
            $req .= "and price<$high ";
        }

    @$kw = $_REQUEST["kw"];
    if(preg_replace('/[ ]/', '', $kw)!=''){
        $kw = trim($kw);
        $kw = explode(" ", $kw);
        foreach($kw as $val){
            $req .= "and title like '%$val%' ";
        }
    }

    $output = [
        "data"=>[],
        "count"=>[],
        "sql"=>[]
    ];
    $sql = "select lid from xz_laptop ".$req;
    $result = mysqli_query($conn,$sql);
    $all = mysqli_fetch_all($result,1);
    $output["count"] = count($all);
    $sql = "select lid,title,os,category,price,spec,expire,sold_count,(select xz_laptop_family.name from xz_laptop_family where family_id=fid) as name,(select sm from xz_laptop_pic where laptop_id=lid limit 1) as pic from xz_laptop ".$req."order by lid asc limit $offset,$pageSize;";
    $result = mysqli_query($conn,$sql);
    $all = mysqli_fetch_all($result,1);
    $output["sql"] = $sql;
    if($all){
        $output["data"] = $all;

        echo json_encode($output);
    }
    else
        echo json_encode($output);