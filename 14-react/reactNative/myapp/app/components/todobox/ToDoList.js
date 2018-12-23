import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, Button, TextInput } from 'react-native';
import ToDoItemComponent from './ToDoItem'

export default class ToDoListComponent extends Component {
    // showItem = (info) => { 
    //     console.log(this.props.listData)
    //     return <ToDoItemComponent value={info.item} index={info.index} func={this.props.func}/>
    // }
    render() {
        return <View>
            {
                this.props.listData.map((val,ind)=>{
                    return <ToDoItemComponent value={val} index={ind} func={this.props.func}/>
                })
            }
        </View>
        // return <FlatList data={this.props.listData} renderItem={this.showItem}/>
    }
}