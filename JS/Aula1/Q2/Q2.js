const corDeFundo = document.getElementById("corDeFundo");
const corDaFonte = document.getElementById("corDaFonte");

const background = document.getElementById("background");
const texto = document.getElementById("texto")
const parag = document.getElementById("parag")

corDeFundo.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        background.style.backgroundColor = event.target.id;
    }
});

corDaFonte.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        texto.style.color = event.target.id;
        parag.style.color = event.target.id;
    }
});