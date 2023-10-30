export const openFilterMenus = () => {
  const filtersButtons = document.querySelectorAll(
    ".menu-filter__container-filter__menu__group"
  );

  filtersButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("menu-clicked")
    });
  });
};