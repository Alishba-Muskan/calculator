const productContainer = document.getElementById("products");
const searchInput = document.getElementById("searching");
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const cartModalClose = document.getElementById("cart-modal-close");
const cartItemsList = document.getElementById("cart-items-list");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filtering = [];
updateCartCount();

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    filtering = data;
    displayProducts(data);
  });

// Display products on the page
function displayProducts(products) {
  productContainer.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-details">
        <div class="product-title">${product.title.substring(0, 16)}.....</div>
        <div class="product-description">${product.description.substring(0, 45)}..... <a href="product-details.html?id=${product.id}">Read More</a></div>
        <div class="product-price">PRICE: $${product.price}</div>
        <div class="btn-group">
          <a href="product-details.html?id=${product.id}"><button>View Details</button></a>
          <button type="button" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add To Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Add product to cart
function addToCart(id, title, price, image) {
  cart.push({ id, title, price, image });
  updateCart();
}

// Remove product from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update cart (save to localStorage and update UI)
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showCartItems();
}

// Update cart count on the icon
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// Show cart items in modal
function showCartItems() {
  cartItemsList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <div>${item.title}</div>
        <div>Price: $${item.price}</div>
      </div>
      <div class="cart-item-remove" onclick="removeFromCart(${index})">X</div>
    </div>
  `).join('');
  totalPrice.innerText = cart.reduce((total, item) => total + item.price, 0);
}

// Toggle cart modal visibility
cartIcon.addEventListener("click", () => {
  cartModal.style.display = "flex";
  showCartItems();
});

// Close cart modal
cartModalClose.addEventListener("click", () => {
  cartModal.style.display = "none";
});

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredProducts = filtering.filter(product =>
    product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)
  );
  displayProducts(filteredProducts);
});
