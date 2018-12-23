import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class Demo09Component extends Component {
    constructor() {
        super()
        this.state = {
            myList: [100, 200, 300]
        }
    }
    render =  () => {
        return <TouchableOpacity>
            <Text>ClickMe</Text>
            </TouchableOpacity>
    }
}