const functionToggle = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

const navbar = document.querySelector(".navbar");
const overplay = document.querySelector(".overplay");
const closeBtn = document.querySelector(".nav-close-btn");
const openBtn = document.querySelector(".nav-open-btn");

const ToggleNav = () => {
  navbar.classList.toggle("active");
  overplay.classList.toggle("active");
};

functionToggle(openBtn, "click", ToggleNav);
functionToggle(closeBtn, "click", ToggleNav);
functionToggle(overplay, "click", ToggleNav);

const navLink = document.querySelectorAll(".navbar-link");
const removeToggle = () => {
  navbar.classList.remove("active");
  overplay.classList.remove("active");
};
functionToggle(navLink, "click", removeToggle);

const scrollWindow = () => {
  if (window.scrollY >= 500) {
    navbar.classList.remove("active");
    overplay.classList.remove("active");
  }
};

functionToggle(window, "scroll", scrollWindow);

// Slider

const slider = document.querySelector(".slide-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// default position slider
let slidePos = 0;

// total slide

const totalSlider = 5;
// next
const nextToSlider = () => {
  slidePos++;
  slider.style.transform = `translateX(-${slider.children[slidePos].offsetLeft}px)`;
  slideEnd();
};

functionToggle(nextBtn, "click", nextToSlider);
// prev
const prevToSlider = () => {
  slidePos--;
  slider.style.transform = `translateX(-${slider.children[slidePos].offsetLeft}px)`;
  slideEnd();
};

functionToggle(prevBtn, "click", prevToSlider);

// when

function slideEnd() {
  if (slidePos >= totalSlider - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (slidePos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}
slideEnd();

// product quantity function

const totalPriceElem = document.querySelector(".price");
const qtyElem = document.querySelector(".data-qty");
const qtyMinusBtn = document.querySelector(".minus-btn");
const qtyPlusBtn = document.querySelector(".plus-btn");

// set the product default quantity

let qty = 1;

// set the product default price

let producePrice = 125;

// set the initial total price
let totalPrice = 125;

const increaseProductQty = () => {
  qty++;
  totalPrice = qty * producePrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
};

functionToggle(qtyPlusBtn, "click", increaseProductQty);

const decreaseProduct = () => {
  if (qty > 1) qty--;

  totalPrice = qty * producePrice;
  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
};

functionToggle(qtyMinusBtn, "click", decreaseProduct);
