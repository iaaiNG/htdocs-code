<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/10
 * Time: 16:39
 */
$pid = "440182199412180927";
$birth = substr($pid,6,8);
echo $birth;
$gender = substr($pid,-2,1)%2==0?"female":"male";
echo $gender;