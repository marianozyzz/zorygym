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

/* ==============================
   EFEITO DE ROLAGEM DO WHEY
   Compatível com o index corrigido
   ============================== */

function setupWheyHeroEffect() {
  const wheyCard = document.getElementById("wheyHeroCard");
  const floatingElements = document.querySelectorAll("[data-float]");

  if (!wheyCard || floatingElements.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;
  let scrollProgress = 0;
  let ticking = false;

  function applyParallax() {
    const isMobile = window.innerWidth <= 880;

    floatingElements.forEach((element) => {
      const x = Number(element.dataset.x || 0);
      const y = Number(element.dataset.y || 0);
      const rotate = Number(element.dataset.rotate || 0);
      const depth = Number(element.dataset.depth || 1);

      const scrollX = x * scrollProgress;
      const scrollY = y * scrollProgress;
      const scrollRotate = rotate * scrollProgress;

      const mouseMoveX = isMobile ? 0 : mouseX * depth;
      const mouseMoveY = isMobile ? 0 : mouseY * depth;

      const scale = element.id === "wheyHeroImage"
        ? 1.10 + scrollProgress * 0.08
        : 1 + scrollProgress * 0.12;

      element.style.transform = `
        translate3d(${scrollX + mouseMoveX}px, ${scrollY + mouseMoveY}px, 0)
        rotate(${scrollRotate}deg)
        scale(${scale})
      `;
    });

    ticking = false;
  }

  function requestParallax() {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }

  function updateScrollProgress() {
    const rect = wheyCard.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.90;
    const end = -rect.height * 0.25;

    let progress = (start - rect.top) / (start - end);

    progress = Math.max(0, Math.min(progress, 1));

    scrollProgress = progress;

    requestParallax();
  }

  window.addEventListener("scroll", updateScrollProgress);

  wheyCard.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 880) return;

    const rect = wheyCard.getBoundingClientRect();

    mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 42;
    mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 34;

    wheyCard.style.transform = `
      perspective(1000px)
      rotateX(${mouseY * -0.20}deg)
      rotateY(${mouseX * 0.18}deg)
      scale(1.015)
    `;

    requestParallax();
  });

  wheyCard.addEventListener("mouseleave", () => {
    mouseX = 0;
    mouseY = 0;

    wheyCard.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    requestParallax();
  });

  updateScrollProgress();
}
