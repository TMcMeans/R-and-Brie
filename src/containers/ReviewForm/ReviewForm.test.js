import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm'
import { shallow } from 'enzyme'

describe('ReviewForm', () => {
  beforeEach(() => {
    let mockReviews = [{ label: 'Baked brie', rating: 4, caption: 'Tastes great!' }]
  })
  it('should match snapshot with correct data', () => {
    const wrapper = shallow(<ReviewForm />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should setState when onStarClick is called', () => {

  })
  it('should call setState when handleChange is called', () => {

  })
  it('should dispatch addReview when handleSubmit is called', () => {

  })
})

