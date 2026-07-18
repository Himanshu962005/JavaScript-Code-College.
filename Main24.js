// Problems for Sigma Developers.
// Q4.The Password Validator : You are Building a Password Validation Feature. Create a Function that Checks if a Given Password Meets the Following Criteria : At Least 8 Characters Long, Contains Both Uppercase and Lowercase Letters, and Includes at Least One Digit.
function validatePassword(password) {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password);
};
console.log(validatePassword("Password1")); // True
console.log(validatePassword("password1")); // False (No Uppercase)
console.log(validatePassword("PASSWORD1")); // False (No Lowercase)
console.log(validatePassword("Password"));  // False (No Digit)
console.log(validatePassword("Pass1"));     // False (Less than 8 Characters)