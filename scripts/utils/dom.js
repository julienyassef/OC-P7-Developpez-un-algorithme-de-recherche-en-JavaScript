import {
  createRecipeCard,
  createlistIngredients,
  createlistAppliances,
  createlistUstensils,
} from "./factories.js";

import { searchBarHeader } from "../utils/search.js";

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
};

export const displayListIngredients = (recipes) => {
  const sectionListIngredients = document.querySelector(
    ".menu-filter__container-filter__menu__list-ingredients"
  );
  sectionListIngredients.innerHTML = "";

  let listIngredients = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ingredients = recipe.ingredients;
    const dataIngredients = ingredients.map((element) => element.ingredient);

    // Ajoutez les noms d'ingrédients à la liste
    listIngredients = listIngredients.concat(dataIngredients);
    
    for (let i = 0; i < listIngredients.length; i ++) {
      listIngredients[i] = listIngredients[i].toLowerCase();

      // Supprimer le "s" à la fin de la chaîne si présent
      if (listIngredients[i].endsWith("s")) {
        listIngredients[i] = listIngredients[i].slice(0, -1);
      }

      // Mettre la première lettre en majuscule
      listIngredients[i] = listIngredients[i].charAt(0).toUpperCase() + listIngredients[i].slice(1);

    }

  }
  //trier le tableau par ordre alphabétiques
  listIngredients.sort();

  const uniqueIngredients = new Set();

  listIngredients.forEach((ingredientName) => {
    if (!uniqueIngredients.has(ingredientName)) {
      uniqueIngredients.add(ingredientName);

      sectionListIngredients.appendChild(createlistIngredients(ingredientName));
    }
  });
};

export const displayListAppliance = (recipes) => {
  const sectionListAppliance = document.querySelector(
    ".menu-filter__container-filter__menu__list-appliance"
  );

  let listAppliance = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const appliances = recipe.appliance;

    // Ajoutez les noms des appareils à la liste
    listAppliance.push(appliances);

    for (let i = 0; i < listAppliance.length; i ++) {
      listAppliance[i] = listAppliance[i].toLowerCase();

      // Supprimer le "s" à la fin de la chaîne si présent
      if (listAppliance[i].endsWith("s")) {
        listAppliance[i] = listAppliance[i].slice(0, -1);
      }

      // Mettre la première lettre en majuscule
      listAppliance[i] = listAppliance[i].charAt(0).toUpperCase() + listAppliance[i].slice(1);

    }
  }

  //trier le tableau par ordre alphabétiques
  listAppliance.sort();

  const uniqueAppliance = new Set();

  listAppliance.forEach((appliance) => {
    if (!uniqueAppliance.has(appliance)) {
      uniqueAppliance.add(appliance);

      sectionListAppliance.appendChild(createlistAppliances(appliance));
    }
  });
};

export const displayListUstensils = (recipes) => {
  const sectionListUstensils = document.querySelector(
    ".menu-filter__container-filter__menu__list-ustensils"
  );

  let listUstensils = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ustensils = recipe.ustensils;

    listUstensils = listUstensils.concat(ustensils);


    for (let i = 0; i < listUstensils.length; i ++) {
      listUstensils[i] = listUstensils[i].toLowerCase();

      // Supprimer le "s" à la fin de la chaîne si présent
      if (listUstensils[i].endsWith("s")) {
        listUstensils[i] = listUstensils[i].slice(0, -1);
      }

      // Mettre la première lettre en majuscule
      listUstensils[i] = listUstensils[i].charAt(0).toUpperCase() + listUstensils[i].slice(1);

    }
  
  }
  //trier le tableau par ordre alphabétiques
  listUstensils.sort();

  const uniqueUstensil = new Set();

  listUstensils.forEach((ustensil) => {
    if (!uniqueUstensil.has(ustensil)) {
      uniqueUstensil.add(ustensil);

      sectionListUstensils.appendChild(createlistUstensils(ustensil));
    }
  });
};
