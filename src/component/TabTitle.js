import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TabTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tab_title}>
                <Text style={{
                    flex:1,
                    color: "#ffffff",
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontSize: 22,
                    paddingTop:16,
                    paddingBottom:8,

                }}>{this.props.title}</Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    tab_title: {
        height: 48,
        flexDirection: 'row',
        backgroundColor: '#27b5ee',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
});
