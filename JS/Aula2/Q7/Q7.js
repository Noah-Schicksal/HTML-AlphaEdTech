const inputTitulo = document.getElementById("inputTitulo");
const inputLink = document.getElementById("inputLink");
const btnAdd = document.getElementById("btnAdd");
const galeria = document.getElementById("galeria");

//quando clicar no botão de adicionar
btnAdd.addEventListener("click", () => {
    const titulo = inputTitulo.value.trim();
    const link = inputLink.value.trim();

    //não deixa adicionar vazio
    if (titulo === "" || link === "") {
        alert("Preencha o título e o link da imagem!");
        return;
    }

    //cria um card
    const card = document.createElement("div");
    card.classList.add("card");

    //conteúdo do card
    card.innerHTML = `
        <h3>${titulo}</h3>
        <img src="${link}" alt="${titulo}">
    `;

    // remove quando clica no card
    card.addEventListener("click", () => {
        card.remove();
    });

    //adicionar
    galeria.appendChild(card);

    //limp inputs
    inputTitulo.value = "";
    inputLink.value = "";
});
