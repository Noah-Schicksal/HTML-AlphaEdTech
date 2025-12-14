const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");
const msg = document.querySelector("#alert");

// Objeto usado como mapa
const numberMap = {
    0: "zero",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez"
};

btn.addEventListener("click", btnClick);

function numberConvert(num){
    return numberMap[num] ?? null; 
}

function addOnList(text){
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
}

function btnClick (){
    const val = input.value.trim();

    const num = Number(val);
    const convertedText = numberConvert(num);

    if(convertedText === null || input.value.trim() === ""){
        msg.textContent = "Insira um valor entre 0 e 10!";
        msg.style.color = "red";
        return;
    }

    addOnList(convertedText);

    msg.textContent = "";
    input.value = "";
    input.focus();
}
