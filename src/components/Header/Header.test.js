import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'

describe('Header', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})