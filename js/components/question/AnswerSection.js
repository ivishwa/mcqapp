'use strict';

import React, { Component } from 'react';
import If from '../If'
import { Card,
 		CardItem, 
 		Text, 
 		Button, 
 		Icon, 
 		InputGroup, 
 		Input,
 		List,
 		ListItem,
 		Radio
 } from 'native-base';


class AnswerSection extends Component {
	render(){
		return (
				<CardItem>
					<If condition={(this.props.values.input == "text")}>
							<TextAnswerComponent/>		
					</If>
					<If condition={(this.props.values.input == "radio")}>
							<McqAnswerComponent options={this.props.values.values}/>
					</If>
				</CardItem>		
			);
	}
}


class McqAnswerComponent extends Component {
	render() {
		return (
			<List>
				{Object.keys(this.props.options).map((val, i) => {
					return <McqOptions key={i} val={this.props.options[val]} option={val}/>
				})
			}
			</List>
			);
	}

}

class McqOptions extends Component {

	selectAnswer(val){

	}
	render(){
		return (
			<ListItem button onPress={() => selectAnswer(this.props.val)}>
					<Radio/>
					<Text>{this.props.val}</Text>
			</ListItem>
			);
	}
}

class TextAnswerComponent extends Component {
	render(){
		return (
				 <InputGroup borderType='underline' >
                        <Input placeholder='Your Answer' />
                 </InputGroup>
			);
	}

}

export default AnswerSection;