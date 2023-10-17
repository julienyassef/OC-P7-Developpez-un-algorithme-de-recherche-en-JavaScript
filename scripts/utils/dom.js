import { createRecipeCard, createlistIngredients, createlistAppliances } from "./factories.js";



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

            sectionListIngredients.appendChild(createlistIngredients(ingredientName));  
        }
    });

}

export const displayFilterAppliance = (recipes) =>  {
    const sectionListAppliance = document.querySelector('.menu-filter__container-filter__menu__list-appliance');
    
    let listAppliance = []; 
    
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const appliances= recipe.appliance;
        
        // Ajoutez les noms des appareils à la liste
        listAppliance.push(appliances)
    }

    const uniqueAppliance = new Set(); 


    listAppliance.forEach((appliance) => {
        if (!uniqueAppliance.has(appliance)) {
            uniqueAppliance.add(appliance);

            sectionListAppliance.appendChild(createlistAppliances(appliance));  
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
        
 






 
