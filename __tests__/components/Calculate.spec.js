import React from 'react'
import { TextInput } from 'react-native'
import renderer from 'react-test-renderer'

import Button from '../../src/components/Button'
import Calculate from '../../src/components/Calculate'

describe('<Calculate />', () => {
  it('should render', () => {
    const onChange = jest.fn()
    const onPress = jest.fn()

    const instance = renderer.create(
      <Calculate
        financingValue="1"
        plotValue="2"
        plotAmount="3"
        onChange={onChange}
        onPress={onPress}
      />,
    ).root

    expect(instance.findAllByType(TextInput)[0].props.value).toEqual('R$0,01')
    expect(instance.findAllByType(TextInput)[1].props.value).toEqual('R$0,02')
    expect(instance.findAllByType(TextInput)[2].props.value).toEqual('3')
    instance.props.onChange()
    expect(onChange).toHaveBeenCalled()
    instance.findByType(Button).props.onPress()
    expect(onPress).toHaveBeenCalled()
  })
})
