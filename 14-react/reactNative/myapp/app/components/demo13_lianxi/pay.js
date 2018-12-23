import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class PayComponent extends Component {
    render() {
        return <TouchableOpacity>
            <Text>{this.props.navigation.state.params.price}</Text>
            {[<Text>1</Text>, <Text>jkm</Text>, <Text>asdas</Text>]}
        </TouchableOpacity>
    }
}