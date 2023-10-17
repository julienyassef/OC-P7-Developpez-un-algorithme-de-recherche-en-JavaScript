import { createRecipeCard } from "./factories.js";

export const countRecipe = (recipes) => {
   const countSection = document.querySelector('.menu-filter__recipe-count');

   let countRecipes = recipes.filter(recipe => recipe.display === true).length;
   countSection.textContent = `${countRecipes} recettes`; 
};

export const displayRecipes = (recipes) => {
    countRecipe(recipes)
    const domSection = document.querySelector (".recipe-section");
    domSection.innerHTML = "";
    recipes.forEach(recipe => {
        if (recipe.display === true){
           domSection.appendChild(createRecipeCard(recipe))
        };
    });
   
}

 
