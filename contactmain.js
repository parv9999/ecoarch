document.addEventListener("DOMContentLoaded", function() {
    // Attach the validateForm function to the form's submit event
    document.getElementById('contactForm').addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please correct the errors and try again.");
    } else {
        alert("Thank you for your message! We will get back to you soon.");
        // Optionally, you can clear the form fields here
        document.getElementById('contactForm').reset();
    }
}
