const galleryFilters = [...document.querySelectorAll(".gallery-filter")];
const galleryCards = [...document.querySelectorAll(".gallery-card")];

galleryFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    galleryFilters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    galleryCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
  filter.setAttribute("aria-pressed", String(filter.classList.contains("is-active")));
});
