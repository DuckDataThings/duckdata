const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("rightMenu");

toggle.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
