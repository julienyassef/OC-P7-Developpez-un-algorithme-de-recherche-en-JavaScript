import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";
import { displayListIngredients } from "./dom.js";


export const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");

  ingredientInput.addEventListener("input", (event) => {
    const value = event.target.value;
    const recipes = getData();

    if (value.length < 3) return;

    const filteredRecipes = recipes.map((recipe) => {

      // regarder si y'a l'ingrédient dans les recette qui sont display = true
      if (recipe.display === true) {
        const recipeIngredients = recipe.ingredients
          .map((ingredients) => ingredients.ingredient.toLowerCase())
          .join(" ");

        // comparer si value est dans le tableau d'ingrédient de la recette
        if (recipeIngredients.search(value.toLowerCase()) === -1) {
          recipe.display = false;
        }
      }
      return recipe;
    });

    // crée un tableau avec les ingredients des recettes qui ont dislay = true
    const listIngredientsRecipesDisplayTrue = filteredRecipes
    .filter(recipe => recipe.display === true)
    .map(recipe => recipe.ingredients)
    .map(ingredients => ingredients.map(ingredient => ingredient.ingredient))
    .reduce((acc, ingredients) => acc.concat(ingredients), [])

  //   const liste2 = displayListIngredients(recipes);
   
   
  //   console.log(liste2)
  // //  .listIngredients;
  
   
    
    const filteredIngredientList = (m) => {

      
    }
    

    // filtrer les ingrédients de l'input
    // pour n'afficher que les ingrédients des recette qui sont en display=true

    // eventListener('click') sur les ingrédients de la liste

    // si click ==> créer un tag
    // ex: displayIngredientTag('lait de coco')

    // sauvegarder le nouveau state des recettes
    saveData(filteredRecipes);
    displayRecipes(filteredRecipes);
  });
};
