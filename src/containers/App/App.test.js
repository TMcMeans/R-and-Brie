import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match snapshot when user is on welcome page', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an array of recipes', () => {
      const mockRecipes = [{ label: 'brie croissants' }, { label: 'brie burgers' }]

      const mockState = {
        recipes: mockRecipes
      }


    })
  })
})


