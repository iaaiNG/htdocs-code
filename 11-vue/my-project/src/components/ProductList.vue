<template>
  <div class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="main.html" class="site_title"><img src="../assets/img/favicon.png" alt="">&nbsp;&nbsp;<span>学子商城后台</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="../assets/img/user.png" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>欢迎回来,</span>
                <h2>超级管理员</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br/>

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a href="main.html"><i class="fa fa-home"></i>后台首页</a></li>
                </ul>
              </div>
              <div class="menu_section">
                <h3>数据管理</h3>
                <ul class="nav side-menu">
                  <li class="active"><a><i class="fa fa-laptop"></i> 商品管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="product_list.html">商品列表</a></li>
                      <li><a href="product_search.html">多条件搜索</a></li>
                      <li><a href="product_add.html">添加商品</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-user"></i> 用户管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="user_list.html">用户列表</a></li>
                      <li><a href="user_search.html">用户检索</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-shopping-cart"></i> 订单管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="order_list.html">订单列表</a></li>
                      <li><a href="order_search.html">搜素订单</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="menu_section">
                <h3>内容管理</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-life-ring"></i> 首页商品管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">轮播广告</a></li>
                      <li><a href="projects.html">首页推荐</a></li>
                      <li><a href="contacts.html">最新上架</a></li>
                      <li><a href="project_detail.html">热销单品</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-windows"></i> 功能页面 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="page_403.html">403错误页面</a></li>
                      <li><a href="page_404.html">404错误页面</a></li>
                      <li><a href="page_500.html">500错误页面</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="index.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="img/user.png">超级管理员
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> 基本信息 </a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>用户设置</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">使用说明</a></li>
                    <li><a href="index.html"><i class="fa fa-sign-out pull-right"></i> 退出登录</a></li>
                  </ul>
                </li>

                <li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a>
                        <span class="image"><img src="img/user.png" alt="Profile Image"/></span>
                        <span>
                          <span>新用户注册</span>
                          <span class="time">3分钟以前</span>
                        </span>
                        <span class="message">
                          用户编号：3，用户名：doudou，完成注册。通过官网“邮件注册”功能实现注册。
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="img/user.png" alt="Profile Image"/></span>
                        <span>
                          <span>用户下单</span>
                          <span class="time">10小时以前</span>
                        </span>
                        <span class="message">
                          用户编号：1，用户名：dingding，完成下单。系统中当有已有未处理订单37件。
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="img/user.png" alt="Profile Image"/></span>
                        <span>
                          <span>用户信息修改</span>
                          <span class="time">1天以前</span>
                        </span>
                        <span class="message">
                          用户编号：1，用户名：dingding，通过官网“用户设置”功能完成个人基础信息修改。
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="img/user.png" alt="Profile Image"/></span>
                        <span>
                          <span>新用户注册</span>
                          <span class="time">5天以前</span>
                        </span>
                        <span class="message">
                          用户编号：1，用户名：dingding，完成注册。通过官网“用户注册”功能实现注册。
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>查看所有消息</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="row">
            <div class="col-xs-12 x_title">
              <h3>笔记本商品列表</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3">
              <form class="form-inline">
                <div class="form-group">
                  <label for="page-size">每页显示记录数：</label>
                  <select class="form-control" id="page-size" v-model="pageSize" @change="loadPage">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60">60</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-xs-4 col-xs-offset-5">
              <div class="form-group has-feedback">
                <label for="product-kw" class="sr-only">搜索关键字：</label>
                <input class="form-control" type="text" id="product-kw" placeholder="请输入搜索关键字">
                <span class="glyphicon glyphicon-search form-control-feedback" ></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="table-responsive">
                <table class="table table-hover table-striped" id="table-laptop">
                  <thead>
                  <tr>
                    <th>
                      <div class="checkbox" style="margin: 0;">
                        <label>
                          <input type="checkbox">全选
                        </label>
                      </div>
                    </th>
                    <th>编号</th>
                    <th>图片</th>
                    <th>型号</th>
                    <th>主标题</th>
                    <th>规格</th>
                    <th>单价</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody @click.prevent="operation($event)">
                  <tr v-for="l in data" >
                    <td><input type="checkbox"></td>
                    <td>{{l.lid}}</td>
                    <td><img class="pic" :src="require('../assets/'+l.pic)" alt="pic"></td>
                    <td><p class="fname" :title="l.name">{{l.name}}</p></td>
                    <td><p class="title" :title="l.title">{{l.title}}</p></td>
                    <td><p class="spec" :title="l.spec">{{l.spec}}</p></td>
                    <td><p class="pprice">￥{{l.price}}</p></td>
                    <td :data-id="l.lid" >
                      <a v-show="l.expire=='0'" :href="l.name+'_'+l.category+'_'+l.pricel+'_'+l.os" data-action="detail">详情</a>
                      <a v-show="l.expire=='0'" href="#"  data-action="update" :data-name="l.name">修改</a>
                      <a v-show="l.expire=='0'" href="#"  data-action="delete" :data-name="l.name">删除</a>
                    </td>
                  </tr>`
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <ul class="pagination pull-right" id="pagination">
                    <li @click.prevent="currentPage>1 && loadPage('',currentPage-1)"><a href="#">上一页</a></li>
                    <li v-for="i in len" :class="i==currentPage?'active':''" @click.prevent="loadPage('',i)"><a href="#">{{i}}</a></li>
                    <li @click.prevent="currentPage<len && loadPage('',currentPage+1)"><a href="#">下一页</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br>
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            学子商城 — 后台管理系统。 访问商城主页： <a href="http://www.codeboy.com/" target="_blank">学子商城</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>
    <div class="update-jumbotron" >
      <h1>更新商品价格</h1>
      <div>
        <ul>
          <li>
            商品名称:<span class="pname">apple mac</span>
          </li>
          <li>
            商品价格:<input type="text" class="input-price" value="0" v-model="pprice"/>
          </li>
          <li class="txt-btn">
            <a class="btn btn-primary btn-xs" data-action="update-ok" href="#" role="button">更新</a>
            <a class="btn btn-primary btn-xs" data-action="update-cancel" href="#" role="button">取消</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-jumbotron">
      <h1>商品详细信息</h1>
      <ul>
        <li>
          商品名称：<span class="pname">apple mac</span>
        </li>
        <li>
          商品类别：<span class="pcategory"></span>
        </li>
        <li>
          商品价格：<span class="pprice"></span>
        </li>
        <li>
          os：<span class="pos"></span>
        </li>
        <li class="txt-btn">
          <a class="btn btn-primary btn-xs" data-action="detail-cancel" href="#" role="button">关闭</a>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {return {
    data:[],
    len:0,
    pageSize:10,
    currentPage:1,
    visitId:"",
    pprice:0,
  }},
  methods:{
    loadPage(search, pno=1){
      var offset = (pno-1)*this.pageSize
      this.currentPage = pno
      var url = `http://localhost/09-html5/admin/admin/data/04_product_list.php?pageSize=${this.pageSize}&offset=${offset}`
      this.$http.get(url).then(
        function(data){
          this.data = data.body.data
          this.len = (Math.ceil((data.body.count/this.pageSize)))
        }
      )
    },
    operation(e){
      var $tar = $(e.target), $tds =$tar.parent().siblings()
      this.visitId = $tar.parent().data("id")
      var url = `http://localhost/09-html5/admin/admin/data/05_product_del.php`
      if($tar.is("[data-action=delete]") && confirm(`你确认要删除：${$tds.find(".fname").html()}的对应记录吗`))
        $.get(url, {lid:this.visitId})
      if($tar.is("[data-action=update]")){
        this.pprice = $tds.find(".pprice").html().slice(1)
        $(".update-jumbotron").show(500)
      }
      this.loadPage("", this.currentPage)
    }
  },
  mounted(){
    this.loadPage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  #table-laptop p {
    margin: 0;
  }
  #table-laptop td .title,
  #table-laptop td .fname,
  #table-laptop td .spec {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  #table-laptop td .title {
    width: 120px;
  }
  #table-laptop td .fname {
    width: 80px;
  }
  #table-laptop td .spec {
    width: 100px;
  }
  #table-laptop td .pic{
    width: 30px;
    vertical-align: middle;
    /*position: absolute;*/
    margin-top: -3px;
  }
  .expire{
    opacity: 0.2;
  }
</style>
