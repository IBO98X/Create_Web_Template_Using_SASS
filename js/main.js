const toggler = document.querySelector(".the-toggler");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click", () => {
  const isActive = navbar.classList.toggle("active");
  toggler.classList.toggle("active");
  toggler.setAttribute("aria-expanded", isActive);
});
