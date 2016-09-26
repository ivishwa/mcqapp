'use strict';

import React, { Component } from 'react';
import { Card, CardItem, Text,Button, Icon} from 'native-base';
import QuestionSection from './QuestionSection'
import AnswerSection from './AnswerSection'
class Question extends Component {

	nextQuestion(){

	}

	prevQuestion(){

	}
	render() {
		return (
			<Card>
				<QuestionSection text={this.props.question.question_text}/>
				<AnswerSection values={this.props.question.options}/>
				<CardItem header>                        
          <Button>
            <Icon name='ios-arrow-back' />
            Previous
          </Button>
          <Button iconRight>
            Next
            <Icon name='ios-arrow-forward' />
          </Button>

        </CardItem>
			</Card>
			);
	}
}

export default Question;