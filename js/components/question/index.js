
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, popRoute } from '../../actions/route';
import { setQuestionIndex } from '../../actions/question';
import Question from './question';
import { Container, Header, Title, Content, Text, Button, Icon, CardItem } from 'native-base';
import If from '../../components/If'
import myTheme from '../../themes/base-theme';

class QuestionPage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
      return false;
  }

  popRoute() {
    this.props.popRoute();
  }


  nextQuestion(index){
    this.props.setQuestionIndex(index + 1);
    this.props.pushNewRoute('questions');
  }

  prevQuestion(index){
    var i = (index === 0)?0 : (index-1)
    this.props.setQuestionIndex(i);
    this.popRoute();
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

    const { props: { index} } = this;

    return (
      <Container theme={myTheme} style={{backgroundColor: '#fff'}}>
        <Header>
          <Button transparent onPress={() => this.prevQuestion(index)}>
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>{(index) ?'Question No:' + (index + 1) : 'Question:1' }</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name='ios-menu' />
          </Button>
        </Header>

        <Content padder>
          <Question/>
          <CardItem header>
            <If condition={(index !== 0)}>
              <Button onPress={() => this.prevQuestion(index)}>
                <Icon name='ios-arrow-back'/>
                Previous
              </Button>
            </If>
            { this.renderButtons()}
          </CardItem>
        </Content>
      </Container>
    )
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: ()=>dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setQuestionIndex: index => dispatch(setQuestionIndex(index))
  }
}

function mapStateToProps(state) {
  return {
    index: state.question.selectedQuestionIndex,
    questionCount: state.list.selectedSection.questions.length
  };
}

export default connect(mapStateToProps, bindAction)(QuestionPage);
