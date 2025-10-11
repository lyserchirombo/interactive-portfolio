function searchPortfolio() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  
  // Search in skill cards
  let skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "" : "none";
  });

  // Search in project cards
  let projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "" : "none";
  });
}
function searchPortfolio() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  
  // Search in skill cards
  let skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "" : "none";
  });

  // Search in project cards
  let projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "" : "none";
  });
}
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button icon
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

  // Save preference
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
});
function searchPortfolio() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();

  // Define keywords and their corresponding section IDs
  const sections = {
    'projects': 'projects',
    'skills': 'skills',
    'about': 'about',
    'contact': 'contact'
  };

  // Check if input matches any section keyword
  for (let keyword in sections) {
    if (input.includes(keyword)) {
      document.getElementById(sections[keyword]).scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  // Optional: alert if no match found
  alert('No matching section found. Try "projects", "skills", "about", or "contact".');
}