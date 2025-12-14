const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

openModal.addEventListener("click", () => {
    modalOverlay.classList.add("open");
});

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
});


