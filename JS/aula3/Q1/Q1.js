const lembrete = document.querySelector("#lembrete");
const data = document.querySelector("#data");
const btnAdd = document.querySelector("#addLembrete");
const btnMostrar = document.querySelector("#mostrar");
const lista = document.querySelector("#lista");
const msg = document.querySelector("#msg")
const lembretes = [];

let LSdisponivel = false;

btnAdd.addEventListener("click", addLembrete);
btnMostrar.addEventListener("click", renderLembretes);


document.addEventListener("DOMContentLoaded", () => {
    dispLS();
    if(!LSdisponivel){
        msg.textContent = "Alerta: Local Storage inativo, os dados digitados não podem ser salvos";
        msg.style.color = "red";
    }

    const dados = localStorage.getItem("lembretes");
        if(dados){
            lembretes.push(...JSON.parse(dados));
        }
});

function dispLS () {
    try{
        const teste = "teste"
        localStorage.setItem(teste, teste);
        localStorage.removeItem(teste);
        LSdisponivel = true;
        return true;
    }catch (e) {
        return false;
    }
}

function addLembrete () {

    if(
        lembrete.value.trim() === "" || data.value === ""
    ) {
        msg.textContent = "Os campos não podem estar vazios!";
        msg.style.color = "red";
        return;
    }

    if(!LSdisponivel) return;
        const novoLembrete = {
        nome: lembrete.value.trim(),
        data: data.value
    };

    lembretes.push(novoLembrete);

    lembrete.value = "";
    data.value = "";

    localStorage.setItem("lembretes", JSON.stringify(lembretes));
}

function renderLembretes () {
    lista.innerHTML = "";

    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth()+1).padStart(2, "0"); //se a string tem menos de 2 caracteres, adiciono um 0 na frente
    const dia = String(hoje.getDate()).padStart(2, "0"); //se a string tem menos de 2 caracteres, adiciono um 0 na frente

    

    const dataHoje = `${ano}-${mes}-${dia}`;
    const dataFormat = `${dia}/${mes}/${ano}`

    let encontrou = false;

    lembretes.forEach(lembrete => {
        if(lembrete.data === dataHoje){
            encontrou = true;
            const newLi = document.createElement("li");
            newLi.textContent = `${lembrete.nome} - ${dataFormat}`;
            lista.appendChild(newLi);
        }
    });

    if(!encontrou){
        const newLi = document.createElement("li");
            newLi.textContent = `Não há lembretes hoje!`;
            lista.appendChild(newLi);
    }
}