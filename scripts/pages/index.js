import { getExternalData } from "../utils/getData.js";
import { saveData } from "../utils/storage.js";

import { displayRecipes } from "../utils/dom.js";
import { displayListIngredients } from "../utils/dom.js";

import { toggleFilterMenus } from "../utils/filterMenu.js";


const init = async () => {
  // data
  const recipes = await getExternalData();
  saveData(recipes);

  // gestionnaires affichages
  displayRecipes(recipes);
  // displayListIngredients(recipes);



};
init();
