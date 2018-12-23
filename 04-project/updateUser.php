<?php
  require('init.php');
  $uid = $_REQUEST['uid'];
  $sql = "select * from xz_user where uid=$uid;";
  $result = mysqli_query($conn,$sql);
  $str = mysqli_fetch_assoc($result);
?>

<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <form action='updateUserTrue.php' method="post">
      <p>
        用户名称：<input type='text' value='<?php echo $str['uname'];?>' disabled>
      </p>
      <p>
        登录密码：<input type='password' value='<?php echo $str['upwd'];?>' name='upwd'>
      </p>
      <p>
        电子邮件：<input type='email' value='<?php echo $str['email'];?>' name='email'>
      </p>
      <p>
        联系方式：<input type='text' value='<?php echo $str['phone'];?>' name='phone'>
      </p>
      <p>
        用户姓名：<input type='text' value='<?php echo $str['user_name'];?>' name='user_name'>
      </p>
      <p>用户性别：
        <select name='gender'>
          <option value='0' 
            <?php 
              if($str['gender']==0){
                echo "selected";
              }
            ?>
          >男</option>
          <option value='1'
            <?php 
              if($str['gender']==1){
                echo "selected";
              }
            ?>
          >女</option>
        </select>
      </p>
      <p>
        <input type="hidden" name="uid" value="<?php echo $uid;?>">
      </p>
      <input type='submit' value="修改">
    </form>
  </body>
</html>