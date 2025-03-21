document.addEventListener("DOMContentLoaded", function () {
    // Form validation
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector("button");

    // Helper function to show error messages
    function showError(input, message) {
        const parent = input.parentElement;
        const error = document.createElement("span");
        error.className = "error";
        error.style.color = "red";
        error.textContent = message;
        if (!parent.querySelector(".error")) {
            parent.appendChild(error);                                       //this is the js code preeviously used in in conatctmain js 
        }                                                                    // then it is replaced by short one which is doing same work
    }                            
                                                                            // GO DOWN TO DEEP KNOWLEDAGE WHAT IS DIFF BTW BOTH CODES
    // Helper function to clear error messages
    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector(".error");
        if (error) {
            error.remove();
        }
    }

    // Validate name
    function validateName() {
        clearError(nameInput);
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            return false;
        }
        return true;
    }

    // Validate email
    function validateEmail() {
        clearError(emailInput);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required.");
            return false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Invalid email address.");
            return false;
        }
        return true;
    }

    // Validate message
    function validateMessage() {
        clearError(messageInput);
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message is required.");
            return false;
        }
        return true;
    }

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            // If all fields are valid, simulate form submission
            alert("Thank you for your message! We will get back to you soon.");
            form.reset(); // Reset the form fields
        } else {
            alert("Please correct the errors and try again.");
        }
    });

    // Add event listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
});
 

                   


// 1. Structure and Complexity:
// First Code:
//                                                                                                                 
// Complexity: More complex and detailed.
// Functions: It has separate functions for validating each form field (validateName, validateEmail, validateMessage), and helper functions for showing and clearing error messages.
// Real-time Validation: Includes real-time validation by adding input event listeners to form fields.
// Error Handling: Shows specific error messages next to the form fields using dynamically created <span> elements.
// User Experience: Provides immediate feedback to the user as they fill out the form.
// Second Code:
// 
// Complexity: Simpler and more straightforward.
// Functions: A single validateForm function handles the entire validation process.
// Real-time Validation: Does not include real-time validation; the validation occurs only when the form is submitted.
// Error Handling: Shows a generic alert message if any field is empty; no specific error messages for individual fields.
// User Experience: Offers less detailed feedback, with only a single alert box showing validation errors.
// 2. User Feedback:
// First Code:
// 
// Provides specific, field-level error messages.
// Allows users to see which fields need correction without submitting the form.
// Enhances user experience by showing validation feedback immediately as the user types.
// Second Code:
// 
// Displays a general alert if any field is empty.
// Requires users to correct errors after attempting to submit the form.
// Less user-friendly since it doesn’t highlight which fields are problematic.
// 3. Code Reusability and Maintainability:
// First Code:
// 
// More modular, making it easier to maintain and extend.
// Easier to update or modify individual validation rules without affecting others.
// Second Code:
// 
// Simpler, but less modular.
// Changes might require more significant adjustments to the entire validation process.
// Which Code is Better?
// First Code is better in terms of user experience, error handling, and code maintainability. It offers a more detailed, user-friendly validation process, which is especially important for forms that are critical or where input accuracy is essential.
// 
// Second Code might be preferred if you're looking for simplicity or if the form is not critical and you just need a basic validation check without extra complexity.