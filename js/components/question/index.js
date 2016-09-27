
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { setQuestionIndex } from '../../actions/question';
import Question from './question'
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import myTheme from '../../themes/base-theme';

class QuestionPage extends Component {

    popRoute() {
        this.props.popRoute();
    }
    render() {

        const { props: { questions, index, list } } = this;

        return (
            <Container theme={myTheme} style={{backgroundColor: '#fff'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>{(index) ?'Question No:' + (index + 1) : 'Question:1' }</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content padder>
                        <Question question={questions[index]} index={index}/>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
        setQuestionIndex: index => dispatch(setQuestionIndex(index))
    }
}

function mapStateToProps(state) {
    return {
        questions: state.list.list.sections[state.list.selectedIndex].questions,
        list: state.list.list,
        index: state.question.selectedQuestionIndex
    };
}

export default connect(mapStateToProps, bindAction)(QuestionPage);
