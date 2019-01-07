export const cleanRecipeData = uncleanRecipes => {
  const cleanRecipes = uncleanRecipes.map(recipe => {
    // const uuidv4 = require('uuid/v4');
    // const id = uuidv4();
    return {
      label: recipe.recipe.label,
      image: recipe.recipe.image,
      source: recipe.recipe.source,
      url: recipe.recipe.url,
      yields: recipe.recipe.yield,
      calories: Math.floor(recipe.recipe.calories),
      dietLabels: recipe.recipe.dietLabels,
      healthLabels: recipe.recipe.healthLabels,
      ingredientLines: recipe.recipe.ingredientLines
    };
  });
  return cleanRecipes;
};

export const sendToLocalStorage = (key, recipes) => {
  localStorage.setItem(key, JSON.stringify(recipes));
};

export const getFromLocalStorage = key => {
  const recipes = JSON.parse(localStorage.getItem(key));
  return recipes;
};
