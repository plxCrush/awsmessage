import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Home, ChatList, Chat, NewChat} from './screens'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

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

class App extends Component<Props> {

    render() {
        return (
            <View style={styles.root}>
                <MyApp/>
            </View>
        );
    }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
