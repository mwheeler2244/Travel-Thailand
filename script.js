const mobileNav = document.querySelector(".mobile__nav-open");
const navMenu = document.querySelector(".nav__bar");
const navClose = document.querySelector(".mobile__nav-close");
const navLinks = document.querySelectorAll(".nav__links li a");

mobileNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
});

sr.reveal(".main__text-box", {
  origin: "left",
});

sr.reveal(".phuket", {
  origin: "top",
});
sr.reveal(".bangkok", {
  origin: "right",
});
sr.reveal(".pattaya", {
  origin: "left",
});
sr.reveal(".krabi", {
  origin: "top",
});

/// share icons

document.getElementById(
  "facebook-share"
).href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
document.getElementById(
  "twitter-share"
).href = `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20Muay%20Thai%20blog!`;
document.getElementById(
  "instagram-share"
).href = `https://www.instagram.com/?url=${encodeURIComponent(
  window.location.href
)}`;
