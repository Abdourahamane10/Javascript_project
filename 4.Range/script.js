const emojis = ["😠","🙁","😐","🙂","😁"];
const emojiText = document.querySelector(".emoji-value");
const range = document.querySelector(".range-input");

range.addEventListener("click", handleRange);

function handleRange(e){
    emojiText.textContent = `${emojis[e.target.value - 1]}`;
}