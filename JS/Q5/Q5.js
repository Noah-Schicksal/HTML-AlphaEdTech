const pneu = document.querySelector(".pneu");
const bomba = document.querySelector(".bomba");

let pneuCheio = false;

bomba.addEventListener("click", () => {
    pneu.style.backgroundImage = 'url("assets/pneuCheio.png")';
    pneuCheio = true;
});

pneu.addEventListener("click", () => {
    if(pneuCheio === true){
        alert("VROOM \!");
    }
});