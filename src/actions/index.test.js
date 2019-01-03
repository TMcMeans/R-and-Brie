import * as actions from '../actions';

describe('addRecipes', () => {
  it('should have a type of ADD_RECIPES', () => {
    const mockRecipes = [
      { label: 'baked brie' },
      { label: 'apple and brie omlette' },
      { label: 'penne brie with apricots' }
    ];

    const expectedAction = {
      type: 'ADD_RECIPES',
      recipes: mockRecipes
    };

    const result = actions.addRecipes(mockRecipes);
    expect(result).toEqual(expectedAction);
  });
});

describe('hasErrored', () => {
  const mockError = 'An error has occurred';
  const expectedAction = {
    type: 'HAS_ERRORED',
    message: mockError
  };

  const result = actions.hasErrored(mockError);
  expect(result).toEqual(expectedAction);
});
