/* ========================= */
/* Typing Effect */
/* ========================= */


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Auto close on link click (UX boost)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const text = ["Frontend Developer", "UI Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typeEffect() {
  if (count === text.length) count = 0;

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(typeEffect, 2000);
  } else {
    setTimeout(typeEffect, 100);
  }
})();

/* ========================= */
/* Skill Bar Animation */
/* ========================= */

const skillBars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  skillBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    const barTop = bar.getBoundingClientRect().top;

    if (barTop < window.innerHeight - 50) {
      bar.style.width = value + "%";
    }
  });
});

/* ========================= */
/* Contact Form Validation */
/* ========================= */

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Please enter a valid email address");
    return;
  }

  alert("✅ Message sent successfully!");
  contactForm.reset();
});
