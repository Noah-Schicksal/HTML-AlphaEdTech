const nomes = document.querySelector("#nomes");
const listar = document.querySelector("#listar");
const tabela = document.querySelector("#tabela");

listar.addEventListener("click", listarNomes)

function listarNomes (){
    const palavras = nomes.value.split(",")
    const titleTr = document.createElement("tr");
    const thInd = document.createElement("th");
    const thVal = document.createElement("th");

    thInd.textContent = "Indice";
    thVal.textContent = "Valor";

    titleTr.appendChild(thInd);
    titleTr.appendChild(thVal);
    
    tabela.appendChild(titleTr);

    palavras.forEach((valor, indice) => {
        const newTR = document.createElement("tr");
        const tdIndice = document.createElement("td");
        const tdValor = document.createElement("td");

        tdIndice.textContent = indice;
        tdValor.textContent = valor.trim();

        newTR.appendChild(tdIndice);
        newTR.appendChild(tdValor);

        tabela.appendChild(newTR);
    });
}