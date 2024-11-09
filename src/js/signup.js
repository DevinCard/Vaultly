document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup.js is loaded!");

    // Select form
    const signupForm = document.getElementById("signup-form");

    if (!signupForm) {
        console.log("Signup form not found in DOM!");
        return;
    }
    
    // Add event listener for form submission
     signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const emailAddress = document.getElementById("email-address").value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const nonMatchingPasswords = document.getElementById("non-matching-passwords");

    if (!signupForm || !password || !confirmPassword || !nonMatchingPasswords) {
        console.error("One or more elements not found in the DOM!");
        return;
    }

        // Get value from input fields on signup form
        
        


    // Check if passwords match + error

    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";
    nonMatchingPasswords.style.borderColor = "none";

    if (passwordValue !== confirmPasswordValue.value) {
        nonMatchingPasswords.style.display = "inline";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm-password").style.borderColor = 'red';
    }   else {

        nonMatchingPasswords.style.display = 'none';
    }


    // Log values in console (FOR TEST, DO NOT TOUCH)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName)
    console.log("Email:", emailAddress);
    console.log("Password:", password)

    alert("Sign-up successful!")


    });
});