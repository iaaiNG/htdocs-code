<?php
  header("Content-Type:application/json");
  @$pro = $_REQUEST['province'];
  $provinces = ['黑龙江','吉林','辽宁'];
  $cities = [
		["哈尔滨","齐齐哈尔","牡丹江"],
		["长春","吉林","四平"],
		["沈阳","大连","鞍山"]
	];
  $str1 = json_encode($provinces);
  $str2 = json_encode($cities);
  if($pro==1){
      echo $str1;
    }else{
      echo $str2;
    };
?>