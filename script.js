function validateName() {
  let name = document.getElementById("name").value;
  let error = document.getElementById("nameError");

  if (name.length < 5) {
    error.textContent = "Name must be at least 5 characters long.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;
  let error = document.getElementById("emailError");

  if (!email.includes("@")) {
    error.textContent = "Enter a valid email address.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value;
  let error = document.getElementById("phoneError");

  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
    error.textContent = "Enter a valid 10-digit phone number.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validatePassword() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("passwordError");

  if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
    error.textContent = "Password must be 8+ chars, not 'password' or your name.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let error = document.getElementById("confirmPasswordError");

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateForm() {
  let valid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateConfirmPassword();

  if (!valid) {
    alert("Please correct the errors before submitting.");
  }
  return valid;
}
