import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from './Loader'

describe('Loader', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })
})