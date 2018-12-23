import React, { Component } from "react";
import { View, Button, Image, TextInput, Text } from "react-native";

export default class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {
            uname: '',
            upwd: '',
            prompt: "none"
        }
    }
    handleUserNameChange = (info) => { this.setState({ uname: info }) }
    handlePasswordChange = (info) => { this.setState({ upwd: info }) }
    handlePress = () => {
        var url = 'http://192.168.1.101/ajia_code/ajia_code/data/user/login.php?uname='
        url += this.state.uname + '&upwd=' + this.state.upwd
        fetch(url).then((response) => { return response.json() }).then((response) => {
            console.log(response)
            if (response.code == 200) {
                this.props.navigation.navigate('Main')
            } else {
                this.setState({ prompt: "flex" })
                var count = 0
                var timer = setInterval(() => {
                    if (count > 3) {
                        this.setState({ prompt: "none" })
                        clearInterval(timer)
                        timer = null
                    } else {
                        console.log(count)
                        count++
                    }
                }, 1000)
            }
        })

    }
    render() {
        return <View>
            <View style={{
                alignItems: "center", justifyContent: "space-around",
                backgroundColor: "red", height: 30, display: this.state.prompt
            }}>
                <Text>用户名或密码有误，请重新输入</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Image style={{ borderRadius: 128 / 2 }} source={require('../../img/img.jpg')}></Image>
            </View>
            <View style={{ height: 100, justifyContent: "space-around" }}>
                <TextInput onChangeText={this.handleUserNameChange} value={this.state.uname} placeholder="请输入用户名" />
                <TextInput onChangeText={this.handlePasswordChange} value={this.state.upwd} secureTextEntry placeholder="请输入密码" />
            </View>
            <Button title="登录" onPress={this.handlePress} />
        </View>
    }
}