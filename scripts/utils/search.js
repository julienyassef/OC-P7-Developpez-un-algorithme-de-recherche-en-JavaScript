import { getData } from "./storage.js";

import { displayRecipesWithoutLists } from "./dom.js";

export const ingredientSearch = () => {

  // Sélection des éléments du menu des ingrédients et de l'input
  const divsIngredients = document.querySelectorAll(".menu-filter__container-filter__menu__list-ingredients__ingredients");
  const ingredientInput = document.querySelector("#ingredientInput");
  const recipes = getData(); 
  let timer; 

  ingredientInput.value = '';

  // Événement lors de la saisie dans l'input
  ingredientInput.addEventListener("input", (event) => {
    clearTimeout(timer); // Nettoyage du minuteur pour éviter les déclenchements multiples

    const value = event.target.value.toLowerCase(); 
    const normalizedValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 

    // Filtrage des ingrédients du menu en fonction de la saisie; displauy ou non sur la liste
    divsIngredients.forEach((div) => {
      const ingrédient = div.textContent.toLowerCase();
      if (normalizedValue.length >= 3) {
        const isVisible = ingrédient.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedValue.toLowerCase());
        div.style.display = isVisible ? "block" : "none"; 
      } else {
        div.style.display = "block"; 
      }
    });

    // Attente de 300 ms avant de filtrer les recettes pour éviter les requêtes fréquentes
    timer = setTimeout(() => {
      const filteredRecipes = recipes.map((recipe) => {
        const recipeIngredients = recipe.ingredients
          .map((ingredient) => ingredient.ingredient.toLowerCase())
          .join(" ");

        // Filtrage des recettes en fonction de la saisie normalisée
        if (normalizedValue.length >= 3) {
          if (recipeIngredients.includes(normalizedValue)) {
            recipe.display = true;
          } else {
            recipe.display = false;
          }
        } else {
          recipe.display = true; // Affichage de toutes les recettes si la saisie est inférieure à 3 caractères
        }
        return recipe;
      });

      // Affichage des recettes filtrées
      displayRecipesWithoutLists(filteredRecipes);
    }, 300); // Délai d'attente en millisecondes
  });
};

export const applianceSearch = () => {

  // Sélection des éléments du menu des ingrédients et de l'input
  const divsAppliance = document.querySelectorAll(".menu-filter__container-filter__menu__list-appareils__appliance");
  const applianceInput = document.querySelector("#applianceInput");
  const recipes = getData(); 
  let timer; 

  applianceInput.value = '';
  
  // Événement lors de la saisie dans l'input
  applianceInput.addEventListener("input", (event) => {
    console.log("tot")
    clearTimeout(timer); // Nettoyage du minuteur pour éviter les déclenchements multiples

    const value = event.target.value.toLowerCase(); 
    const normalizedValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 

    // Filtrage des ingrédients du menu en fonction de la saisie; displauy ou non sur la liste
    divsAppliance.forEach((div) => {
      const appliance = div.textContent.toLowerCase();
      if (normalizedValue.length >= 3) {
        const isVisible = appliance.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedValue.toLowerCase());
        div.style.display = isVisible ? "block" : "none"; 
      } else {
        div.style.display = "block"; 
      }
    });

    // Attente de 300 ms avant de filtrer les recettes pour éviter les requêtes fréquentes
    timer = setTimeout(() => {
      const filteredRecipes = recipes.map((recipe) => {
        const recipeAppliance = recipe.appliance.toLowerCase();

        // Filtrage des recettes en fonction de la saisie normalisée
        if (normalizedValue.length >= 3) {
          if (recipeAppliance .includes(normalizedValue)) {
            recipe.display = true;
          } else {
            recipe.display = false;
          }
        } else {
          recipe.display = true; // Affichage de toutes les recettes si la saisie est inférieure à 3 caractères
        }
        return recipe;
      });

      // Affichage des recettes filtrées
      displayRecipesWithoutLists(filteredRecipes);
    }, 300); // Délai d'attente en millisecondes
  });
};
