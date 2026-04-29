document.addEventListener("DOMContentLoaded", () => {

  const texts = [
    "I build machine learning solutions.",
    "I work with Python, SQL, and Azure.",
    "I create data-driven applications.",
    "I love solving real-world problems with AI."
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.innerHTML = currentText.substring(0, charIndex + 1);
      charIndex++;
    } else {
      typingElement.innerHTML = currentText.substring(0, charIndex - 1);
      charIndex--;
    }

    let speed = isDeleting ? 40 : 70;

    // When full text typed
    if (!isDeleting && charIndex === currentText.length) {
      speed = 1500;  // pause
      isDeleting = true;
    }

    // When fully deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();


  // 🔥 SCROLL ANIMATION (keep this)
  const elements = document.querySelectorAll(".fade");

  function showOnScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  showOnScroll();
  window.addEventListener("scroll", showOnScroll);

});
