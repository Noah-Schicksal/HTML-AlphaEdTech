const formProduto = document.getElementById("formProduto");
const tabelaProdutos = document.querySelector("#tabelaProdutos tbody");
const mensagem = document.getElementById("mensagem");

const modalView = document.getElementById("modalView");
const detalhesProduto = document.getElementById("detalhesProduto");
const closeView = document.getElementById("closeView");

const modalEdit = document.getElementById("modalEdit");
const closeEdit = document.getElementById("closeEdit");
const formEdit = document.getElementById("formEdit");
let editId = null;

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Função para atualizar tabela
function atualizarTabela() {
    tabelaProdutos.innerHTML = "";
    produtos.forEach(prod => {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = prod.nome;
        tdNome.style.cursor = "pointer";
        tdNome.addEventListener("click", () => {
            detalhesProduto.textContent = `
ID: ${prod.id}
Nome: ${prod.nome}
Descrição: ${prod.descricao}
Valor: R$ ${prod.valor.toFixed(2)}
            `;
            modalView.style.display = "block";
        });

        const tdValor = document.createElement("td");
        tdValor.textContent = `R$ ${prod.valor.toFixed(2)}`;

        const tdEditar = document.createElement("td");
        const imgEdit = document.createElement("img");
        imgEdit.src = "https://cdn-icons-png.flaticon.com/512/1159/1159633.png"; // ícone de editar
        imgEdit.classList.add("icon");
        imgEdit.addEventListener("click", () => abrirModalEdit(prod.id));
        tdEditar.appendChild(imgEdit);

        const tdApagar = document.createElement("td");
        const imgDel = document.createElement("img");
        imgDel.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"; // ícone de lixeira
        imgDel.classList.add("icon");
        imgDel.addEventListener("click", () => apagarProduto(prod.id));
        tdApagar.appendChild(imgDel);

        tr.appendChild(tdNome);
        tr.appendChild(tdValor);
        tr.appendChild(tdEditar);
        tr.appendChild(tdApagar);

        tabelaProdutos.appendChild(tr);
    });
}

// Incluir produto
formProduto.addEventListener("submit", e => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);

    if (!nome || !descricao || isNaN(valor) || valor <= 0) {
        mensagem.textContent = "Os campos devem ser preenchidos corretamente!";
        mensagem.style.color = "red";
        return;
    }

    const produto = {
        id: Date.now(),
        nome,
        descricao,
        valor
    };

    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    mensagem.textContent = `Produto ${produto.nome} incluído com sucesso!`;
    mensagem.style.color = "green";

    formProduto.reset();
    atualizarTabela();
});

// Abrir modal de edição
function abrirModalEdit(id) {
    const prod = produtos.find(p => p.id === id);
    if (!prod) return;

    editId = id;
    document.getElementById("editNome").value = prod.nome;
    document.getElementById("editDescricao").value = prod.descricao;
    document.getElementById("editValor").value = prod.valor;

    modalEdit.style.display = "block";
}

// Salvar edição
formEdit.addEventListener("submit", e => {
    e.preventDefault();
    const nome = document.getElementById("editNome").value.trim();
    const descricao = document.getElementById("editDescricao").value.trim();
    const valor = parseFloat(document.getElementById("editValor").value);

    if (!nome || !descricao || isNaN(valor) || valor <= 0) {
        alert("Preencha os dados corretamente!");
        return;
    }

    const prodIndex = produtos.findIndex(p => p.id === editId);
    produtos[prodIndex].nome = nome;
    produtos[prodIndex].descricao = descricao;
    produtos[prodIndex].valor = valor;

    localStorage.setItem("produtos", JSON.stringify(produtos));
    atualizarTabela();
    modalEdit.style.display = "none";
});

// Apagar produto
function apagarProduto(id) {
    produtos = produtos.filter(p => p.id !== id);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    atualizarTabela();
}

// Fechar modais
closeView.addEventListener("click", () => modalView.style.display = "none");
closeEdit.addEventListener("click", () => modalEdit.style.display = "none");

// Inicializa tabela ao carregar página
atualizarTabela();
