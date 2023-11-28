import {
  createRecipeCard,
  createlistIngredients,
  createlistAppliances,
  createlistUstensils,
} from "./factories.js";

import { handleIngredientsElementList } from "./handleTags.js";
import { handleApplianceElementList } from "./handleTags.js";
import { handleUstensilsElementList } from "./handleTags.js";

import { ingredientSearch } from "./search.js";
import { applianceSearch } from "./search.js";
import { ustensileSearch } from "./search.js";

import { searchBarPrincipal } from "./search.js";

export const countRecipe = (recipes) => {
  const countSection = document.querySelector(".menu-filter__recipe-count");
  let countRecipes = recipes.filter((recipe) => recipe.display === true).length;
  countSection.textContent = `${countRecipes} recette${
    countRecipes > 1 ? "s" : ""
  }`;
  return countRecipes;
};

export const errorMessage = (recipes) => {
  const countRecipes = countRecipe(recipes);
  const errorMessageElement = document.querySelector(".error-message");
  if (countRecipes === 0) {
    errorMessageElement.style.display = "block";
  } else if (countRecipes >= 1) {
    errorMessageElement.style.display = "none";
  }
};

export const displayRecipes = (recipes) => {
  countRecipe(recipes);
  errorMessage(recipes);
  
  displayRecipesWithoutLists(recipes);

  displayListAppliance(recipes);
  displayListUstensils(recipes);
  displayListIngredients(recipes);
  searchBarPrincipal();
};

export const displayRecipesWithoutLists = (recipes) => {
  countRecipe(recipes);
  const domSection = document.querySelector(".recipe-section");
  domSection.innerHTML = "";

  const recipeCards = recipes
    .filter((recipe) => recipe.display === true)
    .map((recipe) => createRecipeCard(recipe));

  domSection.append(...recipeCards);
};

export const displayListIngredients = (recipes) => {
  const sectionListIngredients = document.querySelector(
    ".menu-filter__container-filter__menu__list-ingredients"
  );
  sectionListIngredients.innerHTML = "";

  let listIngredients = [];

  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      const ingredients = recipe.ingredients;
      const dataIngredients = ingredients.map((element) => element.ingredient);

      // Ajoutez les noms d'ingrédients à la liste
      listIngredients = listIngredients.concat(dataIngredients);
    }
  });

  // Mettre la première lettre en majuscule
  listIngredients = listIngredients.map((ingredient) =>
    ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
  );

  // Trier le tableau par ordre alphabétique et retirer les doublons
  const uniqueIngredients = [...new Set(listIngredients)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinIngredients = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-ingredients__pinElement"
  );
  const pinIngredients = Array.from(divPinIngredients).map(
    (element) => element.textContent
  );

  // Ajoute les éléments uniques à la liste et vérifie qu'il n'est pas affiché en haut en mode figé
  uniqueIngredients
    .filter((ingredientName) => !pinIngredients.includes(ingredientName))
    .forEach((ingredientName) => {
      sectionListIngredients.appendChild(createlistIngredients(ingredientName));
    });

  ingredientSearch();
  handleIngredientsElementList();
};

export const displayListAppliance = (recipes) => {
  const sectionListAppliance = document.querySelector(
    ".menu-filter__container-filter__menu__list-appareils"
  );

  sectionListAppliance.innerHTML = "";

  let listAppliance = [];

  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      const appliances = recipe.appliance;
      // Ajoutez les noms des appareils à la liste
      listAppliance.push(appliances);
    }
  });

  // Mettre la première lettre en majuscule
  listAppliance = listAppliance.map((appliance) =>
    appliance.toLowerCase().charAt(0).toUpperCase() + appliance.slice(1)
  );

  // Trier le tableau par ordre alphabétique et retirer les doublons
  const uniqueAppliance = [...new Set(listAppliance)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinAppliance = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-appliance__pinElement"
  );
  const pinAppliance = Array.from(divPinAppliance).map(
    (element) => element.textContent
  );

  // Ajoute les éléments uniques à la liste et vérifie qu'il n'est pas affiché en haut en mode figé
  uniqueAppliance
    .filter((appliance) => !pinAppliance.includes(appliance))
    .forEach((appliance) => {
      sectionListAppliance.appendChild(createlistAppliances(appliance));
    });

  applianceSearch();

  handleApplianceElementList();
};

export const displayListUstensils = (recipes) => {
  const sectionListUstensils = document.querySelector(
    ".menu-filter__container-filter__menu__list-ustensiles"
  );
  sectionListUstensils.innerHTML = "";

  let listUstensils = [];

  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      const ustensils = recipe.ustensils;
      // Ajoutez les noms des ustensiles à la liste
      listUstensils = listUstensils.concat(ustensils);
    }
  });

  // Mettre la première lettre en majuscule
  listUstensils = listUstensils.map((ustensil) =>
    ustensil.toLowerCase().charAt(0).toUpperCase() + ustensil.slice(1)
  );

  // Trier le tableau par ordre alphabétique et retirer les doublons
  const uniqueUstensil = [...new Set(listUstensils)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinUstensils = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-ustensils__pinElement"
  );
  const pinUstensils = Array.from(divPinUstensils).map(
    (element) => element.textContent
  );

  // Ajoute les éléments uniques à la liste et vérifie qu'il n'est pas affiché en haut en mode figé
  uniqueUstensil
    .filter((ustensil) => !pinUstensils.includes(ustensil))
    .forEach((ustensil) => {
      sectionListUstensils.appendChild(createlistUstensils(ustensil));
    });

  ustensileSearch();

  handleUstensilsElementList();
};

