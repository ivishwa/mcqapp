import React from 'react'
import { TouchableOpacity,
  StyleSheet,
  Platform } from 'react-native'
  import { Actions as NavigationActions } from 'react-native-router-flux'
  import Icon from 'react-native-vector-icons/FontAwesome';
  const styles = StyleSheet.create({
    backButton: {
      width: 100,
      height: 37,
      position: 'absolute',
      ...Platform.select({
        ios: {
          top: 22,
        },
        android: {
          top: 10,
        },
      }),
      left: 2,
      padding: 8,
      flexDirection: 'row',
    },
    rightButton: {
      width: 100,
      height: 37,
      position: 'absolute',
      ...Platform.select({
        ios: {
          top: 22,
        },
        android: {
          top: 10,
        },
      }),
      right: 2,
      padding: 8,
    },
  })
  const openDrawer = () => {
    NavigationActions.refresh({
      key: 'drawer',
      open: true
    })
  }
  export default {
    backButton () {
      return (
        <TouchableOpacity onPress={NavigationActions.pop}>
          <Icon name='angle-left'
            color={'#ffffff'}
            style={styles.backButton}
            />
        </TouchableOpacity>
      )
    },
    hamburgerButton () {
      return (
        <TouchableOpacity onPress={openDrawer}>
          <Icon name='bars'
            color={'#ffffff'}
            style={styles.rightButton}
            />
        </TouchableOpacity>
      )
    }
  }
