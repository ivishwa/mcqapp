
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { setUser } from '../../actions/user';

import { 
		Container,
		Content,
		InputGroup,
		Input,
		Button,
		Icon,
		View,
		Thumbnail } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visibleHeight: Dimensions.get('window').height,
			scroll: false,
			name: ''
		};
	}

	replaceRoute(route) {
		this.setUser(this.state.name);
		this.props.replaceRoute(route);
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
							<Button style={styles.btn} textStyle={{color: '#fff'}} onPress={() => this.replaceRoute('home') }>
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
		replaceRoute:(route)=>dispatch(replaceRoute(route)),
		setUser:(name)=>dispatch(setUser(name))
	}
}

export default connect(null, bindActions)(Login);
