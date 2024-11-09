document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup.js is loaded!");

    // Select form
    const signupForm = document.getElementById("signup-form");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const nonMatchingPasswords = document.getElementById("non-matching-passwords");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const emailAddress = document.getElementById("email-address").value;
        const password = passwordField.value;  
        const confirmPassword = confirmPasswordField.value;  

        // Check if passwords match + error
        passwordField.classList.remove("error");
        confirmPasswordField.classList.remove("error");
        nonMatchingPasswords.style.display = "none";
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");

        let hasError = false;

        if (firstName.length < 2 || firstName.length > 50) {
            alert("First name must be between 2 and 50 characters.");
            hasError = true;
        }

        if (lastName.length < 2 || lastName.length > 50) {
            alert("Last name must be between 2 and 50 characters.")
            hasError = true;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailAddress)) {
            alert("Please enter a valid email address.");
            hasError = true;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordField.classList.add("error");
            passwordField.setCustomValidity("Password must contain at least 8 characters, 1 number, and 1 special character.");
            passwordField.reportValidity();
            hasError = true;
        }
        if (password !== confirmPassword) {
            nonMatchingPasswords.style.display = "inline"; 
            passwordField.classList.add("error")
            confirmPasswordField.classList.add("error");
            confirmPasswordField.setCustomValidity("Passwords do not match.");
            passwordField.setCustomValidity("Passwords do not match.");
            confirmPasswordField.reportValidity();
            hasError = true;
            
        if (hasError) {
            return;
        }

     // Log values in console (FOR TEST, DO NOT TOUCH)
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", emailAddress);
        console.log("Password:", password);

        // Display success message or handle further
        alert("Sign-up successful!");
        }

    });
});
