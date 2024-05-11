document.addEventListener("DOMContentLoaded", function() {
    const reportBinForm = document.querySelector("form"); // Select the form element
    const cartTotalSpan = document.getElementById("cart-total");

    reportBinForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Increment cart total
        let currentTotal = parseInt(cartTotalSpan.textContent);
        currentTotal++;
        cartTotalSpan.textContent = currentTotal;

        // Clear form fields (optional)
        reportBinForm.reset();

        // Display notification (optional)
        alert("Bin reported successfully!");
    });
});
