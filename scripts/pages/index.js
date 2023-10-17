import { getExternalData } from "../utils/getData.js";
import { createRecipeCard } from "../utils/factories.js";
import { saveData } from "../utils/storage.js";
import { displayRecipes } from "../utils/dom.js";


const init = async () => {
    const recipes = await getExternalData();
    saveData(recipes);
    displayRecipes(recipes);
}
init ();


/// ================================================
/// menu filter: ingredients, appareils et ustensils
/// ================================================


// class MenuFilterFactory {
//     static createIgrendientsList(ingredients) {

//         for (const ingredient of ingredients) {
//             const ingredientName = ingredient.ingredient ;
        
//             const ingredientPush = document.createElement('p');
//             ingredientPush.classList.add('menu-filter__list-ingredients__ingredient');
//             ingredientPush.textContent = ingredientName;
    
//             return ingredientPush;
//           }
//     }
//     static createApplianceList(appliance) {
        
//         const appliancesPush = document.createElement('p');
//         appliancesPush.classList.add('menu-filter__list-ingredients__appliance');
//         appliancesPush.textContent = appliance;

//         return appliancesPush;
//     }
//     static createUstensilsList(ustensils) {

//         for (let i = 0; i < ustensils.length; i++)  {
//             const ustensil = ustensils[i];
//             const ustensilPush = document.createElement('p');
//             ustensilPush.classList.add('menu-filter__list-ingredients__ustensils');
//             ustensilPush.textContent = ustensil;

//             return ustensilPush;
//           }
//     }
// }

// const getDateMenuFilter = async (recipes) => {
    
//     // sélectionne les div html pour mettre les donnés
//     const sectionListIgredients = document.querySelector('.menu-filter__list-ingredients');
//     const sectionListUstensils = document.querySelector('.menu-filter__list-ustensils');
//     const sectionListAppliance = document.querySelector('.menu-filter__list-appliance');
    
//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];
//         const ingredients = recipe.ingredients;
//         const appliance = recipe.appliance;
//         const ustensils = recipe.ustensils;
        
        
//         //rajoute les listes des data sur les menus filter
//         // const dataMenuFilterIngredients = MenuFilterFactory.createIgrendientsList(ingredients);
//         // sectionListIgredients.appendChild(dataMenuFilterIngredients);
    
//         // const dataMenuFilterAppliance= MenuFilterFactory.createApplianceList(appliance);
//         // sectionListAppliance.appendChild(dataMenuFilterAppliance);
    
//         // const dataMenuFilterUstensils = MenuFilterFactory.createUstensilsList(ustensils);
//         // sectionListUstensils.appendChild(dataMenuFilterUstensils);
//       }

// };
//   getDateMenuFilter(recipes);










