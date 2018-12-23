import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class ListComponent extends Component {
    constructor() {
        super()
        this.state = {
            list: [10, 20, 30]
        }
    }
    handlePress = () => {
        this.props.navigation.navigate('MyDetail',{msg:"iaaiNG"})
    }
    showItem = (info) => {
        return <Text style={{ fontSize: 50 }} onPress={this.handlePress}>{info.item}</Text>
    }
    render() {
        return <FlatList
            data={this.state.list}
            renderItem={this.showItem} />

    }
}