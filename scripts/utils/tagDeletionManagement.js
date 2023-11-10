
import { displayListIngredients } from "./dom.js";
import { saveData } from "./storage.js";
import { getData } from "./storage.js";

import { filterRecipesDeleteByTag } from "./handleTags.js";

export const tagDeletionManagement = (tag) => {

    // Supprime le tag sélectionné
    tag.remove();

    filterRecipesDeleteByTag(tag);
  
};
