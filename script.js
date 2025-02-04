"use strict";

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'true');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('darkMode', 'false');
    darkModeToggle.textContent = 'Dark Mode';
  }
});

// Beim Laden: Dark Mode-Präferenz prüfen
if(localStorage.getItem('darkMode') === 'true'){
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Light Mode';
} else {
  document.body.classList.remove('dark-mode');
  darkModeToggle.textContent = 'Dark Mode';
}

// Navigation: Aktiven Link hervorheben und smooth scrollen
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// H.E.R.S.-Quiz Logik
document.getElementById('hersQuiz').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  for (let i = 1; i <= 6; i++) {
    const radios = document.getElementsByName('q' + i);
    radios.forEach(radio => {
      if (radio.checked && radio.value === "1") {
        score += 1;
      }
    });
  }
  let resultText = '';
  if (score <= 3) {
    resultText = `<strong>Score: ${score}</strong> – Es ist unwahrscheinlich, dass der/die Betroffene noch Kontakt sucht. (Tendenz: endgültiger Schnitt)`;
  } else if (score === 4) {
    resultText = `<strong>Score: ${score}</strong> – Es besteht die Tendenz zu einer oberflächlichen Fortführung des Kontakts (z. B. Freundschaft mit Nebenfunktionen).`;
  } else if (score >= 5) {
    resultText = `<strong>Score: ${score}</strong> – Es folgt oft ein obsessives, beinahe hysterisches Bemühen, die frühere Beziehung wiederherzustellen (starkes "Hoovering").`;
  }
  const quizResultDiv = document.getElementById('quizResult');
  quizResultDiv.innerHTML = resultText;
  quizResultDiv.style.display = 'block';
  quizResultDiv.scrollIntoView({ behavior: 'smooth' });
});

// Kontaktformular Logik
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const contactResultDiv = document.getElementById('contactResult');
  // Simuliertes Feedback – hier kann z. B. ein AJAX-Request realisiert werden
  contactResultDiv.innerHTML = "<p>Vielen Dank für dein Feedback! Wir melden uns so bald wie möglich.</p>";
  contactResultDiv.style.display = 'block';
  this.reset();
  contactResultDiv.scrollIntoView({ behavior: 'smooth' });
});
