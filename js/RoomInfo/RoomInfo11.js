const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");
const requestInput = document.getElementById("textarea");
const greetButton = document.getElementById("greetButton");
const greetingMessage = document.getElementById("greetingMessage");

// Regex patterns
const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
const numberPattern = /^\d{11}$/; // Exactly 11 digits

// Function to check input against a regex pattern
function isValidInput(value, pattern) {
  return pattern.test(value);
}

// Event listener for form submission
greetButton.addEventListener("click", function (event) {
  event.preventDefault(); // Stop page reload on button click

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const request = requestInput.value.trim();

  // Validate Name
  if (!isValidInput(username, namePattern)) {
    greetingMessage.textContent = "❌ Please enter a valid name (letters only).";
    greetingMessage.style.color = "red";
    return;
  }

  // Validate Email
  if (!isValidInput(email, emailPattern)) {
    greetingMessage.textContent = "❌ Please enter a valid email.";
    greetingMessage.style.color = "red";
    return;
  }

  // Validate Phone Number
  if (!isValidInput(number, numberPattern)) {
    greetingMessage.textContent = "❌ Please enter a 11-digit phone number.";
    greetingMessage.style.color = "red";
    return;
  }

    // Validate Check-in & Check-out Dates
    if (!checkIn || !checkOut) {
      greetingMessage.textContent = "❌ Please select both check-in and check-out dates.";
      greetingMessage.style.color = "red";
      return;
    }
  
    if (new Date(checkOut) <= new Date(checkIn)) {
      greetingMessage.textContent = "❌ Check-out date must be after check-in date.";
      greetingMessage.style.color = "red";
      return;
    }
  
    // Validate Special Request (optional)
    if (request.length > 0 && request.length < 5) {
      greetingMessage.textContent = "❌ Special request must be at least 5 characters.";
      greetingMessage.style.color = "red";
      return;
    }

  // Success message
  greetingMessage.textContent = `✅ Reservation successful, ${username}! We'll contact you soon.`;
  greetingMessage.style.color = "green";

    setTimeout(() => {
    window.location.href = "./BookRoom11.html";
  }, 3000);

  // Clear form fields after success
  usernameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  checkInInput.value = "";
  checkOutInput.value = "";
  requestInput.value = "";
});

