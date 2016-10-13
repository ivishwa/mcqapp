
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { setUser } from '../../actions/user';
import {Actions} from 'react-native-router-flux';


import {
		Container,
		Content,
		InputGroup,
		Input,
		Button,
		Icon,
		View,
		Thumbnail } from 'native-base';

import myTheme from '../styles/base-theme';
import styles from '../styles/login-style';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visibleHeight: Dimensions.get('window').height,
			scroll: false,
			name: ''
		};
	}

	setUser(name) {
		this.props.setUser(name);
	}

	render() {

		return (
			<Container theme={myTheme}>
					<Content>
							<View style={styles.content}>
								<Thumbnail size={80} source={require('../../../images/icon.png')} />
							</View>
							<View>
							<InputGroup>
								<Icon name='logo-chrome' />
								<Input placeholder='WEBSITE URL' onChangeText={(name) => this.setState({name})} />
							</InputGroup>
							<InputGroup>
								<Icon name='ios-person' />
								<Input placeholder='EMAIL' onChangeText={(name) => this.setState({name})} />
							</InputGroup>
							<InputGroup>
								<Icon name='ios-unlock-outline' />
								<Input
									placeholder='PASSWORD'
									secureTextEntry={true}
								/>
							</InputGroup>
							<Button style={styles.btn} textStyle={{color: '#fff'}} onPress={() => Actions.home() }>
								Login
							</Button>
							</View>
					</Content>
			</Container>
		)
	}
}

function bindActions(dispatch){
	return {
		setUser:(name)=>dispatch(setUser(name))
	}
}

export default connect(null, bindActions)(Login);
