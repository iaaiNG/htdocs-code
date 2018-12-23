import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class CheckComponent extends Component {
    constructor() {
        super()
        this.state = {
            price: 100
        }
    }
    handlePress = () => {
        this.props.navigation.navigate('Pay', { price: this.state.price })
    }
    render() {
        return <View>
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={{ fontSize: 30 }} >Mac 笔记本电脑</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
                < ActivityIndicator></ActivityIndicator>
                <Text>Loading</Text>
            </View>
        </View>
    }
}