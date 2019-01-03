import { errorReducer } from '../errorReducer';

describe('errorReducer', () => {
  it('should return default state', () => {
    const expected = '';
    const result = errorReducer('', {});
    expect(result).toEqual(expected);
  });
  it('should return an error message', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'An error has occured'
    };

    const expectedError = 'An error has occured';
    const result = errorReducer('', mockAction);
    expect(result).toEqual(expectedError);
  });
});
