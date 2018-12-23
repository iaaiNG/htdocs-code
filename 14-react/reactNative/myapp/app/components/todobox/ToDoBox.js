import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, Button, TextInput } from 'react-native';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default class ToDoBoxComponent extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    handleAdd = (msg) => {
        let arr = this.state.list
        arr.push(msg)
        this.setState({ list: arr })
    }
    handleDel = (index) => {
        let arr = this.state.list
        arr.splice(index,1)
        this.setState({ list: arr })
    }
    render() {
        return <View>
            <ToDoInput func={this.handleAdd} />
            <ToDoList listData={this.state.list} func={this.handleDel}/>
        </View>
    }
}