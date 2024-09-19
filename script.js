// header script

const header = document.querySelector("header");
const logo = document.getElementById("logo");

const fullLogo = "images/icons/main_logo.webp";
const iconLogo = "images/icons/small_logo.webp";

function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    logo.src = iconLogo;
  } else {
    header.classList.remove("scrolled");
    logo.src = fullLogo;
  }
}

window.addEventListener("scroll", checkScroll);

// cursor script

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.backgroundColor = "#dbdbdbbd";
    // cursor.style.border = "2px solid #bb9339";
    // cursor.style.scale = "2";
    cursor.style.transform = "translate(-25%, -25%)";
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.backgroundColor = "#bb9339";
    // cursor.style.border = "none";
    // cursor.style.scale = "1";
    cursor.style.transform = "translate(-50%, -50%)";
  });
});

// gallery script

document.addEventListener("DOMContentLoaded", () => {
  console.log("Instagram Gallery Loaded.");
});

// review script

const reviews = document.querySelectorAll(".contentlist");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let reviewIndex = 0;

reviews.forEach((review, index) => {
  review.style.display = index === 0 ? "block" : "none";
});

arrowLeft.addEventListener("click", () => {
  reviews[reviewIndex].style.display = "none";
  reviewIndex = reviewIndex > 0 ? reviewIndex - 1 : reviews.length - 1;
  reviews[reviewIndex].style.display = "block";
});

arrowRight.addEventListener("click", () => {
  reviews[reviewIndex].style.display = "none";
  reviewIndex = reviewIndex < reviews.length - 1 ? reviewIndex + 1 : 0;
  reviews[reviewIndex].style.display = "block";
});

// video script

const winevideo = document.querySelector(
  "#landing.wine-landing span video#horizontal"
);
const winevideo2 = document.querySelector(
  "#landing.wine-landing span video#vertical"
);
const wineH1 = document.querySelector("#landing.wine-landing span h1");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const muteButton = document.getElementById("mute");
const unmuteButton = document.getElementById("unmute");

if (window.matchMedia("(max-width: 768px)").matches) {
  winevideo.muted = true;
  pauseButton.addEventListener("click", function () {
    winevideo2.pause();
    wineH1.style.opacity = "1";
    pauseButton.style.display = "none";
    playButton.style.display = "block";
  });

  playButton.addEventListener("click", function () {
    winevideo2.play();
    wineH1.style.opacity = "0";
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  });

  unmuteButton.addEventListener("click", function () {
    winevideo2.muted = true;
    unmuteButton.style.display = "none";
    muteButton.style.display = "block";
  });

  muteButton.addEventListener("click", function () {
    winevideo2.muted = false;
    muteButton.style.display = "none";
    unmuteButton.style.display = "block";
  });
} else {
  winevideo2.muted = true;
  pauseButton.addEventListener("click", function () {
    winevideo.pause();
    wineH1.style.opacity = "1";
    pauseButton.style.display = "none";
    playButton.style.display = "block";
  });

  playButton.addEventListener("click", function () {
    winevideo.play();
    wineH1.style.opacity = "0";
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  });

  unmuteButton.addEventListener("click", function () {
    winevideo.muted = true;
    unmuteButton.style.display = "none";
    muteButton.style.display = "block";
  });

  muteButton.addEventListener("click", function () {
    winevideo.muted = false;
    muteButton.style.display = "none";
    unmuteButton.style.display = "block";
  });
}

// carousel script

const items = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function hideAllItems() {
  items.forEach((item) => {
    item.style.display = "none";
  });
}

function showCurrentItem() {
  hideAllItems();
  items[currentIndex].style.display = "block";
}

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % items.length;
  showCurrentItem();
});

prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showCurrentItem();
});

showCurrentItem();
