import React from 'react';
import {Button, Text, View} from "react-native";

export class ChatList extends React.Component {

    static navigationOptions = {
        title: 'Chat List',
    };

    constructor(props) {

        super(props);
    }

    render() {

        let {navigate} = this.props.navigation;

        return (
            <View style={styles.root}>
                <Text style={styles.text}>IM CHAT LIST!</Text>
                <Button title='TO CHAT' onPress={() => navigate('Chat')}/>
            </View>
        )
    }
}

let styles = {
    root: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
};