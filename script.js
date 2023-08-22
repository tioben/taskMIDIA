const checkboxMenu = document.getElementById("menu-check");
const menu = document.getElementById("menu");

menu.style.right = -(menu.offsetWidth) + "px";
checkboxMenu.addEventListener("change", function() {
    menu.style.display = "flex";
    if (checkboxMenu.checked) {
        menu.style.right = 0;
    } else {
        menu.style.right = -(menu.offsetWidth) + "px";
    }
});

