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
  const domSection = document.querySelector(".recipe-section");
  domSection.innerHTML = "";
  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      domSection.appendChild(createRecipeCard(recipe));
    }
  });

  displayListAppliance(recipes);
  displayListUstensils(recipes);
  displayListIngredients(recipes);
  searchBarPrincipal();
};

export const displayRecipesWithoutLists = (recipes) => {
  countRecipe(recipes);
  const domSection = document.querySelector(".recipe-section");
  domSection.innerHTML = "";
  recipes.forEach((recipe) => {
    if (recipe.display === true) {
      domSection.appendChild(createRecipeCard(recipe));
    }
  });
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
  //trier le tableau par ordre alphabétiques et retire les doublons (localeCompare : pour éviter les lettres avec accents à la fin de la liste)
  const uniqueIngredients = [...new Set(listIngredients)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinIngredients = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-ingredients__pinElement"
  );
  
  const pinIngredients = [];
  const divPinIngredientsArray = Array.from(divPinIngredients);
  
  for (let i = 0; i < divPinIngredientsArray.length; i++) {
    const element = divPinIngredientsArray[i];
    pinIngredients.push(element.textContent);
  }
  

  // ajoute les elements uniques à la list et vérifie qu'il n'est pas affiché en haut en mode figer
  uniqueIngredients.forEach((ingredientName) => {
    if (!pinIngredients.includes(ingredientName)) {
      sectionListIngredients.appendChild(createlistIngredients(ingredientName));
    }
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

  //trier le tableau par ordre alphabétiques et retire les doublons (localeCompare : pour éviter les lettres avec accents à la fin de la liste)
  const uniqueAppliance = [...new Set(listAppliance)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinAppliance = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-appliance__pinElement"
  );
  
  const pinAppliance = [];
  const divPinApplianceArray = Array.from(divPinAppliance);
  
  for (let i = 0; i < divPinApplianceArray.length; i++) {
    const element = divPinApplianceArray[i];
    pinAppliance.push(element.textContent);
  }
  

  // ajoute les elements uniques à la list et vérifie qu'il n'est pas affiché en haut en mode figer
  uniqueAppliance.forEach((appliance) => {
    if (!pinAppliance.includes(appliance)) {
      sectionListAppliance.appendChild(createlistAppliances(appliance));
    }
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
  //trier le tableau par ordre alphabétiques et retire les doublons (localeCompare : pour éviter les lettres avec accents à la fin de la liste)
  const uniqueUstensil = [...new Set(listUstensils)].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const divPinUstensils = document.querySelectorAll(
    ".menu-filter__container-filter__menu__section-pin-ustensils__pinElement"
  );
  
  const pinUstensils = [];
  const divPinUstensilsArray = Array.from(divPinUstensils);
  
  for (let i = 0; i < divPinUstensilsArray.length; i++) {
    const element = divPinUstensilsArray[i];
    pinUstensils.push(element.textContent);
  }
  

  // ajoute les elements uniques à la list et vérifie qu'il n'est pas affiché en haut en mode figer
  uniqueUstensil.forEach((ustensil) => {
    if (!pinUstensils.includes(ustensil)) {
      sectionListUstensils.appendChild(createlistUstensils(ustensil));
    }
  });

  ustensileSearch();

  handleUstensilsElementList();
};
