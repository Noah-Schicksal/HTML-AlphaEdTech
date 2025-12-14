const produtos = {};
const inputNome = document.querySelector("#inputNome");
const inputImg = document.querySelector("#imgProd");
const btnCadastrar = document.querySelector("#reg");

const selectProdutos = document.querySelector("#selProd");
const btnExibir = document.querySelector("#exib");

const exibNome = document.querySelector("#nomeProd");
const exibImg = document.querySelector("#img");

// evento do botão cadastrar
btnCadastrar.addEventListener("click", cadastrarProduto);

// evento do botão exibir
btnExibir.addEventListener("click", exibirProduto);


// cadastrar produto

function cadastrarProduto() {
    const nome = inputNome.value.trim();
    const imgURL = inputImg.value.trim();

    // validação
    if (nome === "" || imgURL === "") {
        alert("Preencha o nome e a URL da imagem!");
        return;
    }

    // salvar no objeto único
    produtos[nome] = imgURL;

    // adicionar ao select
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = nome;
    selectProdutos.appendChild(opt);

    inputNome.value = "";
    inputImg.value = "";
    inputNome.focus();

}


// função de exibir produto
function exibirProduto() {
    const nomeSelecionado = selectProdutos.value;

    if (nomeSelecionado === "") {
        alert("Selecione um produto primeiro!");
        return;
    }

    // pega a imagem do objeto
    const urlImg = produtos[nomeSelecionado];

    // exibe na tela
    exibNome.textContent = nomeSelecionado;
    exibImg.src = urlImg;
}
