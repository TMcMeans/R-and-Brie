import React from 'react';
import { shallow } from 'enzyme'

import { ReviewForm } from '../ReviewForm/ReviewForm'
import { mapStateToProps, mapDispatchToProps } from '../ReviewForm/ReviewForm'
import { addReview } from '../../actions'

describe('ReviewForm', () => {
  let mockReviews = [{ label: 'Baked brie', rating: 4, caption: 'Tastes great!' }]
  let wrapper
  it('should match snapshot with correct data', () => {
    wrapper = shallow(<ReviewForm reviews={[{ caption: 'loved it', rating: 4, label: 'brie croissants', name: 'Tanjie' }]} addReview={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should setState when onStarClick is called', () => {
    wrapper = shallow(<ReviewForm reviews={[]} addReview={jest.fn()} />)
    wrapper.instance().onStarClick(1)
    expect(wrapper.state('rating')).toEqual(1)
  })
  it.skip('should call setState when handleChange is called', () => {
    wrapper = shallow(<ReviewForm reviews={[]} addReview={jest.fn()} />)
    const mockEvent = { target: { value: 'Tanjie' } }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual('Tanjie')
    expect(wrapper.state('caption')).toEqual('I loved it')

  })

  describe('mapStateToProps', () => {
    it('should return an array of reviews', () => {
      const mockReviews = [{ caption: 'I loved it', label: 'baked feta' }, { caption: 'I hated it', label: 'brie croissants' }]

      const mockState = {
        reviews: mockReviews
      }

      const expected = { reviews: mockReviews }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)

    })
  })

  describe('mapDispatchToProps', () => {
    it('should dispatch addReview when handleSubmit is called', () => {
      const mockDispatch = jest.fn()
      const mockReview = { caption: 'Hated it', label: 'brie croissants' }

      const actionToDispatch = addReview(mockReview)

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addReview({ caption: 'Hated it', label: 'brie croissants' })
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})


