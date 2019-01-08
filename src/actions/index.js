export const addRecipes = recipes => ({
  type: 'ADD_RECIPES',
  recipes: recipes
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const addReview = review => ({
  type: 'ADD_REVIEW',
  review: review
})