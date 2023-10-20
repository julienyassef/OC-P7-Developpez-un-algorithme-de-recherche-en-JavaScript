import { getExternalData } from "../utils/getData.js";

    
  

export const searchBarHeader = () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", async () => {
        const recipes = await getExternalData();
        const searchText = searchInput.value.toLowerCase();

        if (searchText.length >= 3) {
            recipes.forEach(recipe => {
                recipe.display = false; 

                if (recipe.name.toLowerCase().includes(searchText)) {
                    recipe.display = true;
                } else if (
                    recipe.ingredients.some(ingredientObj => {
                        const ingredient = ingredientObj.ingredient;
                        if (typeof ingredient === 'string') {
                            return ingredient.toLowerCase().includes(searchText);
                        }
                        return false;
                    })) {
                        recipe.display = true;
                    } else if (recipe.appliance.toLowerCase().includes(searchText)) {
                        recipe.display = true;
                    } else if (
                        recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText))
                        ) {
                            recipe.display = true;
                        }
            });
        }
    });
};



