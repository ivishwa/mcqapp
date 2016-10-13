
'use strict';

import React, { Component } from 'react';
import {BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { setIndex } from '../../actions/list';
import {Content, Text, List, ListItem } from 'native-base';
import styles from '../styles/sidebar-style';

class SideBar extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle();
  }

  navigateTo(route, params={}) {
    this.props.setIndex(undefined);
    this.toggleDrawer();
    route(params);
  }

  render(){
    return (
      <Content style={styles.sidebar} >
        <List foregroundColor={'#000'}>
          <ListItem button onPress={() => this.navigateTo(Actions.home)} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo(Actions.qpSection)} >
            <Text>QP List</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

SideBar.contextTypes = {
drawer: React.PropTypes.object
}

function bindAction(dispatch) {
  return {
    setIndex:(index)=>dispatch(setIndex(index)),

  }
}

export default connect(null, bindAction)(SideBar);
