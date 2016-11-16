import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    DrawerLayoutAndroid,
    View
} from 'react-native';

export default class DrawerPage extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
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
});
