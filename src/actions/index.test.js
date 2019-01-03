import * as actions from '../actions';

describe('actions', () => {
  it('addRecipes should have a type of ADD_RECIPES', () => {
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

  it('hasErrored should have a type of HAS_ERRORED', () => {
    const mockError = 'An error has occurred';
    const expectedAction = {
      type: 'HAS_ERRORED',
      message: mockError
    };

    const result = actions.hasErrored(mockError);
    expect(result).toEqual(expectedAction);
  });

  it('isLoading should have a type of IS_LOADING', () => {
    const mockBool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    };

    const result = actions.isLoading(mockBool);
    expect(result).toEqual(expectedAction);
  });
});
