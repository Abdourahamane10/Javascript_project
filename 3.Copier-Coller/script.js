const copyToClipBoardBtn = document.querySelector(".copy-clipboard-btn");
copyToClipBoardBtn.addEventListener("click", handleCopyToClipBoard);

let runningAnimation = false;

function handleCopyToClipBoard(e){
    navigator.clipboard.writeText(e.target.nextElementSibling.textContent);
    
    if(!runningAnimation){
        runningAnimation = true;
        e.target.textContent = "Copié 🥳"
        setTimeout(() => {
            e.target.textContent = "Copier 📕";
            runningAnimation = false;
        }, 1000);
    }
}
