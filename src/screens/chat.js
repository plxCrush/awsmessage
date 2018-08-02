import React from 'react';
import {Text, View} from "react-native";

export class Chat extends React.Component {

    static navigationOptions = {
        title: 'Chat',
    };

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <View style={styles.root}>
                <Text style={styles.text}>IM CHAT!</Text>
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