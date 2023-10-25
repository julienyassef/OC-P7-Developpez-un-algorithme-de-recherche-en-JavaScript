import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";
import { displayListIngredients } from "./dom.js";


export const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");

// ====== réalise le tri des recettes par rapport à ce qui est entré dans l'input===========
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

  // ====== filtrer les ingrédients de l'input pour n'afficher que les ingrédients des recette qui sont en display=true===========

  // crée un tableau avec les ingredients des recettes qui ont dislay = true
  const listIngredientsRecipesDisplayTrue = filteredRecipes
  .filter(recipe => recipe.display === true)
  .map(recipe => recipe.ingredients)
  .map(ingredients => ingredients.map(ingredient => ingredient.ingredient))
  .reduce((acc, ingredients) => acc.concat(ingredients), [])


  // sélection les élements dans les div pour créés une list d'ingredients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll('.menu-filter__container-filter__menu__list-ingredients__ingredients');

  const listeIngrédientsDiv = [];

  divsIngredients.forEach(div => {
    listeIngrédientsDiv.push(div.textContent);
  });

  // ingrédientsFiltrés contient les ingrédients présents à la fois dans les div et listIngredientsRecipesDisplayTrue
  const ingrédientsFiltrés = listeIngrédientsDiv.filter(ingrédient => listIngredientsRecipesDisplayTrue.includes(ingrédient));


  // Itérer sur les divs d'ingrédients
  divsIngredients.forEach(div => {
    const ingrédient = div.textContent;
  
    // Vérifier si l'ingrédient n'est pas dans ingrédientsFiltrés
    if (!ingrédientsFiltrés.includes(ingrédient)) {
      // Appliquer une classe CSS pour styliser différemment
      div.classList.add("display-none");
    }
  });
   

    // eventListener('click') sur les ingrédients de la liste

    // si click ==> créer un tag
    // ex: displayIngredientTag('lait de coco')

    // sauvegarder le nouveau state des recettes
    saveData(filteredRecipes);
    displayRecipes(filteredRecipes);
  });
};
