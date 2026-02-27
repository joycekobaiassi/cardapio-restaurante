// ================= PRODUTOS =================

const produtos = [

  // -------- ORIENTAL --------

  {
    nome: "Sobá 1L",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/soba.png",
    descricao: "Macarrão oriental com ovos, carne em tirinhas, cebolinha fresca e caldo aromático.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 },
      { nome: "Sachê de shoyu", preco: 2 }
    ]
  },

  {
    nome: "Sobá 500ml",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: true,
    imagem: "imagens/sobaindividual.png",
    descricao: "Versão individual com o mesmo sabor incrível.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 },
      { nome: "Sachê de shoyu", preco: 2 }
    ]
  },

  {
    nome: "Yakisoba 1kg",
    preco: 67,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/yakisoba.png",
    descricao: "Macarrão oriental com legumes frescos e tempero tradicional."
  },

  {
    nome: "Yakisoba Família - 2kg",
    preco: 120,
    categoria: "oriental",
    serve: "Serve bem 4 pessoas",
    carnes: true,
    imagem: "imagens/yakisobafamilia.jpg",
    descricao: "Carne ou frango, macarrão, cenoura, pimentões, vagem, ervilha, repolho, couve-flor, brócolis, moyashi, cebolinha e ovo de codorna."
  },

  {
    nome: "Yakimeshi Tropical 1kg",
    preco: 85,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Arroz soltinho com frango, abacaxi, presunto e legumes."
  },

  {
    nome: "Yakimeshi Especial 500ml",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Versão individual leve e saborosa."
  },

  // -------- CASEIRO --------

  {
    nome: "Marmitex Caseiro Completo",
    preco: 28,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/marmitex.png",
    descricao: "Arroz, feijão, bife acebolado, fritas e salada."
  },

  {
    nome: "Filé Acebolado com Fritas",
    preco: 65,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/porcaofile.png",
    descricao: "Contrafilé acebolado com fritas crocantes."
  },

  {
    nome: "Batatas Fritas 300g",
    preco: 28,
    categoria: "caseiro",
    serve: "",
    carnes: false,
    imagem: "imagens/porcaobatata.png",
    descricao: "Batatas sequinhas e crocantes."
  },

  // -------- BEBIDAS --------

  {
    nome: "Coca-Cola Lata 350ml",
    preco: 7,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    imagem: "imagens/cocalata.jpg",
    descricao: "Refrigerante gelado."
  },

  {
    nome: "Coca-Cola 2 Litros",
    preco: 14,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    imagem: "imagens/cocalitro.jpg",
    descricao: "Refrigerante gelado 2L."
  }

];

// ================= ELEMENTOS =================

const oriental = document.getElementById("oriental");
const caseiro = document.getElementById("caseiro");
const bebidas = document.getElementById("bebidas");

let carrinho = [];
let total = 0;

// ================= GERAR PRODUTOS =================

produtos.forEach((produto, index) => {

  let container;

  if (produto.categoria === "oriental") container = oriental;
  else if (produto.categoria === "caseiro") container = caseiro;
  else container = bebidas;

  container.innerHTML += `
    <div class="item">

      <img src="${produto.imagem}" alt="${produto.nome}">

      <div class="item-content">
        <h3>${produto.nome}</h3>
        ${produto.serve ? `<p style="color:orange">${produto.serve}</p>` : ""}
        <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>

        <button onclick="toggleDetalhes(${index})">
          Ver detalhes
        </button>

        <div id="det-${index}" style="display:none; margin-top:10px;">
          <p>${produto.descricao}</p>

          ${produto.carnes ? `
            <label>Escolha a carne:</label><br>
            <select id="carne-${index}">
              <option value="Bovino">Bovino</option>
              <option value="Frango">Frango</option>
              <option value="Suíno">Suíno</option>
            </select><br><br>
          ` : ""}

          <button onclick="adicionar(${index})">
            Adicionar ao pedido
          </button>
        </div>
      </div>
    </div>
  `;
});

// ================= CARRINHO =================

function toggleDetalhes(index) {
  const el = document.getElementById(`det-${index}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function adicionar(index) {
  let produto = produtos[index];
  let nomeFinal = produto.nome;
  let precoFinal = produto.preco;

  if (produto.carnes) {
    const carne = document.getElementById(`carne-${index}`).value;
    nomeFinal += " - " + carne;
  }

  carrinho.push({ nome: nomeFinal, preco: precoFinal });
  total += precoFinal;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("cart-items");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
  });

  document.getElementById("total").innerText =
    "Total: R$ " + total.toFixed(2);
}

function limparCarrinho() {
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "Olá! Quero fazer um pedido:%0A%0A";

  carrinho.forEach(item => {
    mensagem += "- " + item.nome + "%0A";
  });

  mensagem += "%0ATotal: R$ " + total.toFixed(2);
  mensagem += "%0A%0APagamento via Pix.";

  window.open(`https://wa.me/5548991763218?text=${mensagem}`);
}
