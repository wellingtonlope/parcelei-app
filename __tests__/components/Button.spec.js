import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import renderer from 'react-test-renderer'

import Button from '../../src/components/Button'

describe('<Button />', () => {
  it('should render', () => {
    const label = 'only test'
    const onPress = () => 'only test'
    const buttonStyle = { backgroundColor: '#fff' }
    const instance = renderer.create(
      <Button label={label} onPress={onPress} buttonStyle={buttonStyle} />,
    ).root

    expect(instance.findByType(Text).props.children).toEqual(label)
    expect(instance.props.onPress).toEqual(onPress)
    expect(instance.props.buttonStyle).toEqual(buttonStyle)
  })

  it('should call onPress', () => {
    const onPress = jest.fn()
    const instance = renderer.create(<Button onPress={onPress} />).root
    instance.findByType(TouchableOpacity).props.onPress()
    expect(onPress).toHaveBeenCalled()
  })
})
