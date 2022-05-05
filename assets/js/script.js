let burguer = document.getElementById("burguer");
let menuResponsive = document.getElementById("navLinks")

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active")
    menuResponsive.classList.toggle("nav__links--hidde")
})