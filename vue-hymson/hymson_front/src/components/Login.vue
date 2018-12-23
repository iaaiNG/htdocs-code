<template>
  <div class="login_bg">
    <div>
      <img src="../assets/images//login/logo.jpg" alt="">
    </div>
    <div class="login_form">
      <form action="#" id="form-login">
        <table>
          <tr>
            <td><img src="../assets/images//login/pic.gif" alt=""></td>
          </tr>
          <tr><td><p id="errMsg" class="err">无效的用户名或密码</p></td></tr>
          <tr>
            <td><p class="text1">A8-V5集团版 （并发数：500）</p></td>
          </tr>
          <tr><td><div>
            <input name="uname" type="text" placeholder="用户名" v-model="uname">
          </div></td></tr>
          <tr><td><div>
            <input name="upwd" type="password" placeholder="密码" v-model="upwd">
          </div></td></tr>
          <tr><td>
            <a id="bt-login" @click="toLogin()">登 录</a>
          </td></tr>
          <tr><td>
            <p class="miss">找回密码？</p>
            <span>注册</span>
          </td></tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data(){
      return {
        uname:'test',
        upwd:'123456'
      }
    },
    methods: {
        toLogin() {
            let url = "http://103.80.28.227:3005/user/login"
            this.$http.post(url,{uname:this.uname,upwd:this.upwd},{emulateJSON: true})
            .then(function(res) {
              this.data = res.body;
              if(this.data.code == 200){
                sessionStorage.uname = this.data.data.uname
                sessionStorage.upwd = this.data.data.upwd
                this.$router.push("/index");
                location.reload()
              }
            });
        }
    },
    mounted(){
      $("body,html")
                    .stop(true)
                    .animate({ scrollTop: 580 }, 500);
    }
};
</script>

