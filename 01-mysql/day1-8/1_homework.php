<?php
/*
创建一个数组，保存一个笔记本商品信息，包括编号、图片、标题、购买数量、是否特价；输出其中的每个元素值；
*/
$row0 = ['lid'=>101, 'pic'=>'img/101.jpg', 'buyCount'=>2, 'isOnsale'=>true];

#echo $row0;   //运行错误
#echo $row0[lid];  //运行错误！ 没有写单引号
#echo $row0['lid'];  //正确！
#echo "产品编号：$row0['lid']";  //运行错误！
#echo "产品编号：$row0[lid]";  //正确！
echo "产品编号：$row0[lid]  图片：$row0[pic]  购买数量：$row0[buyCount]  是否特价：$row0[isOnsale] <br>";

/*
创建一个数组，保存一个笔记本商品信息，包括编号、图片、标题、购买数量、是否特价；输出其中的每个元素值；
*/
$row1 = ['lid'=>502, 'pic'=>'img/502.jpg', 'buyCount'=>1, 'isOnsale'=>false];

echo "产品编号：$row1[lid]  图片：$row1[pic]  购买数量：$row1[buyCount]  是否特价：$row1[isOnsale] <br>";

/*
创建一个数组，保存一个笔记本商品信息，包括编号、图片、标题、购买数量、是否特价；输出其中的每个元素值；
*/
$row2 = ['lid'=>719, 'pic'=>'img/719.jpg', 'buyCount'=>5, 'isOnsale'=>true];

echo "产品编号：$row2[lid]  图片：$row2[pic]  购买数量：$row2[buyCount]  是否特价：$row2[isOnsale] <br>";


echo "<hr>";
/*
再创建一个大的数组，其中保存上述三个小数组；使用循环遍历出每个商品的信息。  $laptopList = [  [],[],[]  ];
*/
$laptopList = [  $row0,  $row1,  $row2 ];
#var_dump($laptopList);  大的索引数组，其中包含着3个小的关联数组
 //使用for循环遍历大的索引数组
for($i=0; $i<count($laptopList); $i++){  
	$row = $laptopList[$i]; //获取第i行/小的关联数组
	echo "编号：$row[lid] 图片：$row[pic] 数量：$row[buyCount] 是否特价：$row[isOnsale] <br>";
}
/*
练习：创建一个二维数组，保存3个员工的信息，每个员工都有编号、姓名、工资、生日、是否在岗等属性，输出所有数据
*/