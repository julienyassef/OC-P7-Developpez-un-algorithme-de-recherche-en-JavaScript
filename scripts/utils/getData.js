export const getExternalData = async () => {
    
    const data = await fetch('../../data/recipes.json')
    const result = await data.json();
    result.map(recipes => {
        recipes.display = true;
    });

   return result
    }



  