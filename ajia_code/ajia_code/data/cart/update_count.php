<?php
/**
* 修改购物车条目中的购买数量
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');

@$cid = $_REQUEST['cid'] or die('{"code":401,"msg":"iid required"}');
@$count = $_REQUEST['count'] or die('{"code":402,"msg":"count required"}');

session_start();
if(! @$_SESSION['loginUid']){
  die('{"code":300, "msg":"login required"}');
}

$sql = "UPDATE xz_shopping_cart SET count=$count WHERE cid=$cid";
$result = mysqli_query($conn, $sql);
if($result){
  echo '{"code":200, "msg":"update succ"}';
}else {
  echo '{"code":500, "msg":"update err"}';
}
