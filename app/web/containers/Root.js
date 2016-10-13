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
    let history = syncHistoryWithStore(browserHistory, configureStore())
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <Route path="/" component={App}/>
          <Route path="app" components={App} />
        </Router>
      </Provider>
    );
  }
}


export default Root;
