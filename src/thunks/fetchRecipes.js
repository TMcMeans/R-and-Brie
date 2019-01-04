import { addRecipes, hasErrored, isLoading } from '../actions';

export const fetchRecipes = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const data = await response.json();
      const recipes = data.hits;
      dispatch(addRecipes(recipes));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
