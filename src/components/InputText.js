import React from 'react'
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import colors from '../constants/colors'

const InputText = ({
  label, value, placeholder, onChange, type, inputStyle,
}) => (
  <View style={[styles.wrapper, inputStyle]}>
    <Text style={styles.label}>{label}</Text>
    {!type && (
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={onChange}
        placeholderTextColor={colors.textPrimary}
        underlineColorAndroid="transparent"
      />
    )}
    {type && (
      <TextInputMask
        style={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={onChange}
        underlineColorAndroid="transparent"
      />
    )}
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primaryDark,
    paddingTop: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    color: colors.textPrimary,
    fontSize: 16,
  },
})

export default InputText
