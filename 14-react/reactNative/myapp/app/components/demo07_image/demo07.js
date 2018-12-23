import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

export default class Demo07Component extends Component {

    render() {
        return <View>
            {/* <Image source={require('../../img/1.jpg')}></Image> */}
            <Image 
            style={{width:200,height:200}} 
            source={{uri:'http://www.tattoo77.com/uploads/allimg/140515/12-140515123943642.jpg'}}></Image>
            <Image 
            style={{width:200,height:200}} 
            source={{uri:'http://192.168.1.101/ajia_code/ajia_code/img/404/404_img1.png'}}></Image>
        </View>
    }
}