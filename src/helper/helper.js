export const cleanRecipeData = uncleanRecipes => {
  const cleanRecipes = uncleanRecipes.map(recipe => {
    // const uuidv4 = require('uuid/v4');
    // const id = uuidv4();
    return {
      label: recipe.recipe.label,
      image: recipe.recipe.image,
      source: recipe.recipe.source,
      url: recipe.recipe.url,
      yield: recipe.recipe.yield,
      calories: Math.floor(recipe.recipe.calories),
      dietLabels: recipe.recipe.dietLabels,
      healthLabels: recipe.recipe.healthLabels,
      ingredientLines: recipe.recipe.ingredientLines
    };
  });
  return cleanRecipes;
};

export const sendToLocalStorage = recipes => {
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

export const getFromLocalStorage = () => {
  const recipes = JSON.parse(localStorage.getItem('recipes'));
  return recipes;
};
