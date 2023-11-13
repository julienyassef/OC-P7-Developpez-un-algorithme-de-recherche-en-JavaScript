import { getData } from "./storage.js";
import { saveData } from "./storage.js";

import { displayRecipesWithoutLists } from "./dom.js";
import { displayRecipes } from "./dom.js";

export const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");
  const recipes = getData();

  ingredientInput.value = '';

  // Sélectionnez les éléments div pour créer une liste d'ingrédients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll(".menu-filter__container-filter__menu__list-ingredients__ingredients");

  ingredientInput.addEventListener("input", (event) => {
    const value = event.target.value;

    // Normalize the value to remove accents
    const normalizedValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Itérez sur les divs d'ingrédients
    divsIngredients.forEach((div) => {
      const ingrédient = div.textContent.toLowerCase();

      if (normalizedValue.length >= 3) {
        // Si la longueur de la valeur normalisée est supérieure ou égale à 3, ajustez la visibilité en fonction de value dans input
        const isVisible = ingrédient.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedValue.toLowerCase());
        div.style.display = isVisible ? "block" : "none";

        const filteredRecipes = recipes.map((recipe) => {
          // regarder si y'a l'ingrédient dans les recette qui sont display = true
          if (recipe.display === true) {
            const recipeIngredients = recipe.ingredients
            .map((ingredients) => ingredients.ingredient.toLowerCase())
            .join(" ");
            
            // comparer si value normalisée est dans le tableau d'ingrédient de la recette
            if (recipeIngredients.normalize("NFD").replace(/[\u0300-\u036f]/g, "").search(normalizedValue.toLowerCase()) === -1) {
              recipe.display = false;
            } 
          }
          return recipe;
        });
        displayRecipesWithoutLists(filteredRecipes);
      } else {
        // Si la longueur de la valeur normalisée est inférieure à 3, affichez tous les divs 
        div.style.display = "block";
      }
    });
  });
};
