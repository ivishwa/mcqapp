'use strict';

import React, { Component } from 'react';
import { ListItem, List, Text} from 'native-base';

class QuestionPaperList extends Component {
	render() {
		return (
			<List>
			{
				this.props.sections.map((section, i) => {
				return <QuestionPaper key={i} title={section.title}/>
				})
			}
			</List>
			)
	}
}

class QuestionPaper extends Component {
	render(){
		return (
			<ListItem button onPress={()=>/*Some method*/}>
                <Text>{this.props.title}</Text>
            </ListItem>
			);
	}
}

export default QuestionPaperList;