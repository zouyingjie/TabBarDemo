import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
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
                tabBarStyle={{height: 56}}
                hidesTabTouch={true}>
                <TabNavigator.Item
                    f4ea2a
                    selected={this.state.selectedTab === 'PageOne'}
                    title="WeChat"
                    titleStyle={{color: '#bfbfbf'}}
                    selectedTitleStyle={{color: '#25f10e'}}
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_wechat.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon}
                                                     source={require('../img/icon_wechat_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'PageOne'})}>
                    <PageOne/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PageTwo'}
                    title="支付宝"
                    titleStyle={{color: '#bfbfbf'}}
                    selectedTitleStyle={{color: '#06b1e0'}}
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_zfb.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon}
                                                     source={require('../img/icon_zfb_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'PageTwo'})}>
                    <PageTwo/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PageThree'}
                    title="微博"
                    titleStyle={{color: '#bfbfbf'}}
                    selectedTitleStyle={{color: '#d4237a'}}
                    badgeText='1'
                    renderIcon={() => <Image style={styles.tab_icon} source={require('../img/icon_tw.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab_icon}
                                                     source={require('../img/icon_tw_selected.png')}/>}
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
        width: 28,
        height: 28,
    }
});
