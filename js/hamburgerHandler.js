const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const homepage = document.getElementById("home");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});
