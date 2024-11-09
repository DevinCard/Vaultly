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

        if (password !== confirmPassword) {
            nonMatchingPasswords.style.display = "inline"; 
            passwordField.classList.add("error");
            confirmPasswordField.classList.add("error");
        } else {

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
