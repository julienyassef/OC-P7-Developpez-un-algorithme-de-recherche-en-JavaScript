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
