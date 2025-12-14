const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

let isActive = false;    // indica se a div está clicada 
let isDragging = false;  // indica se está arrastando
let offsetX = 0;         // posição onde clicou dentro da div
let offsetY = 0;

//ativar a div ao clicar nela (fica azul)
inner.addEventListener("mousedown", (e) => {
    e.stopPropagation(); // impede click de subir e desativar

    isActive = true;
    isDragging = true;
    inner.classList.add("active");

    // guarda a posição do clique dentro da div
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

//desativar ao clicar fora
document.addEventListener("mousedown", (e) => {
    // se clicou fora do inner
    if (e.target !== inner) {
        isActive = false;
        inner.classList.remove("active");
    }
});

//ovimento do mouse enquanto arrasta
document.addEventListener("mousemove", (e) => {
    if (!isActive || !isDragging) return;

    const rect = outer.getBoundingClientRect();

    //calcula posição desejada
    let left = e.clientX - rect.left - offsetX;
    let top = e.clientY - rect.top - offsetY;

    const outerWidth = outer.clientWidth;
    const outerHeight = outer.clientHeight;
    const innerWidth = inner.clientWidth;
    const innerHeight = inner.clientHeight;

    //bloqueios das bordas
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + innerWidth > outerWidth)
        left = outerWidth - innerWidth;
    if (top + innerHeight > outerHeight)
        top = outerHeight - innerHeight;

    //aplica novas posições
    inner.style.left = left + "px";
    inner.style.top = top + "px";
});

//soltou o mouse → parar de arrastar
document.addEventListener("mouseup", () => {
    isDragging = false;
});
