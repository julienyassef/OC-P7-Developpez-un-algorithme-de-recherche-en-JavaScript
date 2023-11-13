import { getData } from "./storage.js";

import { displayRecipesWithoutLists } from "./dom.js";


export const ingredientSearch = () => {

  const divsIngredients = document.querySelectorAll(".menu-filter__container-filter__menu__list-ingredients__ingredients");
  const ingredientInput = document.querySelector("#ingredientInput");
  const recipes = getData();
  let normalizedValue = '';
  let timer;

  ingredientInput.value = '';

  ingredientInput.addEventListener("input", (event) => {
    clearTimeout(timer);
    const value = event.target.value.toLowerCase();
    normalizedValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    divsIngredients.forEach((div) => {
      const ingrédient = div.textContent.toLowerCase();
  
      if (normalizedValue.length >= 3) {
        // Si la longueur de la valeur normalisée est supérieure ou égale à 3, ajustez la visibilité en fonction de value dans input
        const isVisible = ingrédient.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedValue.toLowerCase());
        div.style.display = isVisible ? "block" : "none";
      } else {
          // Si la longueur de la valeur normalisée est inférieure à 3, affichez tous les divs 
          div.style.display = "block";
        }
      });

    timer = setTimeout(() => {
      const filteredRecipes = recipes.map((recipe) => {
        const recipeIngredients = recipe.ingredients
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");

        if (normalizedValue.length >= 3) {
          if (recipeIngredients.includes(normalizedValue)) {
            recipe.display = true;
          } else {
            recipe.display = false;
          }
        } else {
          recipe.display = true;
        }
        return recipe;
      });

      displayRecipesWithoutLists(filteredRecipes);
    }, 300); // Délai d'attente en millisecondes
  });
};
