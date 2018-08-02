import React from 'react';
import {Text, View} from "react-native";

export class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <View style={styles.root}>
                <Text style={styles.text}>IM HOME!</Text>
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