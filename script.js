const produtos = {
  maisVendidos: [
    ["Whey Protein Zory 900g", "R$ 219,90", "R$ 189,90", "assets/coqueteleira.png"],
    ["Creatina Monohidratada 300g", "R$ 159,90", "R$ 119,90", "assets/logo-red.png"],
    ["Pré-Treino Explosive 300g", "R$ 179,90", "R$ 139,90", "assets/academia.png"],
    ["Coqueteleira Zory Pro", "R$ 69,90", "R$ 49,90", "assets/coqueteleira.png"],
    ["Camiseta Oversized Zory", "R$ 149,90", "R$ 119,90", "assets/camiseta.png"],
    ["Kit Hipertrofia Premium", "R$ 399,90", "R$ 329,90", "assets/qualidade.png"]
  ],

  suplementos: [
    ["Whey Isolado Premium", "R$ 289,90", "R$ 249,90", "assets/coqueteleira.png"],
    ["Creatina Hardcore", "R$ 169,90", "R$ 129,90", "assets/logo-white.png"],
    ["BCAA Recovery", "R$ 119,90", "R$ 89,90", "assets/logo-red.png"],
    ["Glutamina Performance", "R$ 139,90", "R$ 99,90", "assets/academia.png"],
    ["Hipercalórico Mass Gain", "R$ 229,90", "R$ 189,90", "assets/qualidade.png"],
    ["Pré-Treino Fire Pump", "R$ 199,90", "R$ 149,90", "assets/coqueteleira.png"],
    ["Termogênico Ultra", "R$ 129,90", "R$ 94,90", "assets/logo-black.png"]
  ],

  roupas: [
    ["Camiseta Zory Black", "R$ 149,90", "R$ 119,90", "assets/camiseta.png"],
    ["Regata Performance Red", "R$ 119,90", "R$ 89,90", "assets/academia.png"],
    ["Short Treino Pro", "R$ 139,90", "R$ 109,90", "assets/qualidade.png"],
    ["Moletom Zory Premium", "R$ 279,90", "R$ 229,90", "assets/camiseta.png"],
    ["Legging High Performance", "R$ 169,90", "R$ 129,90", "assets/academia.png"],
    ["Top Fitness Zory", "R$ 109,90", "R$ 79,90", "assets/qualidade.png"]
  ],

  acessorios: [
    ["Strap de Treino", "R$ 59,90", "R$ 39,90", "assets/logo-red.png"],
    ["Munhequeira Pro", "R$ 79,90", "R$ 54,90", "assets/logo-black.png"],
    ["Cinto de Musculação", "R$ 189,90", "R$ 149,90", "assets/academia.png"],
    ["Garrafa Térmica Zory", "R$ 99,90", "R$ 74,90", "assets/coqueteleira.png"],
    ["Kit Elástico Fitness", "R$ 89,90", "R$ 59,90", "assets/qualidade.png"],
    ["Luvas Academia", "R$ 99,90", "R$ 69,90", "assets/camiseta.png"]
  ]
};

function criarCard(produto) {
  return `
    <div class="product-card">
      <span class="badge">OFERTA</span>
      <img src="${produto[3]}" alt="${produto[0]}">
      <div class="product-info">
        <h3>${produto[0]}</h3>
        <div class="stars">★★★★★</div>
        <span class="old-price">${produto[1]}</span>
        <span class="price">${produto[2]}</span>
        <button>COMPRAR</button>
      </div>
    </div>
  `;
}

function carregarProdutos() {
  Object.keys(produtos).forEach(secao => {
    const container = document.getElementById(secao);
    container.innerHTML = produtos[secao].map(criarCard).join("");
  });
}

carregarProdutos();

document.querySelectorAll(".product-info button").forEach(botao => {
  botao.addEventListener("click", () => {
    alert("Produto adicionado ao carrinho!");
  });
});
