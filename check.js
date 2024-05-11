function scanBarcode() {
    var barcode = document.getElementById("barcode-input").value;
    
    // Simulate fetching product information from a database
    // Replace this with actual code to fetch data from a database or API
    var productInfo = getProductInfo(barcode);
    
    if (productInfo) {
      displayProductInfo(productInfo);
    } else {
      alert("Bin not found. Please check the serial No.");
    }
  }
  
  function getProductInfo(barcode) {
    // Simulated product data (replace with actual database or API call)
    var products = {
      "BIN001": { name: "Glass", level: 'High', recyclable: true },
      "BIN002": { name: "Papers", level: "Medium", recyclable: true },
      "BIN003": { name: "Metal", level: "Low", recyclable: true },
      "BIN004": { name: "Gabbage", level: "Empty", recyclable: false },
      "BIN005": { name: "Plastic", level: "Full", recyclable: true },
      // Add more product information as needed
    };
  
    return products[barcode];
  }
  
  function displayProductInfo(productInfo) {
    var productInfoDiv = document.getElementById("product-info");
    productInfoDiv.innerHTML = `
      <h2>Product Information</h2>
      <p><strong>Name:</strong> ${productInfo.name}</p>
      <p><strong>Level:</strong> ${productInfo.level}</p>
      <p><strong>Recyclable:</strong> ${productInfo.recyclable ? 'Yes' : 'No'}</p>
      <p><strong>Recycling Company:</strong> ${getRecyclingCompany(productInfo.name)}</p>
    `;
  }
  function getRecyclingCompany(productName) {
    // Define a mapping of product names to recycling companies
    var recyclingCompanies = {
        "Glass": "Company A",
        "Papers": "Company B",
        "Metal": "Company C",
        "Gabbage": "Company D",
        "Plastic": "Company E"
        // Add more mappings as needed
    };

    // Return the recycling company based on the product name
    return recyclingCompanies[productName] || "Unknown";
}
  document.addEventListener("DOMContentLoaded", function() {
    const reportedBins = [
        { barcode: "BIN005", town: "Kilifi", serial: "BIN005", photo: "bin005.jpg" },
        { barcode: "BIN002", town: "Malindi", serial: "BIN001", photo: "bin002.jpg" },
        // Add more reported bins as needed
    ];

    const cartTotalSpan = document.getElementById("cart-total");
    const checkButton = document.getElementById("check-button");
    const reportBinForm = document.getElementById("report-bin-form");

    // Display the total number of reported bins
    cartTotalSpan.textContent = reportedBins.length;

    const cartItemsList = document.getElementById("cart-items");

    // Loop through reported bins and display them in the cart
    reportedBins.forEach(bin => {
        const li = document.createElement("li");
        li.textContent = `Town: ${bin.town}, Serial: ${bin.serial}`;
        cartItemsList.appendChild(li);
    });

    // Clear the notification and form when the "Check" button is clicked
    checkButton.addEventListener("click", function() {
        // Reset cart total
        cartTotalSpan.textContent = "0";

        // Clear form fields
        reportBinForm.reset();
    });
});
