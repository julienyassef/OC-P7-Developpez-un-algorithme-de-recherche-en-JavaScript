// ====== filtrer les ingrédients de l'input pour n'afficher que les ingrédients des recette qui sont en display=true===========

  // crée un tableau avec les ingredients des recettes qui ont dislay = true
  const listIngredientsRecipesDisplayTrue = filteredRecipes
  .filter(recipe => recipe.display === true)
  .map(recipe => recipe.ingredients)
  .map(ingredients => ingredients.map(ingredient => ingredient.ingredient))
  .reduce((acc, ingredients) => acc.concat(ingredients), [])


  // sélection les élements dans les div pour créés une list d'ingredients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll('.menu-filter__container-filter__menu__list-ingredients__ingredients');

  const listIngrédientsDiv = [];

  divsIngredients.forEach(div => {
    listIngrédientsDiv.push(div.textContent);
  });

  // ingrédientsFiltrés contient les ingrédients présents à la fois dans les div et listIngredientsRecipesDisplayTrue
  const ingrédientsFiltrés = listIngrédientsDiv.filter(ingrédient => listIngredientsRecipesDisplayTrue.includes(ingrédient));


  // Itérer sur les divs d'ingrédients
  divsIngredients.forEach(div => {
    const ingrédient = div.textContent;
  
    // Vérifier si l'ingrédient n'est pas dans ingrédientsFiltrés
    if (!ingrédientsFiltrés.includes(ingrédient)) {
      // Appliquer une classe CSS pour styliser différemment
      div.classList.add("display-none");
    }
  });