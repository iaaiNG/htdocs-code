<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <my-header></my-header>
    <router-view />

    <div class="footer">
      <div class="container">
        <div class="f_con clearfloat">
          <ul>
            <li>
              <h3>走进海目星</h3>
              <a href="">公司简介</a>
              <a href="">海目星精神</a>
              <a href="">品牌历程</a>
            </li>
            <li>
              <h3>成为合作伙伴</h3>
              <a href="">成为核心供应商</a>
              <a href="">电商经销入口</a>
              <a href="">成为线下代理商</a>
            </li>
            <li>
              <h3>售后服务</h3>
              <a href="">在线报修</a>
              <a href="">售后政策</a>
              <a href="">下载中心</a>
            </li>
            <li>
              <h3>加入海目星</h3>
              <a href="">招聘贤才</a>
              <a href="">联系我们</a>
              <a href="">网站地图</a>
            </li>
          </ul>
          <span class="qrcode"></span>
          <div class="kefu">
            <h4>4000-585-116</h4>
            <span>周一至周日9:00-18:00</span>
            <a href="#">金 牌 客 服</a>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2018 深圳市海目星激光智能装备股份有限公司 All rights reserved 粤ICP备18103171号-1 中企动力提
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
    name: "App",
    components:{
      "my-header":Header
    }
};
</script>
