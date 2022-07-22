var nav = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    /* Aquí hacemos que tenga o no la clase "active" */
    document.querySelector("nav").classList.toggle("active");
});