const checkboxMenu = document.getElementById("menu-check");
const menu = document.getElementById("menu");


checkboxMenu.addEventListener("change", function() {
    if (checkboxMenu.checked) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

