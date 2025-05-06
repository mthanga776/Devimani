const products = [
  { id: 1, name: "Sneakers", price: 49.99, image: "https://via.placeholder.com/100" },
  { id: 2, name: "T-Shirt", price: 19.99, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Backpack", price: 39.99, image: "https://via.placeholder.com/100" },
];

const productList = document.getElementById('productList');
if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p>$${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Item added to cart!");
}
