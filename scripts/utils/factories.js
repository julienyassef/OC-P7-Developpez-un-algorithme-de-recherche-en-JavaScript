
export const createRecipeCard = (recipe) => {
    const recipeCard = document.createElement('article');
    recipeCard.classList.add('recipe-card');

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
