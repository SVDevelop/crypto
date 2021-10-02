const modals = document.querySelectorAll(".auth");

const modal1 = document.querySelector(".auth#modal1");
const modal2 = document.querySelector(".auth#modal2");
const modal3 = document.querySelector(".auth#modal3");

const openModal = modal => modal.classList.add("active");
const cloesModal = modal => modal.classList.remove("active");

const closeBtns = () =>
  document
    .querySelectorAll(".btn__close")
    .forEach(btn =>
      btn.addEventListener("click", e => cloesModal(e.target.parentElement))
    );

modals.forEach(modal =>
  modal.addEventListener("click", e => {
    if (e.target.classList.contains("btn__close")) {
      closeBtns();
    }
    if (e.target.dataset.next) {
      closeBtns();

      openModal(document.querySelector(`.auth#modal${e.target.dataset.next}`));
    }
  })
);

document
  .querySelector(".btn-login")
  .addEventListener("click", () => openModal(modal1));
document
  .querySelector(".main__btn")
  .addEventListener("click", () => openModal(modal1));
