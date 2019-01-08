import React from 'react'
import { shallow } from 'enzyme'
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav'
import { addRecipes } from '../../actions'
import { fetchRecipes } from '../../thunks/fetchRecipes'

describe('Nav', () => {
  it('should render snapshot with correct data passed in', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<Nav recipes={[]} isLoading={false}
      fetchRecipes={mockFunc} addRecipes={mockFunc} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an array of recipes', () => {
      const mockState = {
        recipes: [{ label: 'baked brie' }, { label: 'brie burgers' }],
        isLoading: false
      }

      const expected = {
        recipes: [{ label: 'baked brie' }, { label: 'brie burgers' }],
        isLoading: false
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)

    })
    it('should return a boolean for isLoading', () => {
      const mockState = {
        recipes: [],
        isLoading: true
      }

      const expected = {
        recipes: [],
        isLoading: true
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {

    const mockDispatch = jest.fn()

    it('should dispatch fetchRecipes when updateRecipes is called', () => {
      const mockUrl = 'someplace.com'
      const actionToDispatch = fetchRecipes(mockUrl)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchRecipes(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })

    it('should dispatch addRecipes when updateRecipes is called', () => {
      const actionToDispatch = addRecipes([])

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addRecipes([])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})

