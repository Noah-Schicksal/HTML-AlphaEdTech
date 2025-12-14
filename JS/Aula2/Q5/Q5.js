const outer = document.getElementById("outer");
const inner = document.getElementById("inner");


let isActive = false;

// Distância do passo normal e com shift
const NORMAL_STEP = 10;
const SHIFT_STEP = 100;

// fun de ativar a div ao clicar
inner.addEventListener("click", (e) => {
    e.stopPropagation(); // impede clique de subir e "desativar" a div

    isActive = true;
    inner.classList.add("active");
});


// fun de desativar quando clicar fora da div
document.addEventListener("click", () => {
    if (isActive) {
        isActive = false;
        inner.classList.remove("active");
    }
});

// fun de movimentar pelo teclado
document.addEventListener("keydown", (e) => {
    if (!isActive) return; // só move quando está ativa

    //erifica se shift está pressionado
    const step = e.shiftKey ? SHIFT_STEP : NORMAL_STEP;

    // pega posição atual
    let left = inner.offsetLeft;
    let top = inner.offsetTop;

    // tmanho das divs
    const outerWidth = outer.clientWidth;
    const outerHeight = outer.clientHeight;
    const innerWidth = inner.clientWidth;
    const innerHeight = inner.clientHeight;


    //movimento baseado na tecla pressionada
    if (e.key === "ArrowLeft") {
        left -= step;

        //impede de passar da borda esquerda
        if (left < 0) left = 0;
    }

    if (e.key === "ArrowRight") {
        left += step;

        //mpede de passar da borda direita
        if (left + innerWidth > outerWidth)
            left = outerWidth - innerWidth;
    }

    if (e.key === "ArrowUp") {
        top -= step;

        // impede passar da borda superior
        if (top < 0) top = 0;
    }

    if (e.key === "ArrowDown") {
        top += step;

        // impede passar da borda inferior
        if (top + innerHeight > outerHeight)
            top = outerHeight - innerHeight;
    }

    // stualiza a posição final na tela
    inner.style.left = left + "px";
    inner.style.top = top + "px";
});
