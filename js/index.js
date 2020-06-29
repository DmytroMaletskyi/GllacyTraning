let firstDot = document.querySelector(".first-dot");
let secondDot = document.querySelector(".second-dot");
let thirdDot = document.querySelector(".third-dot");
let sliderDots = document.querySelectorAll(".slider-dots button");
let promoSlides = document.querySelectorAll(".promo-slide");
let pageBody = document.querySelector(".page-body");

// Contact Form Variables
let contactButton = document.querySelector(".contact-box .orange-button");
let overlay = document.querySelector(".overlay");
let popupContactUs = document.querySelector(".popup-contact-us");
let crossButton = document.querySelector(".cross-button");

firstDot.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!firstDot.classList.contains("current")) {
    sliderDots.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    promoSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    if (pageBody.classList.contains("background-two")) {
      pageBody.classList.remove("background-two")
    } else if (pageBody.classList.contains("background-three")) {
      pageBody.classList.remove("background-three")
    }

    firstDot.classList.add("current");
    currentIndex = 0;
    promoSlides[currentIndex].classList.add("current");
    pageBody.classList.add("background-one");
  }
});

secondDot.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!secondDot.classList.contains("current")) {
    sliderDots.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    promoSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    if (pageBody.classList.contains("background-one")) {
      pageBody.classList.remove("background-one")
    } else if (pageBody.classList.contains("background-three")) {
      pageBody.classList.remove("background-three")
    }

    secondDot.classList.add("current");
    currentIndex = 1;
    promoSlides[currentIndex].classList.add("current");
    pageBody.classList.add("background-two");
  }
});

thirdDot.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!thirdDot.classList.contains("current")) {
    sliderDots.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    promoSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    if (pageBody.classList.contains("background-one")) {
      pageBody.classList.remove("background-one")
    } else if (pageBody.classList.contains("background-two")) {
      pageBody.classList.remove("background-two")
    }

    thirdDot.classList.add("current");
    currentIndex = 2;
    promoSlides[currentIndex].classList.add("current");
    pageBody.classList.add("background-three");
  }
});

// Contact Us Popup

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!overlay.classList.contains("overlay-show")) {
    overlay.classList.add("overlay-show");
  }

  if (!popupContactUs.classList.contains("popup-show")) {
    popupContactUs.classList.add("popup-show");
  }
});

crossButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (overlay.classList.contains("overlay-show")) {
    overlay.classList.remove("overlay-show");
  }

  if (popupContactUs.classList.contains("popup-show")) {
    popupContactUs.classList.remove("popup-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupContactUs.classList.contains("popup-show")) {
      evt.preventDefault();
      popupContactUs.classList.remove("popup-show");
    }
    if (overlay.classList.contains("overlay-show")) {
      evt.preventDefault();
      overlay.classList.remove("overlay-show");
    }
  }
});

