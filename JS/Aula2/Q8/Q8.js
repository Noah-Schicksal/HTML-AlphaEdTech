
const botaoAdd = document.getElementById("add");
const lista = document.getElementById("lista");

// clique no botão adicionar
botaoAdd.addEventListener("click", () => {

    //cria uma nova div que vai representar uma linha (menos | valor | mais)
    const linha = document.createElement("div");
    linha.classList.add("linha"); // aplica a classe CSS

    //coloca dentro da linha os botões e o span de valor
    linha.innerHTML = `
        <button class="btn menos">-</button>
        <div class="valor">0</div>
        <button class="btn mais">+</button>
    `;

    //diciona a linha dentro do container principal
    lista.appendChild(linha);

    //elementos internos recém-criados
    const btnMenos = linha.querySelector(".menos"); // botão de diminuir
    const btnMais = linha.querySelector(".mais");   // botão de aumentar
    const valor = linha.querySelector(".valor");    // número exibido

    //aumenta o valor
    btnMais.addEventListener("click", () => {
        valor.textContent = Number(valor.textContent) + 1;
    });

    //diminui o valor
    btnMenos.addEventListener("click", () => {
        valor.textContent = Number(valor.textContent) - 1;
    });
});
