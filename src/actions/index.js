export const addRecipes = recipes => ({
  type: 'ADD_RECIPES',
  recipes: recipes
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});
