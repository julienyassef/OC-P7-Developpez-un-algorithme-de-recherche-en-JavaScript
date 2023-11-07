// gère le onClick des elements dans la liste des ingrédients (dropdown)
import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";
import { forceCloseFilterMenus } from "./filterMenu.js";
import { createTag } from "./factories.js";

import { pinIngredientsToTop } from "./factories.js";

export const handleIngredientsElementList = () => {
  const divsIngredients = document.querySelectorAll(
    ".menu-filter__container-filter__menu__list-ingredients__ingredients"
  );

  divsIngredients.forEach((div) => {
    div.addEventListener("click", () => {
      // récupérer la valeur
      const value = div.innerText.toLowerCase();

      // chercher les recettes qui ont value comme ingrédient
      const recipes = getData();

      const filteredRecipes = recipes.map((recipe) => {
        // regarder si y'a l'ingrédient dans les recette qui sont display = true
        if (recipe.display === true) {
          const recipeIngredients = recipe.ingredients
            .map((ingredients) => ingredients.ingredient.toLowerCase())
            .join(" ");
          
            // comparer si value est dans le tableau d'ingrédient de la recette
            if (recipeIngredients.search(value.toLowerCase()) === -1) {
                recipe.display = false; 
          }
        }
        return recipe;
      });

    
      // fermer la dropdown
      forceCloseFilterMenus();

      // crée un tag
      createTag(value);

      // fige a div ingrédients en haut de la list
      pinIngredientsToTop(value);

      // afficher les recettes
      saveData(filteredRecipes);
      displayRecipes(filteredRecipes);
    });
  });
};

export const handleApplianceElementList = () => {
    const divsAppliance = document.querySelectorAll(
      ".menu-filter__container-filter__menu__list-appareils__appliance"
    );
    
    divsAppliance.forEach((div) => {
        div.addEventListener("click", () => {
        // récupérer la valeur
        const value = div.innerText.toLowerCase();
        
        // chercher les recettes qui ont value comme ingrédient
        const recipes = getData();
        
        const filteredRecipes = recipes.map((recipe) => {
            // regarder si y'a l'appaareil dans les recette qui sont display = true
        if (recipe.display === true) {
        const recipeAppliance = recipe.appliance.toLowerCase();

            // comparer si value est dans le tableau de l'appareil de la recette
            if (recipeAppliance.search(value.toLowerCase()) === -1) {
                recipe.display = false;
            }
        }
          return recipe;
        });
  
        // fermer la dropdown
        forceCloseFilterMenus();
  
        // crée un tag
        createTag(value);
  
        // afficher les recettes
        saveData(filteredRecipes);
        displayRecipes(filteredRecipes);
      });
    });
  };

export const handleUstensilsElementList = () => {
const divsUstensils = document.querySelectorAll(
    ".menu-filter__container-filter__menu__list-ustensiles__ustensils"
);

    divsUstensils.forEach((div) => {
        div.addEventListener("click", () => {
        // récupérer la valeur
        const value = div.innerText.toLowerCase();
        
        // chercher les recettes qui ont value comme ustensil
        const recipes = getData();
        
        const filteredRecipes = recipes.map((recipe) => {
            // regarder si y'a ustensil dans les recette qui sont display = true
            if (recipe.display === true) {
                const recipeUstensils = recipe.ustensils
                .map((appliance) => appliance.toLowerCase())
                .join (" ");
                console.log(recipeUstensils)
                
                
                // comparer si value est dans le tableau ustensil  de la recette
                if (recipeUstensils.search(value.toLowerCase()) === -1) {
                    recipe.display = false; 
            }
            }
            return recipe;
        });

        // fermer la dropdown
        forceCloseFilterMenus();

        // crée un tag
        createTag(value);

        // afficher les recettes
        saveData(filteredRecipes);
        displayRecipes(filteredRecipes);
        });
    });
};
