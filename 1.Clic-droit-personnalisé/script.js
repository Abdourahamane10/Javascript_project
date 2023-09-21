const customMenu = document.querySelector(".custom-menu");
const customMenuBtns = document.querySelectorAll(".custom-menu button");

document.addEventListener("contextmenu", handleCustomMenu);

function handleCustomMenu(e){
    e.preventDefault();
    customMenu.style.display = "block"; //Affichage du menu
    customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`; //Faire apparaître le menu là où il y'a la souris
}

document.addEventListener("click", handleDocumentClick);

function handleDocumentClick(e){
    customMenu.style.display = "none";
}

customMenuBtns.forEach(btn => {
    btn.addEventListener("click", handleCustomMenuFeature);
});

function handleCustomMenuFeature(e){
    e.stopPropagation(); //On stope la propagation de l'évènement "click" pour pas que tous les écouteurs de cet évènement soient exécutés afin de pouvoir garder le menu lorsqu'on clique sur un bouton
    document.body.style.backgroundColor = `${e.target.dataset.color}`; //On récupère la couleur du boutton cliqué
}