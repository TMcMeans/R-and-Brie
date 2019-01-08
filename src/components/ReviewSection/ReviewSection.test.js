import React from 'react'
import { shallow } from 'enzyme'
import { ReviewSection } from './ReviewSection'

describe('ReviewSection', () => {
  it('should match snapshot with correct data passed in', () => {
    const mockReviews = [{ name: 'Tanjie', caption: 'Loved it', rating: 4 }, { name: 'Person', caption: 'Hated it', rating: 1 }]
    const wrapper = shallow(<ReviewSection currentReviews={mockReviews} />)
  })
})