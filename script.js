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

// Emailjs

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_q7fvqtf",
      "template_9zkyxlm",
      this
    ).then(
      function() {
        alert("Message sent successfully!");
        form.reset();
      },
      function(error) {
        alert("Failed to send message. Try again.");
        console.log(error);
      }
    );
  });




