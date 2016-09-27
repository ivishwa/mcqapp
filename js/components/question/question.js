'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardItem, Text,Button, Icon} from 'native-base';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import { openDrawer } from '../../actions/drawer';
import {setQuestionIndex} from '../../actions/question';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, popRoute } from '../../actions/route';
class Question extends Component {

	nextQuestion(index){
		this.props.setQuestionIndex((index + 1) % this.props.totalQuestions);
		this.props.pushNewRoute('questions');
	}

	prevQuestion(index){
		var i = (index === 0)?0 : (index-1) 
		this.props.setQuestionIndex(i);
		this.props.popRoute();
	}
	render() {
		return (
			<Card>
				<QuestionSection text={this.props.question.question_text}/>
				<AnswerSection values={this.props.question.options}/>
				<CardItem header>                        
          <Button onPress={() => this.prevQuestion(this.props.index)}>
            <Icon name='ios-arrow-back'/>
            Previous
          </Button>
          <Button iconRight onPress={() => this.nextQuestion(this.props.index)}>
            Next
            <Icon name='ios-arrow-forward' />
          </Button>

        </CardItem>
			</Card>
			);
	}
}

function mapStateToProps(state) {
    return {
        questions: state.list.list.sections[state.list.selectedIndex].questions,
        list: state.list.list,
        index: state.question.selectedQuestionIndex,
        totalQuestions: state.list.list.sections[state.list.selectedIndex].questions.length
    };
}


function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        pushNewRoute: route => dispatch(pushNewRoute(route)),
        setQuestionIndex: index => dispatch(setQuestionIndex(index))
    }
}
export default connect(mapStateToProps, bindAction)(Question);