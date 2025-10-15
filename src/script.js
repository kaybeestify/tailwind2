function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error-message");
  const success = document.getElementById("success-message");

  // Hide messages
  error.classList.add("hidden");
  success.classList.add("hidden");

  // Basic validation checks
  if (name === "" || email === "" || message === "") {
    error.textContent = "Please fill in all fields.";
    error.classList.remove("hidden");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    error.textContent = "Please enter a valid email address.";
    error.classList.remove("hidden");
    return false;
  }

  // If valid
  success.textContent = "Message sent successfully!";
  success.classList.remove("hidden");
  document.getElementById("contactForm").reset();

  return false; // Prevent actual form submission (for demo)
}

