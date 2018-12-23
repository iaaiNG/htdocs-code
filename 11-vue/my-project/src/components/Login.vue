<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="animate form login_form">
        <section class="login_content">
          <form>
            <h1>管理员登录</h1>
            <div>
              <input type="text" class="form-control" placeholder="管理员登录名" required v-model="uname"/>
            </div>
            <div>
              <input type="password" class="form-control" placeholder="管理员登录密码" required  v-model="upwd"/>
            </div>
            <div>
              <a class="btn btn-default submit" @click="sendData">&nbsp;登&nbsp;录&nbsp;</a>
            </div>
            <div class="clearfix"></div>
            <div class="separator">
              <div class="clearfix"></div>
              <br />
              <div>
                <h1><img src="../assets/img/favicon.png" /> 学子商城后台管理系统</h1>
                <p>©2017 版权所有，CODEBOY.COM</p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      uname:"dingding",
      upwd:123456,
    }
  },
  methods:{
    sendData(){
      this.$http.get(`http://localhost/01_login.php?uname=${this.uname}&upwd=${this.upwd}`).then(
        function(data){
          data.body.code>0 ? this.$router.push("/productlist") : alert(data.body.msg)
        }
      )
    }
  }
}
</script>


