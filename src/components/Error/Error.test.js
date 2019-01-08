import React from 'react'
import { shallow } from 'enzyme'

import { Error } from './Error'

describe('Error', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper).toMatchSnapshot()
  })
})