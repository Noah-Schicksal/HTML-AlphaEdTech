const min = document.getElementById("min");
const max = document.getElementById("max");
const sortear = document.getElementById("sortear");
const msg = document.getElementById("msg");
const result = document.getElementById("result");

sortear.addEventListener("click", () => {
    const minNumber = Number(min.value);
    const maxNumber = Number(max.value);

    // verifica se ambos são números
    if (isNaN(minNumber) || isNaN(maxNumber)) {
        msg.textContent = "Os valores digitados precisam ser números!";
        msg.style.color = "red";
        result.textContent = "";
        return;
    }

    // verificse são inteiros
    if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber)) {
        msg.textContent = "Os números precisam ser inteiros!";
        msg.style.color = "red";
        result.textContent = "";
        return;
    }

    // verifica se são positivos
    if (minNumber < 0 || maxNumber < 0) {
        msg.textContent = "Os números precisam ser maiores ou iguais a 0!";
        msg.style.color = "red";
        result.textContent = "";
        return;
    }

    // verifica se o mínimo não é maior que o máximo
    if (minNumber > maxNumber) {
        msg.textContent = "O primeiro campo não pode ser maior que o segundo!";
        msg.style.color = "red";
        result.textContent = "";
        return;
    }

  
    msg.textContent = "";
    const sorteado = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    result.textContent = `Número sorteado: ${sorteado}`;
});