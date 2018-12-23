<?php
  header("Content-Type:application/xml");
  $str = "<?xml version='1.0' encoding='utf-8'?>";
  $str .= "<list>";
    $str .= "<stu>";
      $str .= "<name>卡卡西</name>";
      $str .= "<gender>男</gender>";
      $str .= "<age>30</age>";
    $str .= "</stu>";
  $str .= "</list>";
  echo $str;
?>