export const openFilterMenuIngredient = () => {
    const selectArrows = document.querySelectorAll('.menu-filter__container-filter__menu__group__arrow');
    const selectMenuIngredients = document.querySelector('.menu-filter__container-filter__menu__list-ingredients');
    const searchBaringredients = document.querySelector('.menu-filter__container-filter__search-bar-ingredients');

    selectArrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            if(arrow.classList.contains('clicked')){
                arrow.classList.remove('rotate-arrow','clicked');
            } 
            if (arrow.classList.contains('arrow-menu-ingredients') && selectMenuIngredients.classList.contains('display-none')) {
                selectMenuIngredients.classList.remove('display-none');
                searchBaringredients.classList.remove('display-none');
            }   
        });
    });
};

export const closeFilterMenuIngredient = () => {
    const selectArrows = document.querySelectorAll('.menu-filter__container-filter__menu__group__arrow');
    const selectMenuIngredients = document.querySelector('.menu-filter__container-filter__menu__list-ingredients');
    const searchBaringredients = document.querySelector('.menu-filter__container-filter__search-bar-ingredients');

    selectArrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            if(!arrow.classList.contains('clicked')){
               arrow.classList.add('rotate-arrow','clicked');
            }
            if (arrow.classList.contains('arrow-menu-ingredients')) {
                selectMenuIngredients.classList.add('display-none');
                searchBaringredients.classList.add('display-none')   
            } 
        });
    });
};