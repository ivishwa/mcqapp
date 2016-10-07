'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, CardItem, Text,Button, Icon,View} from 'native-base';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import { openDrawer } from '../../actions/drawer';
import {setQuestionIndex} from '../../actions/question';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, popRoute } from '../../actions/route';
import If from '../If'

class Question extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillMount(){
    }

	nextQuestion(index){
		this.props.setQuestionIndex(index + 1);
		this.props.pushNewRoute('questions');
	}

	prevQuestion(index){
		var i = (index === 0)?0 : (index-1)
		this.props.setQuestionIndex(i);
		this.props.popRoute();
	}

    endExam(){
    }

    renderButtons(){
        if((this.props.questionCount-1) === this.props.index)
        {
            return (
                <Button iconRight onPress={() => this.endExam()}>
                    Finish
                </Button>
            );
        } else {
            return(
            <Button iconRight onPress={() => this.nextQuestion(this.props.index)}>
                        Next
                <Icon name='ios-arrow-forward' />
            </Button>
            );
        }
    }
	render() {
        const { props: { index, selectedQuestion } } = this;

		return (
			<View>
				<QuestionSection text={selectedQuestion.question_text}/>
				<AnswerSection values={selectedQuestion.options}/>

			</View>
			);
	}
}

function mapStateToProps(state) {
    return {
        index: state.question.selectedQuestionIndex,
        selectedQuestion: state.list.selectedSection.questions[state.question.selectedQuestionIndex]
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
