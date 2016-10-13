import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from '../../reducers/webIndex';
import configureStore from '../../store/configureStoreWeb';
import App from './App';
import NoMatch from '../components/NoMatch';

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
