
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TouchableOpacity } from 'react-native';

import { Container, 
         Header,
         Title,
         Content,
         View,
         Text,
         Button,
         Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';

class QuestionPaperList extends Component {
	render() {
		return <QuestionPaper />
	}
}

class Question extends Component {
	render() {
		<List >
		</List>
	}
}

function bindActions(dispatch){
	return {
		replaceRoute:(route)=>dispatch(replaceRoute(route)),
		setUser:(name)=>dispatch(setUser(name))
	}
}

export default connect(null, bindActions)(QuestionPaperList);
