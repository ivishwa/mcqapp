import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStoreWeb'
import App from './App'

class Root extends React.Component {

  constructor() {
    super();
    this.state = {
      store: configureStore(()=> this.setState({})),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App store={this.state.store} />
      </Provider>
    );
  }
}


export default Root;
