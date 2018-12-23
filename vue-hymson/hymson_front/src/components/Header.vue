<template>
    <header id="header">
        <div class="header">
            <div class="txt1">
                <span>海目星---激光&自动化综合解决方案提供商</span>
                <ul>
                    <li><img src="../assets/images/website.png"><a href="#"> 中文 | ENGLISH</a></li>
                    <li><img src="../assets/images/tel.png"><a href="#"> 4888-0-05-7</a></li>
                    <li id="getUname">
                        <router-link to="/login">登录</router-link> | <a href="#">注册</a>
                    </li>
                </ul>
            </div>
            <!--nav-->
            <div class="txt2">
                <img src="../assets/images/logo.png">
                <input id="prdSelect" type="text" placeholder="产品搜索 (如：自动)" style="margin-left:30px;width: 200px;height:30px;padding: 0 30px">
                <ul id="nav">
                    <li>
                        <router-link to="/index">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/about">关于我们</router-link>
                        <ul>
                            <li><a href="#">企业介绍</a></li>
                            <li><a href="#">企业文化</a></li>
                            <li><a href="#">发展历程</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/products">产品服务</router-link>
                        <ul>
                            <li><a href="#">动力电磁智能制造</a></li>
                            <li><a href="#">大功率激光切割</a></li>
                            <li><a href="#">通用激光及自动化</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/news">新闻动态</router-link>
                        <ul>
                            <li><a href="#">企业新闻</a></li>
                            <li><a href="#">事件与活动</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">联系我们</a>
                        <ul>
                            <li><a href="#">联系方式</a></li>
                            <li><a href="#">在线留言</a></li>
                            <li><a href="#">招贤纳士</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height: 130px"></div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            uname : sessionStorage.uname
        };
    },
    updated(){
        console.log(this.uname)
    },
    mounted() {
        if (sessionStorage.uname) {
            $("#getUname").html(
                "欢迎：" + sessionStorage.uname + '&nbsp&nbsp<a href="#">[ 安全退出 ]</a>'
            );
            $("#getUname a").click(() => {
                sessionStorage.removeItem("uname");
                sessionStorage.removeItem("uid");
                $("#getUname").html(
                    '<a href="#/login">登录</a> | <a href="#">注册</a>'
                );
            });
        }
        // if (sessionStorage.uname) {
        //     $("#getUname").html(
        //         "欢迎：" + sessionStorage.uname + '&nbsp&nbsp<a href="#">[ 安全退出 ]</a>'
        //     );
        //     $("#getUname a").click(() => {
        //         sessionStorage.removeItem("uname");
        //         sessionStorage.removeItem("uid");
        //         $("#getUname").html(
        //             '<router-link to="/login">登录</router-link> | <a href="#">注册</a>'
        //         );
        //     });
        // }

        var $list = $("#nav>li>ul");
        $list.parent().hover(
            e => {
                $(e.target)
                    .find("ul")
                    .addClass("showList");
            },
            () => {
                $list.removeClass("showList");
            }
        );
    }
};
</script>

