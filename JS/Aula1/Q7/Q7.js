const btn = document.getElementById("btn");

let cliques = 0;

btn.addEventListener("click", () => {
    cliques++;
    if(cliques === 1){
        btn.textContent = `Você clicou ${cliques} vez!`
    }else if(cliques > 1 && cliques <= 10){
        btn.textContent = `Você clicou ${cliques} vezes!`
    }else{
        btn.textContent = "Ainda não enjoou?"
    }
});