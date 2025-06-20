// Dark / Light Theme
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const icon = document.getElementById('theme-toggle');
  icon.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Mouse-based background movement
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.getElementById('bg-overlay').style.transform = `translate(-${x}%, -${y}%)`;
});

// Contact form validation
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
