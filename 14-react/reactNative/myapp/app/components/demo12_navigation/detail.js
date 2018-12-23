import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class DetailComponent extends Component {
    handleback = ()=>{
        this.props.navigation.goBack()
    }
    render() {
        return <Text onPress={this.handleback} style={{fontSize:40}}>
        这是详情页{this.props.navigation.state.params.msg}</Text>
    }
}