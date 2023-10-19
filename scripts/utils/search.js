import { getExternalData } from "../utils/getData.js";

export const searchBarSort = (recipes, searchText) => {

   
    let i = 0;

    while (i < recipes.length) {
        const recipe = recipes[i];
        

        if (recipe.name.toLowerCase().includes(searchText.toLowerCase())){ 
        recipe.display = true;    
        } else {
        recipe.display = false;
        }
        
        i++;
    }
    
    // recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchText.toLowerCase())))
}


export const  searchBarHeader = () => {
    
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const messageError = document.getElementById("messageError");
    
    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
    
        try {
            const recipes = await getExternalData(); 
    
            const searchText = searchInput.value;
            console.log(searchText)

            if (searchText.length >= 3) {
                messageError.innerHTML = "";
    
                const matchingRecipes = searchBarSort(recipes, searchText);
            } else {
                messageError.innerHTML = "Le texte de recherche doit contenir au moins 3 caractères.";
            } 
  
            console.log(matchingRecipes)
        } catch (error) {
            console.error("Erreur lors de la récupération des données externes : " + error);
        }
        
    });
    }


