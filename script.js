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
  const wheyImage = document.getElementById("wheyHeroImage");
  const wheyCard = document.getElementById("wheyHeroCard");

  if (!wheyImage || !wheyCard) return;

  let mouseX = 0;
  let mouseY = 0;
  let scrollMove = 0;
  let ticking = false;

  function applyTransform() {
    const isMobile = window.innerWidth <= 880;

    if (isMobile) {
      wheyImage.style.transform = `
        translateY(${scrollMove}px)
        rotate(-2deg)
        scale(1.02)
      `;
    } else {
      wheyImage.style.transform = `
        translate(${mouseX}px, ${scrollMove + mouseY}px)
        rotate(${mouseX * 0.035 - 2}deg)
        scale(1.035)
      `;
    }

    ticking = false;
  }

  function requestTransform() {
    if (!ticking) {
      window.requestAnimationFrame(applyTransform);
      ticking = true;
    }
  }

  window.addEventListener("scroll", () => {
    const cardPosition = wheyCard.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = 1 - Math.min(
      Math.max(cardPosition.top / windowHeight, 0),
      1
    );

    scrollMove = progress * 34;

    requestTransform();
  });

  wheyCard.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 880) return;

    const rect = wheyCard.getBoundingClientRect();

    mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 22;
    mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 18;

    wheyCard.style.transform = `
      perspective(1000px)
      rotateX(${mouseY * -0.18}deg)
      rotateY(${mouseX * 0.18}deg)
    `;

    requestTransform();
  });

  wheyCard.addEventListener("mouseleave", () => {
    mouseX = 0;
    mouseY = 0;

    wheyCard.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
    `;

    requestTransform();
  });
}

/* ==============================
   ARANHA ZORY - BURACO PARALLAX
   ============================== */

function setupSpiderRevealEffect() {
  const section = document.getElementById("zory-spider-reveal");
  const hole = document.getElementById("spiderHole");
  const spider = document.getElementById("spiderSymbol");

  if (!section || !hole || !spider) return;

  let targetProgress = 0;
  let currentProgress = 0;
  let ticking = false;

  function calculateProgress() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.95;
    const end = windowHeight * 0.18;

    let progress = (start - rect.top) / (start - end);
    progress = Math.max(0, Math.min(progress, 1));

    targetProgress = progress;
  }

  function renderSpider() {
    currentProgress += (targetProgress - currentProgress) * 0.12;

    const reveal = Math.sin(currentProgress * Math.PI);

    const holeScale = 0.84 + reveal * 0.25;
    const holeY = 48 - reveal * 38;
    const holeOpacity = 0.14 + reveal * 0.66;

    const spiderY = 78 - reveal * 34;
    const spiderScale = 1.02 + reveal * 0.14;
    const spiderRotate = (currentProgress - 0.5) * 5;

    hole.style.transform = `
      translateY(${holeY}px)
      scale(${holeScale})
    `;

    hole.style.opacity = holeOpacity;
    hole.style.filter = `blur(${(1 - reveal) * 1.35}px)`;

    spider.style.transform = `
      translateY(${spiderY}%)
      scale(${spiderScale})
      rotate(${spiderRotate}deg)
    `;

    spider.style.opacity = 0.32 + reveal * 0.62;

    if (reveal > 0.18) {
      hole.classList.add("is-visible");
    } else {
      hole.classList.remove("is-visible");
    }

    if (Math.abs(targetProgress - currentProgress) > 0.002) {
      requestAnimationFrame(renderSpider);
    } else {
      ticking = false;
    }
  }

  function requestRender() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(renderSpider);
    }
  }

  window.addEventListener("scroll", () => {
    calculateProgress();
    requestRender();
  }, { passive: true });

  window.addEventListener("resize", () => {
    calculateProgress();
    requestRender();
  });

  calculateProgress();
  requestRender();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  updateCart();

  setupWheyHeroEffect();

  setupSpiderRevealEffect();
});
