// gère le onClick des elements dans la liste des ingrédients (dropdown)
import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";

import { forceCloseFilterMenus } from "./filterMenu.js";
import { createTag } from "./factories.js";

import { pinIngredientsToTop } from "./factories.js";
import { pinApplianceToTop } from "./factories.js";
import { pinUstensilsToTop } from "./factories.js";


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

      for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // regarder si y'a l'ingrédient dans les recette qui sont display = true
        if (recipe.display === true) {
          const recipeIngredients = [];
          
          for (let j = 0; j < recipe.ingredients.length; j++) {
            recipeIngredients.push(recipe.ingredients[j].ingredient.toLowerCase());
          }

          const recipeIngredientsString = recipeIngredients.join(" ");

          // comparer si value est dans le tableau d'ingrédient de la recette
          if (recipeIngredientsString.search(value) === -1) {
            recipe.display = false;
          }
        }
      }

      // fermer la dropdown
      forceCloseFilterMenus();

      // crée un tag
      createTag(value);

      // fige a div ingrédients en haut de la list
      pinIngredientsToTop(value);

      // afficher les recettes
      saveData(recipes);
      displayRecipes(recipes);
    });
  });
};


export const handleApplianceElementList = () => {
  const divsAppliance = document.querySelectorAll(
    ".menu-filter__container-filter__menu__list-appareils__appliance"
  );

  divsAppliance.forEach((div) => {
      div.addEventListener("click", () => {
          // récupérer la valeur
          const value = div.innerText.toLowerCase();

          // chercher les recettes qui ont value comme ingrédient
          const recipes = getData();

          for (let i = 0; i < recipes.length; i++) {
              const recipe = recipes[i];

              // regarder si y'a l'appareil dans les recettes qui sont display = true
              if (recipe.display === true) {
                  const recipeAppliance = recipe.appliance.toLowerCase();

                  // comparer si value est dans le tableau de l'appareil de la recette
                  if (recipeAppliance.search(value) === -1) {
                      recipe.display = false;
                  }
              }
          }

          // fermer la dropdown
          forceCloseFilterMenus();

          // créer un tag
          createTag(value);

          // figer la div appliance en haut de la liste
          pinApplianceToTop(value);

          // afficher les recettes
          saveData(recipes);
          displayRecipes(recipes);
      });
  });
};


export const handleUstensilsElementList = () => {
  const divsUstensils = document.querySelectorAll(
      ".menu-filter__container-filter__menu__list-ustensiles__ustensils"
  );

  divsUstensils.forEach((div) => {
      div.addEventListener("click", () => {
          // récupérer la valeur
          const value = div.innerText.toLowerCase();

          // chercher les recettes qui ont value comme ustensil
          const recipes = getData();

          for (let i = 0; i < recipes.length; i++) {
              const recipe = recipes[i];

              // regarder si y'a ustensil dans les recettes qui sont display = true
              if (recipe.display === true) {
                  const recipeUstensils = [];
                  
                  for (let j = 0; j < recipe.ustensils.length; j++) {
                      recipeUstensils.push(recipe.ustensils[j].toLowerCase());
                  }

                  const recipeUstensilsString = recipeUstensils.join(" ");

                  // comparer si value est dans le tableau ustensil de la recette
                  if (recipeUstensilsString.search(value) === -1) {
                      recipe.display = false;
                  }
              }
          }

          // fermer la dropdown
          forceCloseFilterMenus();

          // créer un tag
          createTag(value);

          // figer la div ustensils en haut de la liste
          pinUstensilsToTop(value);

          // afficher les recettes
          saveData(recipes);
          displayRecipes(recipes);
      });
  });
};


export const filterRecipesDeleteByTag = () => {
  const recipes = getData();

  // Récupérer dans un tableau les tags affichés et sélectionnés
  const tagsDisplay = document.querySelectorAll(".tag__content");
  const arrayTagDisplay = [];
  for (let i = 0; i < tagsDisplay.length; i++) {
    arrayTagDisplay.push(tagsDisplay[i].textContent);
  }

  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value.toLowerCase();
  const normalizedSearchValue = searchValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const recipeIngredients = [];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      recipeIngredients.push(recipe.ingredients[j].ingredient.toLowerCase());
    }
    const recipeIngredientsString = recipeIngredients.join(" ");

    const recipeAppliance = recipe.appliance.toLowerCase();

    const recipeUstensils = [];
    for (let j = 0; j < recipe.ustensils.length; j++) {
      recipeUstensils.push(recipe.ustensils[j].toLowerCase());
    }
    const recipeUstensilsString = recipeUstensils.join(" ");

    const title = recipe.name;
    const description = recipe.description;

    const passesSearchFilter =
      normalizedSearchValue.length >= 3 &&
      (recipeIngredientsString.includes(normalizedSearchValue) ||
        recipeAppliance.includes(normalizedSearchValue) ||
        recipeUstensilsString.includes(normalizedSearchValue) ||
        title.includes(normalizedSearchValue) ||
        description.includes(normalizedSearchValue));

    const passesTagFilter =
      arrayTagDisplay.length === 0 ||
      arrayTagDisplay.some((tag) =>
        recipeIngredientsString.includes(tag.toLowerCase()) ||
        recipeAppliance.includes(tag.toLowerCase()) ||
        recipeUstensilsString.includes(tag.toLowerCase())
      );

    // La recette doit passer à true si elle passe les deux filtres
    if (passesSearchFilter || passesTagFilter) {
      recipe.display = true;
    } else {
      recipe.display = false;
    }
  }

  // Sauvegarder et afficher les recettes
  saveData(recipes);
  displayRecipes(recipes);
};

