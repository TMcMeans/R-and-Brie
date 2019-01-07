import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { recipeReducer } from './recipeReducer';
import { reviewReducer } from './reviewReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loaderReducer,
  recipes: recipeReducer,
  reviews: reviewReducer,
});

export default rootReducer;
