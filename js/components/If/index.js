'use strict';

import React, { Component } from 'react';

class If extends Component {
	static propTypes = {
		condition: React.PropTypes.bool.isRequired
  }
	render() {
		if(this.props.condition){
			return this.props.children;
		}
		else {
			return null;
		}
	}
}

export default If;