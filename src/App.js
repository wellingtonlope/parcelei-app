import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import Info from './components/Info'
import colors from './constants/colors'
import Calculate from './components/Calculate'

import IRR from './constants/IRR'

class App extends Component {
  state = {
    taxMonth: 0,
    financingValue: '',
    plotValue: '',
    plotAmount: '',
  }

  onChange = (data) => {
    this.setState({ ...data })
  }

  realToFloat = value => parseFloat(
    value
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '.'),
  )

  onPress = () => {
    const { financingValue, plotValue, plotAmount } = this.state

    const financing = this.realToFloat(financingValue) || 0.0
    const value = this.realToFloat(plotValue) || 0.0
    const plot = parseInt(plotAmount, 10) || 0

    let taxMonth = IRR([financing, ...Array(plot).fill(-value)])
    if (taxMonth === '#NUM!') taxMonth = 0
    taxMonth *= 100

    this.setState({
      taxMonth,
    })
  }

  toDefaultBr = value => parseFloat(value)
    .toFixed(2)
    .replace('.', ',')

  render() {
    const {
      taxMonth, financingValue, plotValue, plotAmount,
    } = this.state
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content" />
        <Info taxMonth={taxMonth} toDefault={this.toDefaultBr} />
        <Calculate
          financingValue={financingValue}
          plotValue={plotValue}
          plotAmount={plotAmount}
          onChange={this.onChange}
          onPress={this.onPress}
        />
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
