import React from 'react'
import { StatusBar } from 'react-native'
import renderer from 'react-test-renderer'

import Info from '../src/components/Info'
import Calculate from '../src/components/Calculate'
import App from '../src/App'

describe('<App />', () => {
  it('should render', () => {
    const instance = renderer.create(<App />).root

    expect(instance.findByType(Info)).not.toBeNull()
    expect(instance.findByType(Calculate)).not.toBeNull()
    expect(instance.findByType(StatusBar)).not.toBeNull()
  })
})
