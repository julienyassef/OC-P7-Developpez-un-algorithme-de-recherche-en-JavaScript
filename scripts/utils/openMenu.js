export const openFilterMenus = () => {
    const selectArrows = document.querySelectorAll('.menu-filter__container-filter__menu__group__arrow');

    const selectMenuIngredients = document.querySelector('.menu-filter__container-filter__menu__list-ingredients');
    const searchBaringredients = document.querySelector('.menu-filter__container-filter__search-bar-ingredients');
    const selectIngredients = document.querySelectorAll('.menu-filter__container-filter__menu__list-ingredients__ingredients');

    selectArrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            if(arrow.classList.contains('clicked')){
                arrow.classList.remove('rotate-arrow','clicked');
            } else {
                arrow.classList.add('rotate-arrow','clicked');
            }

            if (arrow.classList.contains('arrow-menu-ingredients') && selectMenuIngredients.classList.contains('display-list')) {
                selectMenuIngredients.classList.remove('display-list');
                searchBaringredients.classList.remove('display-list')
                
            } else if (arrow.classList.contains('arrow-menu-ingredients')) {
                selectMenuIngredients.classList.add('display-list');
                searchBaringredients.classList.add('display-list')
                
            }
            
        });
    });
};