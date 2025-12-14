const input = document.getElementById("telefone");
const button = document.getElementById("validar");
const msg = document.getElementById("msg");

button.addEventListener("click", () => {
    const telefone = input.value.trim();

    // Regex para (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    if (regex.test(telefone)) {
        msg.textContent = "Isso com certeza é um número de telefone";
        msg.style.color = "green";
    } else {
        msg.textContent = "Não é um telefone válido";
        msg.style.color = "red";
    }
});
