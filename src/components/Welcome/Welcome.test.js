import React from 'react'
import { shallow } from 'enzyme'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('should match snapshot with all data passed in', () => {
    const wrapper = shallow(<Welcome />)
    expect(wrapper).toMatchSnapshot()
  })
})