import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Button,
    Navigator,
    View
} from 'react-native';
import MainScene from './MainScene';


export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Navigator
                initialRoute={{title: 'My Initial Scene', index: 0, component: MainScene}}
                renderScene={(route, navigator) => {
                    return <route.component  {...route} {...route.passProps} navigator={navigator}/>
                }}
            />
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
    tab_icon: {
        width: 32,
        height: 32,
    }
});
