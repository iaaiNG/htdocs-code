import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";

export default class ProductListComponent extends Component {
    constructor() {
        super()
        this.state = {
            productList: []
        }
    }
    componentWillMount() {
        fetch('http://192.168.1.101/ajia_code/ajia_code/data/product/list.php')
            .then((response) => response.json())
            .then((response) => {
                var list = response.data
                for(var i=0;i<list.length;i++){
                    list[i].key = i
                }
                this.setState({ productList: response.data })
            })
    }
    handlePress = (msg) => {
        alert("商品销量:" + msg)
    }
    handleRender = (info) => {
        let uri = 'http://192.168.1.101/ajia_code/ajia_code/' + info.item.pic
        return <TouchableOpacity
            onPress={() => this.handlePress(info.item.sold_count)}
            style={{ flexDirection: 'row', margin: 5, padding: 10, borderBottomWidth: 1, borderBottomColor: "gray"}}>
            <Image style={{ width: 60, height: 60, borderRadius: 30, }} source={{ uri: uri }} />
            <Text style={{ flex: 1, marginLeft: 20 }}>{info.item.title}</Text>
        </TouchableOpacity>
    }
    render() {
        return <ScrollView>
            {this.state.productList.length > 0 && <FlatList
                data={this.state.productList}
                renderItem={this.handleRender}
            ></FlatList>}
        </ScrollView>
    }
}