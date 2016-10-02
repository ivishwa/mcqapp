import React, { Component } from 'react';
import {
  View,
  Text
} from '@shoutem/ui';
import { connect } from 'react-redux';
	
class BlankPage2 extends Component {
	render(){
		return (
			<View>
				<Text>{{"Shoutem UI Test"}}</Text>
			</View>
		)
	}
}

export default BlankPage2;