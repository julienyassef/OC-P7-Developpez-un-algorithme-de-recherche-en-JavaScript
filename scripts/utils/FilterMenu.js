export const toggleFilterMenus = () => {
  const filtersButtons = document.querySelectorAll(
    ".menu-filter__container-filter__menu__group"
  );

  filtersButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("menu-clicked");
    });
  });
};

export const forceCloseFilterMenus = () => {
  const filtersButtons = document.querySelectorAll(".menu-clicked");
  filtersButtons.forEach((button) => {
    button.classList.remove("menu-clicked");
  });
};
