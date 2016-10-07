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
import { connect } from 'react-redux';
import {submitAnswer} from '../../actions/question';


class AnswerSection extends Component {
  render(){
    return (
      <CardItem>
        <If condition={(this.props.values.input == "text")}>
          <TextContainer  />
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
          return <McqContainer key={i} val={this.props.options[val]} option={val} />
        })
      }
    </List>
  );
}

}

class McqOptions extends Component {

  selectAnswer(val){
    this.props.submitAnswer([val])
  }
  render(){
    return (
      <ListItem button onPress={() => this.selectAnswer(this.props.val)}>
        <Radio selected={(this.props.val === this.props.selectedAnswer[0])? true: false}/>
        <Text>{this.props.val}</Text>
      </ListItem>
    );
  }
}

class TextAnswerComponent extends Component {
  selectAnswer(val){
    this.props.submitAnswer(val)
  }
  render(){
    return (
      <InputGroup borderType='underline' >
        <Input placeholder='Your Answer' onChangeText={(text)=> this.selectAnswer(text)} value={this.props.selectedAnswer}/>
      </InputGroup>
    );
  }

}

function bindAction(dispatch) {
  return {
    submitAnswer: val => dispatch(submitAnswer(val))
  }
}

function mapStateToProps(state){
  return{
    selectedAnswer: state.question.answers[state.question.selectedQuestionIndex] || ""
  }
}
const McqContainer = connect(mapStateToProps,bindAction)(McqOptions);
const TextContainer = connect(mapStateToProps, bindAction)(TextAnswerComponent);
export default AnswerSection;
