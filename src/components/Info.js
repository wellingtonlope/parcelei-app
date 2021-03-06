import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import format from 'number-format.js'

import colors from '../constants/colors'

const Info = ({ taxMonth, total }) => (
  <View style={styles.wrapper}>
    <View style={styles.circle}>
      <Text style={styles.title}>Taxa mensal</Text>
      <Text style={styles.taxMonth}>{`${taxMonth === 0 ? '0,00' : format('#.##0,00', taxMonth)}%`}</Text>
      <Text style={styles.taxTotal}>{`Total: R$${total === 0 ? '0,00' : format('#.##0,00', total)}`}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '500',
  },
  taxMonth: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 42,
  },
  taxTotal: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
})

export default Info
