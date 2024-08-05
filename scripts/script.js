document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('formMessage');

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.text())
    .then(text => {
        formMessage.textContent = text;
        form.reset();
    })
    .catch(error => {
        formMessage.textContent = "There was an error sending your message.";
    });
});
