import { getExternalData } from "../utils/getData.js";
import { createRecipeCard } from "../utils/factories.js";
import { saveData } from "../utils/storage.js";
import { displayRecipes } from "../utils/dom.js";
import { displayListIngredients } from "../utils/dom.js";
import { displayListAppliance } from "../utils/dom.js";
import { displayListUstensils } from "../utils/dom.js";
import { openFilterMenus } from "../utils/dom.js";


const init = async () => {
    const recipes = await getExternalData();
    saveData(recipes);
    displayRecipes(recipes);
    displayListIngredients(recipes);
    displayListAppliance(recipes);
    displayListUstensils(recipes);
    openFilterMenus();
}
init ();





