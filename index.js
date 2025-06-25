// 🌙 Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const icon = document.getElementById('theme-toggle');
  icon.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// 🎯 Animated Matrix BG
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.getElementById('bg-overlay').style.transform = `translate(-${x}%, -${y}%)`;
});

// 📩 EmailJS Setup
emailjs.init("iNAnmokH7bbLaGij5"); // ✅ Your Public Key here

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return;
  }

  const templateParams = {
    from_name: name,
    reply_to: email,
    message: message
  };

  emailjs.send("service_kbi84ho", "template_ak7tlim", templateParams)
    .then(function () {
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "lime";
      form.reset();
    }, function (error) {
      console.error('FAILED...', error);
      msg.textContent = "❌ Failed to send. Please try again.";
      msg.style.color = "orange";
    });
});
