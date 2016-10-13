'use strict';

import React,{PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import { Drawer } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import SideBar from './SideBar';
import NavigationDrawer from './NavigationDrawer';
import Home from './Home';
import QuestionPaperSection from './QuestionPaperSection';
import QuestionPage from './QuestionPage';
import SplashPage from '../components/SplashScreen';
import NavItems from '../components/NavItems';
import {Actions} from 'react-native-router-flux';


import theme from '../styles/base-theme';
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    width: 180,
    alignSelf: 'center',
  },
});


const RouterWithRedux = connect()(Router);

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <RouterWithRedux>
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' titleStyle={styles.title} navigationBarStyle={{backgroundColor:"#00303f"}}>
            <Scene key="splash" component={SplashPage} initial={true} hideNavBar={true} title="Launch" />
            <Scene key="login" component={Login} title="Login" hideNavBar type="replace" />
            <Scene key="home" component={Home} title="Home" type="replace" hideNavBar={false}/>
            <Scene key="qpSection" component={QuestionPaperSection} title="Question Paper List" />
            <Scene key="question" component={QuestionPage} title="Question" />
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}
export default App
