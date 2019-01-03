import { recipeReducer } from './recipeReducer';

describe('recipeReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = recipeReducer(undefined, {});
    expect(result).toEqual([]);
  });
  it('should return an array of recipes', () => {
    const mockAction = {
      type: 'ADD_RECIPES',
      recipes: [
        { label: 'baked brie' },
        { label: 'apple and brie omlette' },
        { label: 'penne brie with apricots' }
      ]
    };

    const expectedState = [
      { label: 'baked brie' },
      { label: 'apple and brie omlette' },
      { label: 'penne brie with apricots' }
    ];

    const result = recipeReducer([], mockAction);
    expect(result).toEqual(expectedState);
  });
});
