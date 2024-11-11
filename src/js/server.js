const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlEncoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "../resource/signup.html");
});

app.post('../resource/signup.html', (req, res) => {
    const {firstName, lastName, email, password, confirmPassword } = req.body

    let errors = {};

    if (!firstName || firstName.trim().length < 2) {
        errors.firstName = "First name must be at least 2 characters.";
    }
    
    if (!lastName || lastName.trim().length < 2) {
        errors.lastName = "Last name must be at least 2 characters.";
    }
    
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || emailRegex.test(email.trim())) {
            errors.email = "Please enter a valid email address.";
        }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        if (!password || passwordRegex.test(password)) {
            errors.password = "Password must include at least 8 characters, 1 number, and 1 special character.";
        }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords must match.";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }
    
    res.status(200).json({ message: "Signup successful!" });
});

app.listen(PORT, () => {
    console.log("Server running at local host http://localhost:${PORT}")
})
