'use strict';

import React,{ Component } from 'react';
import { AppState } from 'react-native';

import AppNavigator from './AppNavigator';

import theme from './themes/base-theme';

class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
            return(
                <AppNavigator store={this.props.store} />
            );
    }
}

export default App
