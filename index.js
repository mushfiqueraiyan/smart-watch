document.addEventListener("DOMContentLoaded", function() {
    let res = document.querySelector(".res");
    let nav = document.querySelector(".nav");

    res.addEventListener("click", function() {
        nav.classList.toggle("responsive");
    });
});
