/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Demo01Component from './app/components/demo_first/demo01';
// import Demo02Component from './app/components/demo_view/demo02';
// import Demo03Component from './app/components/demo03_stylesheet/demo03';
// import Demo04Component from './app/components/demo04_state/demo04';
// import Demo05Component from './app/components/demo05_button/demo05';
// import Demo06Component from './app/components/demo06_lianxi/demo06';
// import Demo07Component from './app/components/demo07_image/demo07';
// import Demo08Component from './app/components/demo08_flatlist/demo08';
// import Demo09Component from './app/components/demo09_to/demo09';
import Demo10Component from './app/components/demo10_lianxi/demo10';
import Demo11Component from './app/components/demo11_flexbox/demo11';
import ToDuBoxComonpent from './app/components/todobox/ToDoBox';
import { StackNavigator } from 'react-navigation';
import ListComponent from './app/components/demo12_navigation/list';
import DetailComponent from './app/components/demo12_navigation/detail';
import CheckComponent from './app/components/demo13_lianxi/check';
import PayComponent from './app/components/demo13_lianxi/pay';

const MyNavigator = StackNavigator({
  Check: {
    screen: CheckComponent,
    navigationOptions: () => {
      return {
        headerTitle: '商品查看页面',
        // headerTitleStyle: { alignSelf: 'center' }
      }
    }
  },
  Pay: {
    screen: PayComponent,
    navigationOptions: () => {
      return {
        headerTitle: '商品支付页面',
        headerLeft: null,
        headerTitleStyle:
          { alignSelf: 'center' }
      }
    }
  },
  MyList: {
    screen: ListComponent
  },
  MyDetail: {
    screen: DetailComponent
  }
})

export default class myapp extends Component {
  render() {
    return (
      // <ListComonpent/>
      // <ToDuBoxComonpent></ToDuBoxComonpent>
      // <View style={styles.container}>
      //   <Demo01Component></Demo01Component>
      //   <Demo02Component></Demo02Component> 
      //   <Demo03Component></Demo03Component>
      //   <Demo04Component></Demo04Component> */}
      <Demo10Component></Demo10Component>
      //   <Text style={styles.welcome}>
      //     欢迎来到 德莱联盟！
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);
