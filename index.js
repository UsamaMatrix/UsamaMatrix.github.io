// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    themeToggle.textContent = body.classList.contains('light') ? '🌙' : '☀️';
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});
