import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import Info from './components/Info'

import colors from './constants/colors'

class App extends Component {
  state = {
    taxMonth: 2.22,
    taxTotal: 11.11,
  }

  render() {
    const { taxMonth, taxTotal } = this.state
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content" />
        <Info taxMonth={taxMonth} taxTotal={taxTotal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primary,
  },
})

export default App
