import React from 'react'
import { shallow } from 'enzyme'
import { RecipeView, mapStateToProps } from './RecipeView'

describe('RecipeView', () => {
  it('should match snapshot with correct data passed in', () => {
    const wrapper = shallow(<RecipeView reviews={[]} label={"Grilled Radicchio and Fontina"} dietLabels={["Low-Carb"]} healthLabels={[
      "Sugar-Conscious",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ]} ingredientLines={[
      "One 10-ounce head radicchio",
      "2 tablespoons balsamic vinegar",
      "Salt and freshly ground pepper",
      "2 teaspoons chopped fresh oregano",
      "1/4 cup extra-virgin olive oil",
      "3/4 cup (3 ounces) finely grated fontina"
    ]} image={"https://www.edamam.com/web-img/f37/f37bd3a564906b0fd489efc3bcde1dad.jpg"} url={"http://www.marthastewart.com/1143762/grilled-radicchio-and-fontina"} yields={4} calories={910} />)

    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an array of reviews', () => {
      const mockReviews = [{ caption: 'horrible' }, { caption: 'just bad' }]
      const mockState = {
        reviews: mockReviews
      }

      const expected = { reviews: [{ caption: 'horrible' }, { caption: 'just bad' }] }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})