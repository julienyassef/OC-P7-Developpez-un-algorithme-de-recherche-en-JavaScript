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


    
  

const searchBarHeader = () => {
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







const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");

  ingredientInput.value = '';

  // sélection les élements dans les div pour créés une list d'ingredients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll(".menu-filter__container-filter__menu__list-ingredients__ingredients");

  const listIngrédientsDiv = [];
  
  divsIngredients.forEach((div) => {
    listIngrédientsDiv.push(div.textContent);
  });
  
  // ====== réalise le tri des recettes par rapport à ce qui est entré dans l'input===========
  ingredientInput.addEventListener("input", (event) => {
    const value = event.target.value;
    const recipes = getData();
    
    console.log(value)
    if (value.length < 3) return;
    
    // const filteredRecipes = recipes.map((recipe) => {
    //   // regarder si y'a l'ingrédient dans les recette qui sont display = true
    //   if (recipe.display === true) {
    //     const recipeIngredients = recipe.ingredients
    //     .map((ingredients) => ingredients.ingredient.toLowerCase())
    //     .join(" ");
        
    //     // comparer si value est dans le tableau d'ingrédient de la recette
    //     if (recipeIngredients.search(value.toLowerCase()) === -1) {
    //       recipe.display = false;
    //     }
    //   }
    //   return recipe;
    // });
  
    
    // ====== Sélection l'ingrédient  ===========
    
    // sélection les ingrédients qui contiennent ce qui inscrit dans l'input
    const ingrédientsFiltrésInput = listIngrédientsDiv.filter((ingrédient) =>
    ingrédient.toLowerCase().includes(value.toLowerCase())
    );
    
    // Itérer sur les divs d'ingrédients
    divsIngredients.forEach((div) => {
      const ingrédient = div.textContent;
      // Vérifier si l'ingrédient n'est pas dans ingrédientsFiltrés
      if (!ingrédientsFiltrésInput.includes(ingrédient)) {
        div.classList.add("display-none");
      }  
      
    });
    
    
    // saveData(filteredRecipes);
  

  });


};


