// cart.js — load cart and update badge on any page
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart badge count
function updateCartCount() {
    const cartBtn = document.getElementById("cart-btn");
    if (cartBtn) cartBtn.textContent = `${cart.length}`;
}

// Run as soon as the script loads
updateCartCount();