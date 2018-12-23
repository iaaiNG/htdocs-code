import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, Button, TextInput } from 'react-native';

export default class ToDoInputComponent extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleForAdd = () => {
        this.props.func(this.state.value)
        this.setState({ value: '' })
    }
    handleTextChange = (info) => {
        this.setState({ value: info })
    }
    render() {
        return <View>
            <Text style={{ fontSize: 20 }}>待完成事项</Text>
            <TextInput style={{ width: 250, height: 50 }} value={this.state.value} onChangeText={this.handleTextChange} />
            <Button title="Add" onPress={this.handleForAdd} />
        </View>
    }
}