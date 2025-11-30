// cart.js — load cart and update badge on any page
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart badge count
function updateCartCount() {
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) cartBtn.textContent = `${cart.length}`;
}

function getsubTotal() {
  if (!cart || cart.length === 0) return 0;

  //loop through the array of object(to get the price)
  let sTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]) {
      sTotal += cart[i].price;
    }
  }
  return sTotal;
}

function calcTotals() {
    console.log('=== calcTotals called ===');
    console.log('Cart length:', cart.length);
    console.log('Cart contents:', cart);
    
    let subtotal = getsubTotal();
    console.log('Subtotal calculated:', subtotal);
    
    let taxes = 0.1;
    let TotalTaxes = subtotal * taxes;
    let FinalTotal = subtotal + TotalTaxes;

    console.log('Final values - Subtotal:', subtotal, 'Tax:', TotalTaxes, 'Total:', FinalTotal);

    const subTotalElement = document.getElementById("subTotal");
    const taxElement = document.getElementById("taxes");
    const totalElement = document.getElementById("finalTotal");

    //checking if they are valid
    if (subTotalElement) subTotalElement.textContent = `${subtotal.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `${TotalTaxes.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `${FinalTotal.toFixed(2)}`;
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  calcTotals();
  let number = getsubTotal();
  console.log(cart);
  console.log("SubTotal: ", number);

}

//they will run automatically as soon as cart.js loads
updateCartCount();
calcTotals();

