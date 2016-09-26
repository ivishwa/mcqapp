'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, List, Text} from 'native-base';

import { setIndex } from '../../actions/list';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';



class QuestionPaperList extends Component {
	render() {
		return (
			<List>
			{
				this.props.sections.map((section, i) => {
				return <QuestionPaper key={i} 
									title={section.title}
									index={i}
									setIndex={this.props.setIndex}
									pushNewRoute={this.props.pushNewRoute}/>
				})
			}
			</List>
			)
	}
}

class QuestionPaper extends Component {


	navigateTo(index, route){
		this.props.setIndex(index);
		this.props.pushNewRoute(route);
	}

	render(){
		return (
			<ListItem button onPress={() => this.navigateTo(this.props.index,'questions')}>
                <Text>{this.props.title}</Text>
            </ListItem>
			);
	}
}

function bindAction(dispatch) {
    return {
        pushNewRoute: route => dispatch(pushNewRoute(route)),
        setIndex: index => dispatch(setIndex(index))
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.list
    };
}
export default connect(mapStateToProps, bindAction)(QuestionPaperList);