import {
  createRecipeCard,
  createlistIngredients,
  createlistAppliances,
  createlistUstensils,
} from "./factories.js";

import { handleIngredientsElementList } from "./handleTags.js";

export const countRecipe = (recipes) => {
  const countSection = document.querySelector(".menu-filter__recipe-count");
  let countRecipes = recipes.filter((recipe) => recipe.display === true).length;
  countSection.textContent = `${countRecipes} recettes`;
};

export const displayRecipes = (recipes) => {
  countRecipe(recipes);
  const domSection = document.querySelector(".recipe-section");
  domSection.innerHTML = "";
  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      domSection.appendChild(createRecipeCard(recipe));
    }
  });

  displayListIngredients(recipes);
  displayListAppliance(recipes);
  displayListUstensils(recipes);

};

export const displayListIngredients = (recipes) => {
  const sectionListIngredients = document.querySelector(
    ".menu-filter__container-filter__menu__list-ingredients"
    );
    sectionListIngredients.innerHTML = "";

  let listIngredients = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (recipe.display === true) {
      const ingredients = recipe.ingredients;
      const dataIngredients = ingredients.map((element) => element.ingredient);

      // Ajoutez les noms d'ingrédients à la liste
      listIngredients = listIngredients.concat(dataIngredients);

      for (let i = 0; i < listIngredients.length; i++) {
        listIngredients[i] = listIngredients[i].toLowerCase();

        // Mettre la première lettre en majuscule
        listIngredients[i] =
          listIngredients[i].charAt(0).toUpperCase() +
          listIngredients[i].slice(1);
      }
    }
  }
  //trier le tableau par ordre alphabétiques et retire les doublons
  const uniqueIngredients = [...new Set(listIngredients)].sort();

  uniqueIngredients.forEach((ingredientName) => {
    sectionListIngredients.appendChild(createlistIngredients(ingredientName));
  });

  handleIngredientsElementList();

};

export const displayListAppliance = (recipes) => {
  const sectionListAppliance = document.querySelector(
    ".menu-filter__container-filter__menu__list-appareils"
  );

  sectionListAppliance.innerHTML = "";

  let listAppliance = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const appliances = recipe.appliance;

    if (recipe.display === true) {
      // Ajoutez les noms des appareils à la liste
      listAppliance.push(appliances);

      for (let i = 0; i < listAppliance.length; i++) {
        listAppliance[i] = listAppliance[i].toLowerCase();

        // Mettre la première lettre en majuscule
        listAppliance[i] =
          listAppliance[i].charAt(0).toUpperCase() + listAppliance[i].slice(1);
      }
    }
  }

  //trier le tableau par ordre alphabétiques et retire les doublons
  const uniqueAppliance = [...new Set(listAppliance)].sort();

  uniqueAppliance.forEach((appliance) => {
    sectionListAppliance.appendChild(createlistAppliances(appliance));
  });
};

export const displayListUstensils = (recipes) => {
  const sectionListUstensils = document.querySelector(
    ".menu-filter__container-filter__menu__list-ustensiles"
  );
  sectionListUstensils.innerHTML = "";

  let listUstensils = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ustensils = recipe.ustensils;
    if (recipe.display === true) {
      listUstensils = listUstensils.concat(ustensils);

      for (let i = 0; i < listUstensils.length; i++) {
        listUstensils[i] = listUstensils[i].toLowerCase();

        // Mettre la première lettre en majuscule
        listUstensils[i] =
          listUstensils[i].charAt(0).toUpperCase() + listUstensils[i].slice(1);
      }
    }
  }
  //trier le tableau par ordre alphabétiques et retire les doublons
  const uniqueUstensil = [...new Set(listUstensils)].sort();

  uniqueUstensil.forEach((ustensil) => {
    sectionListUstensils.appendChild(createlistUstensils(ustensil));
  });
};
