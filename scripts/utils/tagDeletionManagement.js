
import { filterRecipesDeleteByTag } from "./handleTags.js";

export const tagDeletionManagement = (tag) => {

    // Supprime le tag sélectionné
    tag.remove();

    // modifie l'affichage des recipes lorsqu'on supprime un tag
    filterRecipesDeleteByTag(tag);


    // supprime le Pin afficher dans les menus filter
    const selectPinIngredients = Array.from(document.querySelectorAll(".menu-filter__container-filter__menu__section-pin-ingredients__pinElement"));
    const selectPinAppliance = Array.from(document.querySelectorAll(".menu-filter__container-filter__menu__section-pin-appliance__pinElement"));
    const selectPinUstensils = Array.from(document.querySelectorAll(".menu-filter__container-filter__menu__section-pin-ustensils__pinElement"));
    const selectPinDisplay = [...selectPinIngredients, ...selectPinAppliance, ...selectPinUstensils];


    selectPinDisplay.forEach(pin => {
        if (pin.textContent.toLowerCase() === tag.textContent.toLowerCase()) {
            pin.remove();
        }
        
    });
}