import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'

describe('Card', () => {
  it('should render snapshot with all data passed in', () => {
    const mockRecipe = {
      image: "https://www.edamam.com/web-img/f37/f37bd3a564906b0fd489efc3bcde1dad.jpg",
      label: "Grilled Radicchio and Fontina"
    }
    const wrapper = shallow(<Card recipe={mockRecipe} />)
    expect(wrapper).toMatchSnapshot()
  })
})