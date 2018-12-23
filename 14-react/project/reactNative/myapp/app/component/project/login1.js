import React, { Component } from 'react';
import {
    View, Text,
    ActivityIndicator,
    TextInput, Image, Button
} from 'react-native';

export default class LoginComponent
    extends Component {

    constructor() {
        super();
        this.state = {
            uName: '',
            uPwd: '',
            isLoadingShow: false
        };
    }

    jump = (path) => {
        this.props.navigation.navigate(path);
    }

    handlePress = () => {
        // 获取用户名和密码
        // console.log(this.state);

        // 修改状态中isLoadingShow, 能够显示加载中的窗口
        // this.setState({ isLoadingShow: true });
        // count = 0;
        // timer = setInterval(() => {
        //     console.log('count is ' + count);
        //     // 发起网络请求
        //     // 准备工作：启动apache和mysql
        //     count++;
        //     if (count > 3) {
        // clearInterval(timer);
        fetch('http://192.168.1.101/ajia_code/ajia_code/data/user/login.php?uname=' +
            this.state.uName + "&upwd=" + this.state.uPwd)
            .then((response) => { return response.json() })
            .then((response) => {
                console.log(response);
                if (response.code == 200) {
                    //隐藏加载中
                    this.setState({ isLoadingShow: false });
                    //登录成功，跳转到main
                    this.jump('myMain');
                }
            })

        //     }
        // }, 0);


    }

    handleChangeName = (msg) => {
        //修改状态
        this.setState({ uName: msg });
    }

    handleChangePwd = (msg) => {
        //修改状态
        this.setState({ uPwd: msg });
    }

    render() {
        return <View>
            <Image
                style={{ alignSelf: 'center', width: 80, height: 80, borderRadius: 40 }}
                source={require('../../img/img.jpg')}></Image>
            <TextInput
                onChangeText={this.handleChangeName}
                placeholder="用户名">
                
            </TextInput>
            <TextInput
                onChangeText={this.handleChangePwd}
                secureTextEntry={true}
                placeholder="密码">
            </TextInput>
            <Button
                onPress={this.handlePress}
                title="登录">
            </Button>
            <View>
                {
                    this.state.isLoadingShow
                    &&
                    <View style={{ alignItems: 'center' }}>
                        <ActivityIndicator></ActivityIndicator>
                        <Text>loading...</Text>
                    </View>
                }
            </View>
        </View>
    }

}