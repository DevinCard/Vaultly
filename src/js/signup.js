document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup.js is loaded!");

    const signupForm = document.getElementById("signup-form");
    if (!signupForm) {
        console.error("Signup form not found!");
        return;
    }

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById("first-name").value.trim(),
            lastName: document.getElementById("last-name").value.trim(),
            email: document.getElementById("email-address").value.trim(),
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirm-password").value,
        };

        const submitButton = signupForm.querySelector("button[type='submit']");
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        resetErrors();

        let errors = {};

        if (formData.firstName.length < 2) {
            errors.firstName = "First name must be at least 2 characters.";
        }

        if (formData.lastName.length < 2) {
            errors.lastName = "Last name must be at least 2 characters.";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
        }


        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            errors.password = "Password must include at least 8 characters, 1 number, and 1 special character.";
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords must match.";
        }

        if (Object.keys(errors).length > 0) {
            for (const [field, errorMessage] of Object.entries(errors)) {
                const errorElement = document.getElementById(`${field.split(/(?=[A-Z])/).join('-').toLowerCase()}-error`);
                if (errorElement) {
                    errorElement.textContent = errorMessage;
                    errorElement.classList.add('show'); 
                } else {
                    console.error(`Error element for ${field}-error not found!`);
                }
            }

            submitButton.disabled = false;
            submitButton.textContent = "Sign Up";
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                if (data.errors) {
                    for (const [field, errorMessage] of Object.entries(data.errors)) {
                        const errorElement = document.getElementById(`${field.split(/(?=[A-Z])/).join('-').toLowerCase()}-error`);
                        if (errorElement) {
                            errorElement.textContent = errorMessage;
                            errorElement.classList.add('show');
                        }
                    }
                }
                return;
            }

            alert("Sign-up successful!");
        } catch (err) {
            console.error("Error submitting the form:", err);
            alert("An error occurred while submitting the form. Please try again.");
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Sign Up";
        }
    });

    function resetErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach((errorElement) => {
            errorElement.textContent = '';
            errorElement.classList.remove('show'); 
        });
    }
});
