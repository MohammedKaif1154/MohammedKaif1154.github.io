document.addEventListener("DOMContentLoaded", () => {

  const text = "I build machine learning solutions using Python, SQL, and Azure.";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 30);
    }
  }

  typeEffect();

  const elements = document.querySelectorAll(".fade");

  function showOnScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;

      if (position < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  // Run once on load
  showOnScroll();

  // Run on scroll
  window.addEventListener("scroll", showOnScroll);

});
