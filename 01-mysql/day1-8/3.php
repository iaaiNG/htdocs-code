<?php
  $i = 153;
  while($i<999){
    $ge = $i%10;
    $bian = $i/10;
    $shi = $bian%10;
    $bian /= 10;
    $bai = $bian%10;
    if($ge*$ge*$ge+$shi*$shi*$shi+$bai*$bai*$bai==$i){
      echo $i.',';
      };
    $i++;
    };
?>