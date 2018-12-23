import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Demo06Component
    extends Component {
    //在构造函数中 去初始化一个状态
    constructor() {
        super();
        this.state = {
            opacityValue: 0.5
        }
    }

    componentDidMount() {
        //启动定时器 修改透明度中的值
        setInterval(() => {
            var nowValue =
                this.state.opacityValue;
            nowValue += 0.1;
            if (nowValue > 1) {
                nowValue = 0;
            }
            this.setState({ opacityValue: nowValue });
        }, 100)
    }
    render() {
        return <Text
            style={{ opacity: this.state.opacityValue,fontSize:50 }}>
            Hello World!
        </Text>
    }
}