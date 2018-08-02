import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Home, ChatList, Chat, NewChat} from './screens'

let myStack = createStackNavigator({
    ChatList: {
        screen: ChatList
    },
    Chat: {
        screen: Chat
    }
});

let MyApp = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    ChatList: {
        screen: myStack
    },
    NewChat: {
        screen: NewChat
    }
});

export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.root}>
                <MyApp/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});
