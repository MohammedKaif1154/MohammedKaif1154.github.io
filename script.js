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
