import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default class Deom05Component extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handlePress = ()=>{
        console.log("btn is click")
        var num = this.state.count
        num++
        this.setState({count:num})
    }
    render() {
        return <View>
            <Text>{this.state.count}</Text>
            <Button title="clickMe" onPress={this.handlePress}></Button>
        </View>

    }
}