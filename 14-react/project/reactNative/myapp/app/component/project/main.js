import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class MainComponent extends Component {
    handlePress =()=>{
        this.props.navigation.navigate('PdList')
    }
    render() {
        return <View>
            <View style={MyStyle.rowView}>
                <View style={MyStyle.rowLeftView}>
                    <Text style={MyStyle.myText}>200</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                <View style={MyStyle.rowRightView}>
                    <Text style={MyStyle.myText2}>230</Text>
                    <Text>当日PC端PV量</Text>
                </View>
            </View>
            <View style={MyStyle.rowView}>
                <View style={MyStyle.rowLeftView}>
                    <Text style={MyStyle.myText}>1020</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                <View style={MyStyle.rowRightView}>
                    <Text style={MyStyle.myText2}>2390</Text>
                    <Text>当日PC端PV量</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", flexWrap: "wrap" }}>
                <View style={MyStyle.underView}>
                    <TouchableOpacity>
                        <Image style={{ width: 80, height: 80 }} source={require('../../img/order.png')}></Image>
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                </View>
                <View style={MyStyle.underView}>
                    <TouchableOpacity>
                        <Image style={{ width: 80, height: 80 }} source={require('../../img/user.png')}></Image>
                        <Text>用户管理</Text>
                    </TouchableOpacity>
                </View>
                <View style={MyStyle.underView}>
                    <TouchableOpacity onPress={this.handlePress}>
                        <Image style={{ width: 80, height: 80 }} source={require('../../img/product.png')}></Image>
                        <Text>商品管理</Text>
                    </TouchableOpacity>
                </View>
                <View style={MyStyle.underView}>
                    <TouchableOpacity>
                        <Image style={{ width: 80, height: 80 }} source={require('../../img/setting.png')}></Image>
                        <Text>设置</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }
}
const MyStyle = StyleSheet.create({
    rowLeftView: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        height: 100,
        backgroundColor: "#AFDEE4",
        marginRight: 3,
        marginBottom: 5
    },
    rowRightView: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        height: 100,
        backgroundColor: "#AFDEE4",
        marginLeft: 3,
        marginBottom: 5
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    underView: {
        justifyContent: "center",
        alignItems: "center",
        width: 180,
        height: 160,
        backgroundColor: "#AFDEE4",
    },
    myText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
    myText2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
    }
})