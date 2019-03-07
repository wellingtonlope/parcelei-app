import React from 'react'
import { Text, TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import renderer from 'react-test-renderer'

import InputText from '../../src/components/InputText'

describe('<InputText />', () => {
  it('should render without mask', () => {
    const label = 'Valor'
    const value = '10'
    const placeholder = 'Informe um valor'
    const onChange = jest.fn()

    const instance = renderer.create(
      <InputText label={label} value={value} placeholder={placeholder} onChange={onChange} />,
    ).root

    expect(instance.findByType(Text).props.children).toEqual(label)
    expect(instance.findByType(TextInput).props.value).toEqual(value)
    expect(instance.findByType(TextInput).props.placeholder).toEqual(placeholder)
    instance.findByType(TextInput).props.onChangeText()
    expect(onChange).toHaveBeenCalled()
  })

  it('should render with mask', () => {
    const label = 'Valor'
    const value = '10'
    const placeholder = 'Informe um valor'
    const type = 'money'
    const onChange = jest.fn()

    const instance = renderer.create(
      <InputText
        type={type}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />,
    ).root

    expect(instance.findByType(Text).props.children).toEqual(label)
    expect(instance.findByType(TextInput).props.value).toEqual('R$0,10')
    expect(instance.findByType(TextInputMask).props.placeholder).toEqual(placeholder)
    instance.findByType(TextInputMask).props.onChangeText()
    expect(onChange).toHaveBeenCalled()
  })
})
