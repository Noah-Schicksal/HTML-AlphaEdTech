const chute = document.querySelector("#chute");
const sortear = document.querySelector("#sortear");
const resultado = document.querySelector("#res");
const chutar = document.querySelector("#chutar");
let sorteados = [];

sortear.addEventListener("click", sorteio);
chutar.addEventListener("click", comparacao);

function sorteio () {
    sorteados= [];
    resultado.textContent = "";

    while (sorteados.length < 6) {
        const n = (window.crypto.getRandomValues(new Uint32Array(1))[0] % 31);
        if(!sorteados.includes(n)){
            sorteados.push(n);
        }
    }
    console.log(sorteados);
}

function comparacao () {

    resultado.textContent = "";
    const valorChute = Number(chute.value);

    if(sorteados.includes(valorChute)){
        resultado.textContent = "Você acertou!";
        resultado.style.color = "green";
    }else{
        resultado.textContent = "Você errou!";
        resultado.style.color = "red";
    }
}