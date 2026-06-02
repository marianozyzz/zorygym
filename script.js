// =====================================
// ZORY PREMIUM SCRIPT
// =====================================

// ============================
// PRODUTOS
// ============================

const produtos = {

  maisVendidos: [

    {
      nome: "WHEY PROTEIN ZORY 900G",
      precoAntigo: "R$ 249,90",
      preco: "R$ 199,90",
      imagem: "Prancheta 5.png",
      badge: "BEST SELLER"
    },

    {
      nome: "CREATINA MONOHIDRATADA",
      precoAntigo: "R$ 179,90",
      preco: "R$ 129,90",
      imagem: "Prancheta 1.png",
      badge: "TOP"
    },

    {
      nome: "PRÉ TREINO INSANO",
      precoAntigo: "R$ 159,90",
      preco: "R$ 119,90",
      imagem: "Prancheta 7.png",
      badge: "ENERGIA"
    },

    {
      nome: "KIT PERFORMANCE",
      precoAntigo: "R$ 459,90",
      preco: "R$ 349,90",
      imagem: "Prancheta 3.png",
      badge: "OFERTA"
    },

    {
      nome: "CAMISETA ZORY",
      precoAntigo: "R$ 189,90",
      preco: "R$ 139,90",
      imagem: "Prancheta 6.png",
      badge: "NEW"
    }

  ],

  suplementos: [

    {
      nome: "WHEY ISOLADO",
      precoAntigo: "R$ 299,90",
      preco: "R$ 239,90",
      imagem: "Prancheta 5.png",
      badge: "PREMIUM"
    },

    {
      nome: "CREATINA HARDCORE",
      precoAntigo: "R$ 169,90",
      preco: "R$ 129,90",
      imagem: "Prancheta 2.png",
      badge: "FORÇA"
    },

    {
      nome: "BCAA RECOVERY",
      precoAntigo: "R$ 119,90",
      preco: "R$ 89,90",
      imagem: "Prancheta 1.png",
      badge: "RECOVERY"
    },

    {
      nome: "GLUTAMINA",
      precoAntigo: "R$ 139,90",
      preco: "R$ 99,90",
      imagem: "Prancheta 3.png",
      badge: "TOP"
    },

    {
      nome: "HIPERCALÓRICO",
      precoAntigo: "R$ 229,90",
      preco: "R$ 179,90",
      imagem: "Prancheta 7.png",
      badge: "MASSA"
    }

  ],

  roupas: [

    {
      nome: "OVERSIZED ZORY",
      precoAntigo: "R$ 169,90",
      preco: "R$ 129,90",
      imagem: "Prancheta 6.png",
      badge: "DROP"
    },

    {
      nome: "REGATA PERFORMANCE",
      precoAntigo: "R$ 149,90",
      preco: "R$ 109,90",
      imagem: "Prancheta 5.png",
      badge: "FIT"
    },

    {
      nome: "SHORT TREINO",
      precoAntigo: "R$ 139,90",
      preco: "R$ 99,90",
      imagem: "Prancheta 2.png",
      badge: "NEW"
    },

    {
      nome: "MOLETOM ZORY",
      precoAntigo: "R$ 289,90",
      preco: "R$ 239,90",
      imagem: "Prancheta 4.png",
      badge: "PREMIUM"
    }

  ],

  acessorios: [

    {
      nome: "COQUETELEIRA ZORY",
      precoAntigo: "R$ 79,90",
      preco: "R$ 49,90",
      imagem: "Prancheta 5.png",
      badge: "TOP"
    },

    {
      nome: "STRAP TREINO",
      precoAntigo: "R$ 59,90",
      preco: "R$ 39,90",
      imagem: "Prancheta 1.png",
      badge: "TREINO"
    },

    {
      nome: "MUNHEQUEIRA PRO",
      precoAntigo: "R$ 89,90",
      preco: "R$ 64,90",
      imagem: "Prancheta 2.png",
      badge: "FIT"
    },

    {
      nome: "GARRAFA TÉRMICA",
      precoAntigo: "R$ 119,90",
      preco: "R$ 89,90",
      imagem: "Prancheta 3.png",
      badge: "NEW"
    }

  ],

  kits: [

    {
      nome: "KIT HIPERTROFIA",
      precoAntigo: "R$ 499,90",
      preco: "R$ 399,90",
      imagem: "Prancheta 7.png",
      badge: "KIT"
    },

    {
      nome: "KIT PERFORMANCE",
      precoAntigo: "R$ 599,90",
      preco: "R$ 469,90",
      imagem: "Prancheta 5.png",
      badge: "TOP"
    },

    {
      nome: "KIT MASS GAIN",
      precoAntigo: "R$ 649,90",
      preco: "R$ 519,90",
      imagem: "Prancheta 6.png",
      badge: "OFERTA"
    }

  ],

  ofertas: [

    {
      nome: "BLACK WHEY",
      precoAntigo: "R$ 259,90",
      preco: "R$ 179,90",
      imagem: "Prancheta 5.png",
      badge: "-30%"
    },

    {
      nome: "CREATINA ULTRA",
      precoAntigo: "R$ 189,90",
      preco: "R$ 129,90",
      imagem: "Prancheta 1.png",
      badge: "-25%"
    },

    {
      nome: "PRÉ TREINO FIRE",
      precoAntigo: "R$ 169,90",
      preco: "R$ 109,90",
      imagem: "Prancheta 3.png",
      badge: "-40%"
    }

  ]

};

// ============================
// GERAR CARD
// ============================

function criarCard(produto){

  return `

    <div class="product-card">

      <span class="badge">
        ${produto.badge}
      </span>

      <img src="${produto.imagem}" alt="${produto.nome}">

      <div class="product-info">

        <h3>
          ${produto.nome}
        </h3>

        <div class="stars">
          ★★★★★
        </div>

        <span class="old-price">
          ${produto.precoAntigo}
        </span>

        <span class="price">
          ${produto.preco}
        </span>

        <button class="buy-btn">
          COMPRAR
        </button>

      </div>

    </div>

  `;
}

// ============================
// CARREGAR PRODUTOS
// ============================

function carregarProdutos(){

  const mapas = {

    "carousel-mais-vendidos": produtos.maisVendidos,

    "carousel-suplementos": produtos.suplementos,

    "carousel-roupas": produtos.roupas,

    "carousel-acessorios": produtos.acessorios,

    "carousel-kits": produtos.kits,

    "carousel-ofertas": produtos.ofertas

  };

  Object.entries(mapas).forEach(([id, lista]) => {

    const container = document.getElementById(id);

    if(container){

      container.innerHTML = lista.map(criarCard).join("");

    }

  });

}

// ============================
// INIT
// ============================

carregarProdutos();

// ============================
// ALERT COMPRAR
// ============================

document.addEventListener("click", function(e){

  if(e.target.classList.contains("buy-btn")){

    e.target.innerText = "ADICIONADO ✓";

    e.target.style.background = "#00b894";

    setTimeout(() => {

      e.target.innerText = "COMPRAR";

      e.target.style.background = "#ff1b0a";

    }, 2000);

  }

});

// ============================
// HERO BUTTON
// ============================

const heroButton = document.querySelector(".hero-buttons a");

if(heroButton){

  heroButton.addEventListener("click", () => {

    console.log("ZORY PERFORMANCE");

  });

}

// ============================
// NEWSLETTER
// ============================

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

  newsletter.addEventListener("submit", function(e){

    e.preventDefault();

    const input = newsletter.querySelector("input");

    if(input.value.trim() === ""){

      alert("DIGITE UM E-MAIL");

      return;

    }

    alert("CADASTRO REALIZADO COM SUCESSO!");

    input.value = "";

  });

}

// ============================
// HEADER SHADOW
// ============================

window.addEventListener("scroll", () => {

  const header = document.querySelector(".main-header");

  if(window.scrollY > 50){

    header.style.boxShadow = "0 0 30px rgba(0,0,0,.55)";

  }else{

    header.style.boxShadow = "none";

  }

});

// ============================
// SCROLL ANIMATION
// ============================

const cards = document.querySelectorAll(".product-card");

cards.forEach((card, index) => {

  card.style.opacity = "0";

  card.style.transform = "translateY(40px)";

  setTimeout(() => {

    card.style.transition = ".6s";

    card.style.opacity = "1";

    card.style.transform = "translateY(0px)";

  }, index * 100);

});

console.log("ZORY PREMIUM ONLINE 🔥");
