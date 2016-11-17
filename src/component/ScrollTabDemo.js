import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
export default class ScrollTabDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView>
                    <PageOne/>
                    <PageTwo/>
                    <PageThree/>
                </ScrollableTabView>
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
