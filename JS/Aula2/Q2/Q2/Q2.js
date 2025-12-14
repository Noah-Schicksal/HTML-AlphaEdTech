const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const msg = document.querySelector("#alert");
const resultado = document.querySelector("#resultado"); // ← elemento fixo

btn.addEventListener("click", btnClick);

function numberConvert(num){
    switch(num){
        case 0: return "zero"; 
        case 1: return "um";
        case 2: return "dois";
        case 3: return "três";
        case 4: return "quatro";
        case 5: return "cinco";
        case 6: return "seis";
        case 7: return "sete";
        case 8: return "oito";
        case 9: return "nove";
        case 10: return "dez";
        default: return null;
    }
}

function btnClick (){
    const val = Number(input.value);
    const convertedText = numberConvert(val);

    if(convertedText === null || input.value.trim() === ""){
        msg.textContent = "Insira um valor de 0 à 10";
        msg.style.color = "red";
        resultado.textContent = ""; // limpa o resultado
        return;
    }

    //atualiza o texto do elemento
    resultado.textContent = convertedText;

    input.value = "";
    input.focus();
    msg.textContent = "";
}
