'use strict';

import React, { Component } from 'react';
import { Card, CardItem, Text,Button, Icon} from 'native-base';


class QuestionSection extends Component {
	render(){
		return (
			<CardItem>
				<Text>{this.props.text}</Text>
			</CardItem>
			);
	}
}

export default QuestionSection;