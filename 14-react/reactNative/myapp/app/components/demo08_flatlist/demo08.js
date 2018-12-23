import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

export default class Demo08Component extends Component {
    constructor() {
        super()
        this.state = {
            myList: [100, 200, 300]
        }
    }
    handlePress(i){
        alert("我是第"+i+"个")
    }
    showItems = (info) => {
        return <Text style={{marginTop:10}} onPress={()=>this.handlePress(info.index)}>{info.item+"   "+info.index}</Text>
    }
    render =  () => {
        return <View style={{height:180}}>
        <FlatList
                data={this.state.myList}
                renderItem={this.showItems}>
            </FlatList>
            </View>
    }
}