const botoes = document.querySelectorAll(".lanches button");

document.getElementById("L1").classList.add("selected");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        //remover seleção
        botoes.forEach(b => b.classList.remove("selected"));
        //adiciona a borda vermelha ao clicado
        btn.classList.add("selected");
    });
});