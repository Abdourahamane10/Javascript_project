const customMenu = document.querySelector(".custom-menu");
const customMenuBtns = document.querySelectorAll(".custom-menu button");

document.addEventListener("contextmenu", handleCustomMenu);

function handleCustomMenu(e){
    e.preventDefault();
    customMenu.style.display = "block"; //Affichage du menu
    customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`; //Faire apparaître le menu là où il y'a la souris
}