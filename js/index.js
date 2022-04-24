const btn = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    navbar.classList.toggle("active-navbar");
});

