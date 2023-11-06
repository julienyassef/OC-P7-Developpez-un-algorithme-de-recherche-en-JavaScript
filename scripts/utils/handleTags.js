// gère le onClick des elements dans la liste des ingrédients (dropdown)
import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";
import { forceCloseFilterMenus } from "./filterMenu.js";
import { createTag } from "./factories.js";

export const handleIngredientsElementList = () => {
  const divsIngredients = document.querySelectorAll(
    ".menu-filter__container-filter__menu__list-ingredients__ingredients"
  );

  divsIngredients.forEach((div) => {
    div.addEventListener("click", () => {
      // récupérer la valeur
      const value = div.innerText.toLowerCase();

      // chercher les recettes qui ont value comme ingrédient
      const recipes = getData();

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

      // fermer la dropdown
      forceCloseFilterMenus();

      // crée un tag
      createTag(value);

      // afficher les recettes
      saveData(filteredRecipes);
      displayRecipes(filteredRecipes);
    });
  });
};
