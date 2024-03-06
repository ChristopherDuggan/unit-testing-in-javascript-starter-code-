// validate an email address
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// validate a password on complexity requirements
function validatePassword(password) {
    return password.length >= 8;
}

// validate a phone number
function validatePhoneNumber(phoneNumber) {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
}

// function to convert data between different formats (object to JSON)
function convertToJSON(data) {
    return JSON.stringify(data);
}

// Function to sanitize user input or escape special characters to prevent injection attacks.
function sanitizeInput(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
    convertToJSON,
    sanitizeInput
};
