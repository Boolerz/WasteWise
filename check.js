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
    `;
  }
  