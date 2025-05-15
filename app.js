// Initialize EmailJS with your user ID
emailjs.init('vJo4TgbuWpcexv1vR'); // e.g. user_ABC123xyz

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form');
  if (!form) return console.error('Form #quote-form not found');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Send the form via EmailJS
    emailjs.sendForm(
      'service_vjymenm',    // e.g. 'service_abcd1234'
      'template_hqtcy8r',   // e.g. 'template_xyz987'
      this                  // the form element
    )
    .then(() => {
      alert('✅ Your quote request has been sent!');
      form.reset();
    }, (err) => {
      console.error('EmailJS error:', err);
      alert('❌ Failed to send. Please try again later.');
    });
  });
});
