import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { recipeReducer } from './recipeReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loaderReducer,
  recipes: recipeReducer
});

export default rootReducer;
