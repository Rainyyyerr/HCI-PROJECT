const btn = document.getElementById("interactiveButton");
const image = document.getElementById("heroImage");
const modeToggle = document.getElementById("toggleMode");

const heading = document.getElementById("mainHeading");
const text = document.getElementById("mainText");

const incFont = document.getElementById("increaseFont");
const decFont = document.getElementById("decreaseFont");
const incImage = document.getElementById("increaseImage");
const decImage = document.getElementById("decreaseImage");

let fontSize = 3; // in rem
let imageScale = 1; // multiplier

// Bounce effect
btn.addEventListener("click", () => {
  image.classList.add("bounce");
  setTimeout(() => {
    image.classList.remove("bounce");
  }, 600);
});

// Dark mode toggle
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Font resize
incFont.addEventListener("click", () => {
  fontSize += 0.2;
  heading.style.fontSize = `${fontSize}rem`;
  text.style.fontSize = `${fontSize * 0.6}rem`;
});

decFont.addEventListener("click", () => {
  fontSize = Math.max(1.5, fontSize - 0.2);
  heading.style.fontSize = `${fontSize}rem`;
  text.style.fontSize = `${fontSize * 0.6}rem`;
});

// Image resize
incImage.addEventListener("click", () => {
  imageScale += 0.1;
  image.style.transform = `scale(${imageScale})`;
});

decImage.addEventListener("click", () => {
  imageScale = Math.max(0.5, imageScale - 0.1);
  image.style.transform = `scale(${imageScale})`;
});
