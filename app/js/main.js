"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

var modals = document.querySelectorAll(".auth");
var modal1 = document.querySelector(".auth#modal1");
var modal2 = document.querySelector(".auth#modal2");
var modal3 = document.querySelector(".auth#modal3");

var openModal = function openModal(modal) {
  return modal.classList.add("active");
};

var cloesModal = function cloesModal(modal) {
  return modal.classList.remove("active");
};

var closeBtns = function closeBtns() {
  return document.querySelectorAll(".btn__close").forEach(function (btn) {
    return btn.addEventListener("click", function (e) {
      return cloesModal(e.target.parentElement);
    });
  });
};

modals.forEach(function (modal) {
  return modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn__close")) {
      closeBtns();
    }

    if (e.target.dataset.next) {
      closeBtns();
      openModal(document.querySelector(".auth#modal".concat(e.target.dataset.next)));
    }
  });
});
document.querySelector(".btn-login").addEventListener("click", function () {
  return openModal(modal1);
});
document.querySelector(".main__btn").addEventListener("click", function () {
  return openModal(modal1);
});
//# sourceMappingURL=main.js.map
