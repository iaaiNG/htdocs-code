import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, Button, TextInput } from 'react-native';

export default class ToDoItemComponent extends Component {
    handleForDel= ()=>{
        this.props.func(this.props.index)
    }
    render() {
        return <View>
            <Button title="Delete" color="red" onPress={this.handleForDel}/>
            <Text style={{fontSize:30}}>{this.props.value}</Text>
        </View>
    }
}