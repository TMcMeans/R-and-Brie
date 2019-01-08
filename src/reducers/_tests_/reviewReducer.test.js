import { reviewReducer } from '../reviewReducer'

describe('reviewReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = reviewReducer(undefined, {})
    expect(result).toEqual([])
  })
  it('should return an array of reviews', () => {
    const mockAction = {
      type: 'ADD_REVIEW',
      review: { label: 'Baked brie', rating: 4, caption: 'Tastes great!' }
    }

    const expectedState = [mockAction.review]
    const result = reviewReducer([], mockAction)
    expect(result).toEqual(expectedState)
  })
})