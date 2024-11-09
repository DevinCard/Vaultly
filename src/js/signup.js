document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup.js is loaded!");

    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let hasError = false;

        document.querySelectorAll(".error-message").forEach((error) => {
            error.textContent = "";
            error.style.display = "none";
        });

        document.querySelectorAll("input").forEach((input) => {
            input.setCustomValidity(""); 
        });

        const firstNameField = document.getElementById("first-name");
        const firstNameError = document.getElementById('first-name-error');
        const firstNameValue = firstNameField.value.trim();
        
        if (firstNameField.value.trim().length < 2) {
            hasError = true;
            firstNameError.textContent = "First name must be at least 2 characters.";
            firstNameError.style.display = "block";
            firstNameField.setCustomValidity("First name must be at least 2 characters.");
        }

        const lastNameField = document.getElementById("last-name");
        const lastNameError = document.getElementById("last-name-error");
        if (lastNameField.value.trim().length < 2) {
            hasError = true;
            lastNameError.textContent = "Last name must be at least 2 characters.";
            lastNameError.style.display = "block";
            lastNameField.setCustomValidity("Last name must be at least 2 characters.");
        }

        const emailAddressField = document.getElementById("email-address");
        const emailAddressError = document.getElementById("email-error");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailAddressField.value.trim())) {
            hasError = true;
            emailAddressError.textContent = "Please enter a valid email address.";
            emailAddressError.style.display = "block";
            emailAddressField.setCustomValidity("Please enter a valid email address.");
        }

        const passwordField = document.getElementById("password");
        const passwordError = document.getElementById("password-error");
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/;
        if (!passwordRegex.test(passwordField.value)) {
            hasError = true;
            passwordError.textContent = "Password must include one letter, one number, and one special character.";
            passwordError.style.display = "block";
            passwordField.setCustomValidity("Password must include one letter, one number, and one special character.");
        }

        // Confirm password validation
        const confirmPasswordField = document.getElementById("confirm-password");
        const confirmPasswordError = document.getElementById("confirm-password-error");
        if (passwordField.value !== confirmPasswordField.value) {
            hasError = true;
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.style.display = "block";
            confirmPasswordField.setCustomValidity("Passwords do not match.");
        }

        // If there are errors, stop submission
        if (hasError) {
            return;
        }

        // Log values in console (for testing purposes, remove after final testing)
        console.log("First Name:", firstNameField.value.trim());
        console.log("Last Name:", lastNameField.value.trim());
        console.log("Email:", emailAddressField.value.trim());
        console.log("Password:", passwordField.value.trim());

        // Display success message
        alert("Sign-up successful!");
    });
});
