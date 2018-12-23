<?php
  header("Content-Type:application/json");
  require('init.php');
  @$pageSize = $_REQUEST['pageSize'];
  if($pageSize==NULL){
      $pageSize=10;   
  }
  @$currentPage = $_REQUEST['currentPage'];
  if($currentPage==NULL){
      $currentPage=1;   
  }
  $start = ($currentPage-1)*$pageSize;
  $sql = "select * from xz_user limit $start,$pageSize;";
  $result = mysqli_query($conn,$sql);
  $array = mysqli_fetch_all($result,1);
  
  #上一页
  if($currentPage==1){
    $prePage=1;
  }else{
    $prePage = $currentPage-1;
  }
  #尾页
  $result = mysqli_query($conn,"select count(*) from xz_user;"); 
  $total = mysqli_fetch_assoc($result)['count(*)'];
  $lastPage = ceil($total/$pageSize);
  #下一页
  if($currentPage==$lastPage){
    $nextPage=$lastPage;
  }else{
    $nextPage = $currentPage+1;
  }
  
  #将分页数据追加到查询到的数据后面：
  $msg = "{\"firstPage\":1,\"prePage\":$prePage,\"nextPage\":$nextPage,\"totalPage\":$total,\"lastPage\":$lastPage,\"currentPage\":$currentPage}";
  Array_push($array,$msg);
  echo json_encode($array);
?>
