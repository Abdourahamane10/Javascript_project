const animatedInput = document.querySelector(".animated-input");
const inpuGroup = document.querySelector(".input-group");
const validation = document.querySelector(".validation");

animatedInput.addEventListener("input", handleInput);

function handleInput(e){
    if(e.target.value !== ""){
        inpuGroup.classList.add("filled-input");
    }
    else if(e.target.value === ""){
        inpuGroup.classList.remove("filled-input");
    }
    if(e.target.value.includes("$")){
        animatedInput.classList.add("error");
        validation.classList.add("active");
        validation.textContent = "Les $ sont interdits";
    }
    else {
        animatedInput.classList.remove("error");
        validation.classList.remove("active");
    }
}