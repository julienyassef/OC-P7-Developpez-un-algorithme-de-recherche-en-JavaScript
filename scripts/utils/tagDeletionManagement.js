
import { displayListIngredients } from "./dom.js";
import { saveData } from "./storage.js";
import { getData } from "./storage.js";

import { displayRecipes } from "./dom.js";

export const tagDeletionManagement = (tag) => {
    // Supprime le tag sélectionné
    tag.remove();

    const recipes = getData();

    // Rétablir l'affichage des recettes qui avaient display = false
    recipes.forEach((recipe) => {
        if (recipe.display === false) {
            const recipeIngredients = recipe.ingredients
                .map((ingredients) => ingredients.ingredient.toLowerCase())
                .join(" ");
                console.log(recipeIngredients)

            // Vérifier si le tag est dans le tableau d'ingrédients de la recette
            if (recipeIngredients.search(tag.textContent.toLowerCase())) {
                recipe.display = true;
            }
            console.log(tag.textContent.toLowerCase())
        }
    });
 
    // sauvegard et afficher les recettes
    saveData(recipes);
    displayRecipes(recipes);
};
