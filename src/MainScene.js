import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    Navigator,
    View
} from 'react-native';
import TabNavigatorDemo from './component/TabNavigatorDemo';

export default class MainScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToTabBar = () => {
        this.props.navigator.push({
            component: TabNavigatorDemo,
            scene: Navigator.SceneConfigs.FadeAndroid,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touch} onPress={this.goToTabBar}>
                    <Text style={styles.touch_text}>Go To TabNavigatorDemo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.touch_text}>Go To ScrollTabDemo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.touch_text}>Go To DrawerPage</Text>
                </TouchableOpacity>
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
    touch: {
        backgroundColor: '#DE0D7B',
        width: 240,
        marginTop: 24,
        borderRadius: 5,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        paddingTop: 12,

    },
    touch_text: {
        color: '#FFFFFF',
    }
});
