const inicio = document.querySelector("#inicio");
const fim = document.querySelector("#fim");
const msgError = document.querySelector("#msg");
const btnListar = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btnListar.addEventListener("click", validar);

function validar () {
    const inicioNum = Number(inicio.value);
    const fimNum = Number(fim.value)

    if(fimNum === NaN || inicioNum === NaN){
        msgError.textContent = "Os valores digitados devem ser números inteiros";
        msgError.style.color = "red";
        return;
    }
    if(!Number.isInteger(inicioNum) || !Number.isInteger(fimNum)) {
        msgError.textContent = "Os valores digitados devem ser números inteiros";
        msgError.style.color = "red";
        return;
    }
    if(inicioNum > fimNum){
        msgError.textContent = "o número inicio não pode ser maior que o número fim";
        msgError.style.color = "red";
        return;
    }

    let i = inicioNum

    while(i < fimNum){
        const newLi = document.createElement("li");
        newLi.textContent = i;
        lista.appendChild(newLi);
        i++;
    }

}