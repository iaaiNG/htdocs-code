import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Demo11Component extends Component {
    render = () => {
        return <View>
            <View style={{ alignItems: "center", height: 100, backgroundColor: "#c6c6f6" }}>
                <Text>ClickMe</Text>
            </View>
            <View style={{ justifyContent: "center", height: 100, backgroundColor: "#6f6", }}>
                <Text>ClickMe</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", height: 100, backgroundColor: "#c6c6f6", }}>
                <Text>ClickMe</Text>
            </View>
        </View>

    }
}