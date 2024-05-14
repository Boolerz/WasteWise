document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.querySelector("form");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Generate a serial number dynamically (e.g., BIN001, BIN002, BIN003, etc.)
        const serialNumber = generateSerialNumber();

        // Display registration successful message with the assigned serial number
        alert("Registration Successful! Your bin serial number is: " + serialNumber);

        // Redirect to index.html after 2 seconds
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);
    });

    // Function to generate a serial number dynamically
    function generateSerialNumber() {
        // Simulated serial number generation (replace with your own logic)
        let serialPrefix = "BIN";
        let randomNumber = Math.floor(Math.random() * 1000) + 1; // Generates a random number between 1 and 1000
        let serialNumber = serialPrefix + randomNumber.toString().padStart(3, '0'); // Formats the random number to have 3 digits

        return serialNumber;
    }
});
