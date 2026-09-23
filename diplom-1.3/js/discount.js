const discountPopup = document.querySelector(".header__discount-pop-up");
const discountCloseButton = document.querySelector(".discount__close-button");

discountCloseButton?.addEventListener("click", () => {
  discountPopup?.classList.add("header__discount-pop-up--hidden");
});
