import { getExternalData } from "../utils/getData.js";
import { saveData } from "../utils/storage.js";

import { displayRecipes } from "../utils/dom.js";
import { displayListIngredients } from "../utils/dom.js";
import { displayListAppliance } from "../utils/dom.js";
import { displayListUstensils } from "../utils/dom.js";

import { openFilterMenuIngredient } from "../utils/FilterMenu.js";
import { closeFilterMenuIngredient } from "../utils/FilterMenu.js";

import { ingredientSearch } from "../utils/ingredientSearch.js";



const init = async () => {
  // data
  const recipes = await getExternalData();
  saveData(recipes);

  // gestionnaires affichages
  displayRecipes(recipes);
  displayListIngredients(recipes);
  displayListAppliance(recipes);
  displayListUstensils(recipes);

  // gestionnaires des Open / close des menus filter
  openFilterMenuIngredient();
  closeFilterMenuIngredient();

  // gestionnaire des inputs
  ingredientSearch();

};
init();
