import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Deom04Component extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("OK啦啦啦啦啦")
    }
    render() {
        return <Text>{this.state.count == 0 ? 'iaaiNG' : this.state.count}</Text>

    }
}