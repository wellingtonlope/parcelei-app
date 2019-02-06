import React from 'react'
import { View, StyleSheet } from 'react-native'

import InputText from './InputText'
import Button from './Button'

const Calculate = ({
  financingValue, plotValue, plotAmount, onChange, onPress,
}) => (
  <View style={styles.wrapper}>
    <InputText
      inputStyle={styles.input}
      label="Valor financiado"
      value={financingValue}
      placeholder="R$0,00"
      type="money"
      onChange={text => onChange({ financingValue: text })}
    />
    <View style={styles.row}>
      <InputText
        inputStyle={[styles.input, styles.inputRowLeft]}
        label="Valor prestação"
        value={plotValue}
        placeholder="R$0,00"
        type="money"
        onChange={text => onChange({ plotValue: text })}
      />
      <InputText
        inputStyle={[styles.input, styles.inputRowRight]}
        label="Número de parcelas"
        value={plotAmount}
        placeholder="0"
        onChange={text => onChange({ plotAmount: text })}
      />
    </View>
    <Button label="Calcular" onPress={onPress} />
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  input: {
    marginVertical: 8,
  },
  inputRowLeft: {
    flex: 1,
    marginRight: 8,
  },
  inputRowRight: {
    flex: 1,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
  },
})

export default Calculate
