import { addRecipes, hasErrored, isLoading } from '../actions';
import * as Helper from '../helper/helper';

export const fetchRecipes = (label, url) => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const data = await response.json();
      const uncleanRecipes = data.hits;
      const cleanRecipes = Helper.cleanRecipeData(uncleanRecipes);
      Helper.sendToLocalStorage(label, cleanRecipes);
      dispatch(addRecipes(cleanRecipes));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
