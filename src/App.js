import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Home, ChatList, Chat, NewChat} from './screens'
import Amplify, {Auth} from 'aws-amplify';
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
    }},
    {
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    }
});

class App extends Component<Props> {

    render() {
        return (
            <View style={styles.root}>
                <MyApp/>
                <Button style={styles.logout}
                        title='Logout'
                        onPress={() => Auth.signOut()}/>
            </View>
        );
    }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    logout: {
        alignSelf: 'flex-end'
    }
});
