const inputValue = document.querySelector("input");
const button = document.querySelector("button");

function printText() {
  alert(inputValue.value);
}

button.addEventListener("click", printText);

// o erro estava em -> const inputValue = document.querySelector("input").value;
// isso faz o valor do input ser lido uma única vez quando a página é iniciada
// então se input está vazio quando a página é iniciada o valor de input value será "" ou null
// então ao apertar o botão, exibiamoso valor antigo "" ao invés do que foi digitado no campo para input
