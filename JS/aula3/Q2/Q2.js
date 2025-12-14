const lista = document.querySelector("#lista");
const btnAdd = document.querySelector("#adicionar");
const exib = document.querySelector("#dir");
const editR = document.querySelector("#editarReceita");
const comecar = document.querySelector("#comecar");
const btnDelete = document.querySelector("#deletar");

const titulo = document.querySelector("#titulo");
const ingred = document.querySelector("#ingredientes");
const MP = document.querySelector("#preparo");

const receitas = [];

let receitaAtual = null;


editR.classList.add("hidden");

btnAdd.addEventListener("click",  addCard);
titulo.addEventListener("input", atualizarTitulo);
titulo.addEventListener("blur", salvarReceita);
ingred.addEventListener("blur", salvarReceita);
MP.addEventListener("blur", salvarReceita);
btnDelete.addEventListener("click", deletarReceita);


function atualizarTitulo () {
    if (!receitaAtual) return;
    const h1 = receitaAtual.querySelector("h1");
    h1.textContent = titulo.value || "Sem Titulo"
}

function addCard () {
    const novaReceita = {
        id: receitas.length + 1,
        title: "",
        ingredientes: "",
        preparo: ""
    };

    receitas.push(novaReceita);
    const index = receitas.length - 1;

    const card = document.createElement("div");
    const ST = document.createElement("h1");

    card.dataset.index = index;
    card.classList.add("newCard");

    ST.textContent = "Sem titulo";

    card.appendChild(ST);
    lista.appendChild(card);

    card.addEventListener("click", () => {
        receitaAtual = card;
        carregarReceita(index);
        editarReceita();
        setCardAtivo(card);
    });
}

function carregarReceita(index) {
    const receita = receitas[index];

    titulo.value = receita.title;
    ingred.value = receita.ingredientes;
    MP.value = receita.preparo;
}

function salvarReceita () {
    if (!receitaAtual) return;

    const index = receitaAtual.dataset.index;

    receitas[index].title = titulo.value;
    receitas[index].ingredientes = ingred.value;
    receitas[index].preparo = MP.value;
}

function editarReceita () {
    comecar.classList.remove("show")
    comecar.classList.add("hidden")
    editR.classList.remove("hidden");
    editR.classList.add("grid");
    inEdit = true;
}

function setCardAtivo(card) {
    const cards = document.querySelectorAll(".newCard");

    cards.forEach(c => {
        if (c === card) {
            c.classList.add("active");
        }
    });
}

function deletarReceita () {
    if(!receitaAtual) return;

    const index = parseInt (receitaAtual.dataset.index); //pego o indice da receita

    receitas.splice(index, 1); //removo a receita do array

    //remover o card do DOM
    receitaAtual.remove(); 
    receitaAtual = null

    titulo.value = "";
    ingred.value = "";
    MP.value = "";

    //atualiza os índices dos cards restantes
    const cards = document.querySelectorAll(".newCard");
    cards.forEach((card, i) => {
        card.dataset.index = i;
    });
}