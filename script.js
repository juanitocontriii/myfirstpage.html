// Random number
const secretNumber = Math.floor(Math.random() * 101);

function checkGuess() {
    const input = document.getElementById("guessInput").value;
    const result = document.getElementById("resultMessage");

    if (input == secretNumber) {
        result.textContent = "yes it was the number";
    } else if (input > secretNumber) {
        result.textContent = "too high.";
    } else {
        result.textContent = "too low.";
    }
}

// Email subscribe
function subscribe() {
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("subscribeMsg");

    if (email.includes("@")) {
        message.textContent = "receive daily info";
    } else {
        message.textContent = "Please enter a valid email address.";
    }
}
