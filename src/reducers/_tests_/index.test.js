import rootReducer from '../index';
import { createStore } from 'redux';
import { errorReducer } from '../errorReducer';
import { loaderReducer } from '../loaderReducer';
import { recipeReducer } from '../recipeReducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should show initial state of error message when the errorReducer handles an action', () => {
    expect(store.getState().error).toEqual(errorReducer('', {}));
  });
  it('should show initial state of isLoading when the loaderReducer handles an action', () => {
    expect(store.getState().isLoading).toEqual(loaderReducer(false, {}));
  });
  it('should show initial state of recipes when the recipeReducer handles an action', () => {
    expect(store.getState().recipes).toEqual(recipeReducer([], {}));
  });
});
