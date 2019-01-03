import { loaderReducer } from '../loaderReducer';

describe('loaderReducer', () => {
  it('should return default state', () => {
    const expected = false;
    const result = loaderReducer(false, {});
    expect(result).toEqual(expected);
  });
  it('should return a boolean for isLoading', () => {
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    };
    const expected = true;
    const result = loaderReducer(false, mockAction);
    expect(result).toEqual(expected);
  });
});
