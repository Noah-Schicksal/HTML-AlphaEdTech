const input = document.getElementById("input");
const btn = document.getElementById("add");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    const valDig = input.value;
    if(valDig !== ""){
        const li = document.createElement("li");
        li.textContent = valDig;
        list.appendChild(li);
        input.value = "";
    }
    else{
        alert("valor inválido!")
    }
})
