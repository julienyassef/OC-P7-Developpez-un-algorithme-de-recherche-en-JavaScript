import { getExternalData } from "../utils/getData.js";
import { createRecipeCard } from "../utils/factories.js";
import { saveData } from "../utils/storage.js";
import { displayRecipes } from "../utils/dom.js";
import { displayFilterIngredients } from "../utils/dom.js";


const init = async () => {
    const recipes = await getExternalData();
    saveData(recipes);
    displayRecipes(recipes);
    displayFilterIngredients(recipes);
    // displayFilterAppliance(recipes);
    // displayFilterUstensils(recipes);
}
init ();





