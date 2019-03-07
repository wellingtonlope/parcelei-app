import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import Info from '../../src/components/Info'

describe('<Button />', () => {
  it('should render', () => {
    const taxMonth = 10.0
    const total = 10.0
    const toDefault = jest.fn()
    toDefault.mockReturnValue('10,00')

    const instance = renderer.create(
      <Info taxMonth={taxMonth} total={total} toDefault={toDefault} />,
    ).root

    const texts = instance.findAllByType(Text)

    expect(texts[0].props.children).toEqual('Taxa mensal')
    expect(texts[1].props.children).toEqual('10,00%')
    expect(texts[2].props.children).toEqual('Total: R$10,00')
  })
})
