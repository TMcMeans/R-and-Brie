import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App'

describe('App', () => {
  it('should match snapshot when user is on welcome page', () => {
    const wrapper = shallow(<App recipes={[{ label: 'brie croissants' }, { label: 'brie burgers' }]} />)
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an array of recipes', () => {
      const wrapper = shallow(<App />)

      const mockState = {
        recipes: [{ label: 'brie croissants' }, { label: 'brie burgers' }]
      }

      const mockRecipes = [{ label: 'brie croissants' }, { label: 'brie burgers' }]

      const expected = {
        recipes: mockRecipes
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)

    })
  })
})


