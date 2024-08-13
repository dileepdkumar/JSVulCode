// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Create HTML structure using JavaScript
    document.body.innerHTML = `
        <div>
            <h2>Enter some text:</h2>
            <input type="text" id="inputField" placeholder="Type something...">
        </div>
        <div>
            <h3>Your Input:</h3>
            <div id="outputDiv"></div> <!-- Sink: XSS vulnerability here -->
        </div>
    `;

    // Source: user input is stored here
    const inputField = document.getElementById('inputField');
    const outputDiv = document.getElementById('outputDiv');

    // Update user input and display it (Sink: XSS vulnerability here)
    inputField.addEventListener('input', function(event) {
        const userInput = event.target.value;
        outputDiv.innerHTML = userInput; // XSS vulnerability
    });
});
