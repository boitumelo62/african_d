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

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (hamburger.id === "active") {
    hamburger.removeAttribute("id");
  } else {
    hamburger.setAttribute("id", "active");
  }
});

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
