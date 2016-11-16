import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabTitle from '../TabTitle';
export default class PageOne extends Component {
    render() {
        return (
            < View style={styles.container}>
                <TabTitle title="Page One"/>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'green',}}>Page One</Text>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
