import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

export default class TabNavigatorDemo extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'PageOne',
        }
    }
    render() {
        return (
            <TabNavigator
                tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
                sceneStyle={{ paddingBottom: tabBarHeight }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PageOne'}
                    title="PageOne"
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/connection-1.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_sun.png')}/>}
                    onPress={() => this.setState({selectedTab: 'PageOne'})}>
                    <PageOne/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PageTwo'}
                    title="PageTwo"
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/flat.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_flow.png')}/>}
                    onPress={() => this.setState({selectedTab: 'PageTwo'})}>
                    <PageTwo/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PageThree'}
                    title="PageThree"
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/flat.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_flow.png')}/>}
                    onPress={() => this.setState({selectedTab: 'PageThree'})}>
                    <PageThree/>
                </TabNavigator.Item>
            </TabNavigator>
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
