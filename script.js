// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// ===============================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// ===============================
// FOOTER CURRENT YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ===============================
// SCROLL ANIMATION
// ===============================

// იმ ელემენტებს, რომლებსაც animation გვინდა,
// JavaScript-ით ვამატებთ "reveal" კლასს.

const animatedElements = document.querySelectorAll(
  ".project-card, .service-card, .about-content, .about-image",
);

animatedElements.forEach(function (element) {
  element.classList.add("reveal");
});

// IntersectionObserver ამოწმებს,
// როდის გამოჩნდება ელემენტი ეკრანზე.

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

animatedElements.forEach(function (element) {
  observer.observe(element);
});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    header.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.06)";
  } else {
    header.style.boxShadow = "none";
  }
});
