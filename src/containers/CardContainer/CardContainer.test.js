import React from 'react'
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<CardContainer />)
  })

  describe('mapStateToProps', () => {
    it('should return an array of recipes', () => { })
    it('should return a boolean for isLoading', () => { })
  })
})
