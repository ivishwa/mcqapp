'use strict';

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from 'react-native';
import { Drawer } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import SideBar from './SideBar';
import Home from './Home';
import QuestionPaperSection from './QuestionPaperSection';
import QuestionPage from './QuestionPage';
import SplashPage from '../components/SplashScreen';
import {Actions, DefaultRenderer} from 'react-native-router-flux';


import theme from '../styles/base-theme';

const RouterWithRedux = connect()(Router);

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <RouterWithRedux>
        <Scene key="drawer" component={MyDrawer} open={false}>
          <Scene key="main">
            <Scene key="splash" component={SplashPage} initial={true} hideNavBar={true} title="Launch" />
            <Scene key="login" component={Login} title="Login" hideNavBar={true} type="replace" />
            <Scene key="home" component={Home} title="Home" type="replace" hideNavBar={false}/>
            <Scene key="qpSection" component={QuestionPaperSection} title="Question Paper List" />
            <Scene key="question" component={QuestionPage} title="Question" />
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

class MyDrawer extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        type="overlay"
        content={<SideBar/>}
        side={"right"}
        tapToClose={true}
        acceptPan={false}
        onOpen={()=>Actions.refresh({key:state.key, open: true})}
        onClose={()=>Actions.refresh({key:state.key, open: false})}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}>

        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>);
    }
  }
  export default App
