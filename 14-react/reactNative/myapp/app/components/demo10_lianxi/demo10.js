import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, Button, TextInput } from 'react-native';

export default class Demo10Component extends Component {
    // componentDidMount() {
    //     this.list = ["红楼梦", '三国演义', '西游记', '水浒传']

    // }
    // showList(info) {
    //     return <TouchableOpacity>
    //         <Text style={{ fontSize: 10 }}>{info.item}</Text>
    //     </TouchableOpacity>
    // }
    // render() {
    //     return <View style={{ height: 200 }}>
    //         <FlatList data={this.list} renderItem={this.showList}></FlatList>
    //     </View>
    // // }


    loadList(){
        fetch('http://192.168.1.101/list.php').then((response)=>{return response.json()})
        .then((response)=>{
            console.log(response)
            return response
        })
    }
    render() {
        return <View>
            <Text style={{fontSize:30}}>iaaiNG</Text>
            <Button onPress={this.loadList} title="LoadMore"></Button>
        </View>
    }


    // constructor() {
    //     super()
    //     this.state = {
    //         val: "123"
    //     }
    // }
    // handleChange = (info) => {
    //     console.log(info)
    //     this.setState({ val: info })
    // }
    // render() {
    //     return <View>
    //         <TextInput
    //             value={this.state.val}
    //             placeholder="请输入用户名"
    //             onChangeText={this.handleChange}
    //         />
    //         <TextInput
    //             keyboardType="number-pad"
    //             placeholder="请输入密码"
    //             textContentType="password"
    //         />
    //     </View>
    // }
}