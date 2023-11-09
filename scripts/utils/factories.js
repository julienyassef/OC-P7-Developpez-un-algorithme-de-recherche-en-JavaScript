import { tagDeletionManagement } from "./tagdeletionManagement.js";


export const createRecipeCard = (recipe) => {
    const recipeCard = document.createElement('article');
    recipeCard.classList.add('recipe-card');
    recipeCard.id = `recipe-${recipe.id}`;

    const timeContainer = document.createElement('div');
    timeContainer.classList.add('recipe-card__time-container');

    const timeRecipe = document.createElement('div');
    timeRecipe.classList.add('recipe-card__time-container__time');
    timeRecipe.textContent = `${recipe.time}min`;

    const img = document.createElement('img');
    img.classList.add('recipe-card__image');
//   img.src = `./photosRecettes/${recipe.image}`;
    img.src="./photosRecettes/Recette07.jpg";
    img.alt = `photo de la recette : ${recipe.name}`;

    const containerCard = document.createElement('div');
    containerCard.classList.add('recipe-card__container');

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.name;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('recipe-card__container__description');

    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Recette';

    const descriptionRecipe = document.createElement('p');
    descriptionRecipe.classList.add('recipe-card__container__description__recipe');
    descriptionRecipe.textContent = recipe.description;

    const ingredientsTitle = document.createElement('h3');
    ingredientsTitle.textContent = 'Ingrédients';

    const ingredientsList = document.createElement('div');
    ingredientsList.classList.add('recipe-card__container__description__ingredients');

    recipe.ingredients.map(ing => {
        const ingredientName = ing.ingredient ;
        const ingredientQuantity = ing.quantity || '';
        const ingredientUnit = ing.unit || ''; 

        const ingredientContainer = document.createElement('div');
        ingredientContainer.classList.add('recipe-card__container__description__ingredients__container');
        ingredientsList.appendChild(ingredientContainer);
    
        const ingredientAppellation = document.createElement('div');
        ingredientAppellation.classList.add('recipe-card__container__description__ingredients__container__name');
        ingredientAppellation.textContent = `${ingredientName}`
        ingredientContainer.appendChild(ingredientAppellation);
        
        const ingredientDescription = document.createElement('div');
        ingredientDescription.classList.add('recipe-card__container__description__ingredients__container__description');
        ingredientDescription.textContent = `${ingredientQuantity} ${ingredientUnit}`;
        ingredientContainer.appendChild(ingredientDescription);
        
    } )
    
    recipeCard.appendChild(img);
    recipeCard.appendChild(timeContainer);
    timeContainer.appendChild(timeRecipe);
    recipeCard.appendChild(containerCard);
    containerCard.appendChild(recipeTitle);
    containerCard.appendChild(descriptionContainer);
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionRecipe);
    descriptionContainer.appendChild(ingredientsTitle);
    descriptionContainer.appendChild(ingredientsList);

    return recipeCard;
}

export const createlistIngredients= (ingredientName) => {

    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('menu-filter__container-filter__menu__list-ingredients__ingredients');
    ingredientElement.textContent = ingredientName;
    return ingredientElement

}

export const createlistAppliances= (appliance) => {

    const applianceElement = document.createElement('div');
    applianceElement.classList.add('menu-filter__container-filter__menu__list-appareils__appliance');
    applianceElement.textContent = appliance;
    return applianceElement

}

export const createlistUstensils = (ustensil) => {

    const ustensilElement = document.createElement('div');
    ustensilElement.classList.add('menu-filter__container-filter__menu__list-ustensiles__ustensils');
    ustensilElement.textContent = ustensil;
    return ustensilElement

}

export const createTag = (element) => {
    const sectionTag = document.querySelector('.section-tag');

    const tag = document.createElement('div');
    tag.classList.add('tag');
  
    const contentTag = document.createElement('p');
    contentTag.textContent = element;
    contentTag.classList.add('tag__content');
  
    const svgTag = document.createElement('div');
    svgTag.innerHTML = '<img src="./assets/crossTag.svg" alt="SVG" />';
    svgTag.classList.add('tag__cross');

    svgTag.addEventListener('click', () => {
        tagDeletionManagement(tag);
    });
  
    tag.appendChild(contentTag);
    tag.appendChild(svgTag);

    sectionTag.appendChild(tag);
  } 

export const pinIngredientsToTop = (element) => {
    const sectionPin = document.querySelector('.menu-filter__container-filter__menu__section-pin-ingredients');

    // mettre la première lettre en majuscule
    const fisrtLettreMajElement = element.charAt(0).toUpperCase() + element.slice(1);

    const pinIngredients = document.createElement('div');
    pinIngredients.classList.add('menu-filter__container-filter__menu__section-pin-ingredients__pinElement');
    pinIngredients.textContent = fisrtLettreMajElement;

    sectionPin.appendChild(pinIngredients);
   
}

export const pinApplianceToTop = (element) => {
    const sectionPin = document.querySelector('.menu-filter__container-filter__menu__section-pin-appliance');

    // mettre la première lettre en majuscule
    const fisrtLettreMajElement = element.charAt(0).toUpperCase() + element.slice(1);

    const pinAppliance = document.createElement('div');
    pinAppliance.classList.add('menu-filter__container-filter__menu__section-pin-appliance__pinElement');
    pinAppliance.textContent = fisrtLettreMajElement;

    sectionPin.appendChild(pinAppliance);
   
}

export const pinUstensilsToTop = (element) => {
    const sectionPin = document.querySelector('.menu-filter__container-filter__menu__section-pin-ustensils');

    // mettre la première lettre en majuscule
    const fisrtLettreMajElement = element.charAt(0).toUpperCase() + element.slice(1);

    const pinUstensils = document.createElement('div');
    pinUstensils.classList.add('menu-filter__container-filter__menu__section-pin-ustensils__pinElement');
    pinUstensils.textContent = fisrtLettreMajElement;

    sectionPin.appendChild(pinUstensils);
   
}
