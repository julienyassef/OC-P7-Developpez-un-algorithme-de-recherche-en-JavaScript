import { getData } from "./storage.js";
import { saveData } from "./storage.js";
import { displayRecipes } from "./dom.js";
import { displayListIngredients } from "./dom.js";
import { createTag } from "./factories.js";


export const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");

  // sélection les élements dans les div pour créés une list d'ingredients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll('.menu-filter__container-filter__menu__list-ingredients__ingredients');

  const listIngrédientsDiv = [];

  divsIngredients.forEach(div => {
    listIngrédientsDiv.push(div.textContent);
  });

// ====== réalise le tri des recettes par rapport à ce qui est entré dans l'input===========
  ingredientInput.addEventListener("input", (event) => {
    const value = event.target.value;
    const recipes = getData();

    if (value.length < 3) return;

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

  // ====== Sélection l'ingrédient et crée un tag  ===========

  // sélection les ingrédients qui contiennent ce qui inscrit dans l'input
  const ingrédientsFiltrésInput = listIngrédientsDiv.filter(ingrédient => ingrédient.toLowerCase().includes(value.toLowerCase()));
  const sectionTag = document.querySelector(".section-tag");  
       
  // Itérer sur les divs d'ingrédients
  divsIngredients.forEach(div => {
    const ingrédient = div.textContent;
    // Vérifier si l'ingrédient n'est pas dans ingrédientsFiltrés
    if (!ingrédientsFiltrésInput.includes(ingrédient)) {
      div.classList.add("display-none");
    }
    else {
      // click sur un ingredient restant pour créer un tag
      div.addEventListener('click', () => {
     
        sectionTag.appendChild(createTag(ingrédient))      
   
      });
  };
});
   

    // eventListener('click') sur les ingrédients de la liste

    // si click ==> créer un tag
    // ex: displayIngredientTag('lait de coco')

    // sauvegarder le nouveau state des recettes
    saveData(filteredRecipes);
    displayRecipes(filteredRecipes);
  });
};
