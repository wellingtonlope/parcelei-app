import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Button = ({ label, onPress, buttonStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.wrapper, buttonStyle]}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    height: 50,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
})

export default Button
