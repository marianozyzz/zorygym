const products = [
  {
    name: "Creatina Zory 300g",
    desc: "Força, potência e recuperação.",
    price: 89.90,
    image: "assets/produto1.png"
  },
  {
    name: "Whey Protein Zory",
    desc: "Proteína premium para sua rotina.",
    price: 139.90,
    image: "assets/produto2.png"
  },
  {
    name: "Pré-treino Ignite",
    desc: "Energia e foco no treino.",
    price: 109.90,
    image: "assets/produto3.png"
  },
  {
    name: "Regata Zory Black",
    desc: "Estética street fitness.",
    price: 79.90,
    image: "assets/produto4.png"
  }
];

let cart = [];

const grid = document.getElementById("productGrid");
const cartEl = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const whatsappCheckout = document.getElementById("whatsappCheckout");

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function renderProducts() {

  if (!grid) return;

  grid.innerHTML = products.map((p, index) => `
    <article class="product glass">

      <div class="product-img">
        <img src="${p.image}" alt="${p.name}">
      </div>

      <h3>${p.name}</h3>

      <p>${p.desc}</p>

      <span class="price">
        ${money(p.price)}
      </span>

      <button onclick="addToCart(${index})">
        Adicionar ao carrinho
      </button>

    </article>
  `).join("");

}

function addToCart(index) {

  cart.push(products[index]);

  updateCart();

  if (cartEl) {
    cartEl.classList.add("open");
  }

}

function toggleCart() {

  if (!cartEl) return;

  cartEl.classList.toggle("open");

}

function updateCart() {

  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  if (cartItems) {

    if (cart.length === 0) {

      cartItems.innerHTML = `
        <p>Seu carrinho está vazio.</p>
      `;

    } else {

      cartItems.innerHTML = cart.map(item => `

        <div class="cart-item">

          <span>${item.name}</span>

          <strong>${money(item.price)}</strong>

        </div>

      `).join("");

    }

  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cartTotal) {
    cartTotal.textContent = money(total);
  }

  if (whatsappCheckout) {

    const message = encodeURIComponent(

      "Olá! Quero finalizar meu pedido Zory:\n\n" +

      cart.map(item =>
        `• ${item.name} - ${money(item.price)}`
      ).join("\n") +

      `\n\nTotal: ${money(total)}`

    );

    whatsappCheckout.href =
      `https://wa.me/5521990073735?text=${message}`;
  }

}

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  updateCart();

});
