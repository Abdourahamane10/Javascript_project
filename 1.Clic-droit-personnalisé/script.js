const customMenu = document.querySelector(".custom-menu");
const customMenuBtns = document.querySelectorAll(".custom-menu button");

document.addEventListener("contextmenu", handleCustomMenu);

function handleCustomMenu(e){
    e.preventDefault();
}