import { createRecipeCard } from "./factories.js";

export const countRecipe = (recipes) => {
   const countSection = document.querySelector('.menu-filter__recipe-count');

   let countRecipes = recipes.filter(recipe => recipe.display === true).length;
   countSection.textContent = `${countRecipes} recettes`; 
};

export const displayRecipes = (recipes) => {
    countRecipe(recipes)
    const domSection = document.querySelector (".recipe-section");
    domSection.innerHTML = "";
    recipes.forEach(recipe => {
        if (recipe.display === true){
           domSection.appendChild(createRecipeCard(recipe))
        };
    });
   
}

export const displayFilterIngredients = (recipes) => {
    const sectionListIngredients = document.querySelector('.menu-filter__container-filter__menu__list-ingredients');
    sectionListIngredients.innerHTML = "";

    let listIngredients = []; 

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const ingredients = recipe.ingredients;
        const dataIngredients = ingredients.map((element) => element.ingredient);
    
        // Ajoutez les noms d'ingrédients à la liste
        listIngredients = listIngredients.concat(dataIngredients);
    }
    
    const uniqueIngredients = new Set(); 
    

    listIngredients.forEach((ingredientName) => {
        if (!uniqueIngredients.has(ingredientName)) {
            uniqueIngredients.add(ingredientName);
    
            const ingredientElement = document.createElement('div');
            ingredientElement.classList.add('menu-filter__container-filter__menu__list-ingredients__ingredients');
            ingredientElement.textContent = ingredientName;
            sectionListIngredients.appendChild(ingredientElement);
        }
    });
}



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
//     
//     const sectionListUstensils = document.querySelector('.menu-filter__list-ustensils');
//     const sectionListAppliance = document.querySelector('.menu-filter__list-appliance');
    
//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];
//         const ingredients = recipe.ingredients;
//         const appliance = recipe.appliance;
//         const ustensils = recipe.ustensils;
        
 






 
