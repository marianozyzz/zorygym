const produtos = [

  {
    nome: "WHEY PROTEIN ZORY",
    precoAntigo: "R$ 249,90",
    preco: "R$ 199,90",
    imagem: "assets/coqueteleira.png"
  },

  {
    nome: "CREATINA MONOHIDRATADA",
    precoAntigo: "R$ 179,90",
    preco: "R$ 129,90",
    imagem: "assets/logo-red.png"
  },

  {
    nome: "PRÉ TREINO INSANO",
    precoAntigo: "R$ 159,90",
    preco: "R$ 119,90",
    imagem: "assets/academia.png"
  },

  {
    nome: "CAMISETA ZORY",
    precoAntigo: "R$ 189,90",
    preco: "R$ 139,90",
    imagem: "assets/camiseta.png"
  },

  {
    nome: "KIT PERFORMANCE",
    precoAntigo: "R$ 459,90",
    preco: "R$ 349,90",
    imagem: "assets/qualidade.png"
  },

  {
    nome: "COQUETELEIRA ZORY",
    precoAntigo: "R$ 79,90",
    preco: "R$ 49,90",
    imagem: "assets/coqueteleira.png"
  }

];

const carousel = document.getElementById("carousel");

produtos.forEach(produto => {

  carousel.innerHTML += `

    <div class="product-card">

      <img src="${produto.imagem}" alt="">

      <div class="product-info">

        <h3>${produto.nome}</h3>

        <span class="old-price">
          ${produto.precoAntigo}
        </span>

        <span class="price">
          ${produto.preco}
        </span>

        <button>
          COMPRAR
        </button>

      </div>

    </div>

  `;
});
