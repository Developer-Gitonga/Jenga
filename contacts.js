document.getElementById('submit-btn').addEventListener('click', function() {
    const nameValid = document.getElementById('form-name').value;
    const emailValid = document.getElementById('form-email').value;
    const messageValid = document.getElementById('form-message').value;

    if (nameValid = "") alert('Kindly enter a valid name');
    else if (emailValid = "") alert('Kindly enter a valid email');
    else if (messageValid = "") alert('Kindly write your message');
    else alert('Your message has been received. Thank you for your feedback.');
})