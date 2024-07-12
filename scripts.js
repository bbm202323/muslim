document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('success-message').innerText = 'Thank you for registering! We will contact you soon.';
    this.reset();
});
