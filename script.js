const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // Change icon
  if (mobileMenu.classList.contains("active")) {
    toggleBtn.textContent = "✖";
  } else {
    toggleBtn.textContent = "☰";
  }
});

window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});