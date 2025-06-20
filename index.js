const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  themeToggle.textContent = body.classList.contains('light') ? '🌙' : '☀️';
});

// Mouse move background
const bg = document.getElementById('bg-overlay');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 50;
  const y = (e.clientY / window.innerHeight) * 50;
  bg.style.transform = `translate(-${x}%, -${y}%)`;
});

// Contact form
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lime";
    form.reset();
  } else {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
  }
});
