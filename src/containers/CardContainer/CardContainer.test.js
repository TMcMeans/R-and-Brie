import React from 'react'
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer'

describe('CardContainer', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<CardContainer recipes={[{ label: 'baked brie', calories: 1144 }, { label: 'brie croissants', calories: 450 }]} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an array of recipes', () => {
      const mockState = {
        recipes: [{ label: 'baked brie', calories: 1144 }, { label: 'brie croissants', calories: 450 }],
        isLoading: false
      }
      const expected = mockState
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })


    it('should return a boolean for isLoading', () => {
      const mockState = {
        recipes: [{ label: 'baked brie', calories: 1144 }, { label: 'brie croissants', calories: 450 }],
        isLoading: false
      }
      const expected = mockState
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})
