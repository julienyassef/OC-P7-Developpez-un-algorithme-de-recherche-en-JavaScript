import { getExternalData } from "../utils/getData.js";
import { saveData } from "../utils/storage.js";

import { displayRecipes } from "../utils/dom.js";
import { displayListIngredients } from "../utils/dom.js";
import { displayListAppliance } from "../utils/dom.js";
import { displayListUstensils } from "../utils/dom.js";

import { toggleFilterMenus } from "../utils/filterMenu.js";

import { ingredientSearch } from "../utils/ingredientSearch.js";

import { handleIngredientsElementList } from "../utils/handleTags.js";

const init = async () => {
  // data
  const recipes = await getExternalData();
  saveData(recipes);

  // gestionnaires affichages
  displayRecipes(recipes);

  toggleFilterMenus();

  // gestionnaire des inputs
  ingredientSearch();
};
init();
