'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import {
    Image,
    Dimensions
     } from 'react-native';
var {height, width} = Dimensions.get('window');

export default class SplashPage extends Component {
    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'index',
            });
        }, 1500);
    }
    render () {
        return (
            <View style={{flex:1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#aaa'}}>
                <Image style={{height: height, width:width}} source={require('../../../images/screen.png')}></Image>
            </View>
        );
    }
}
