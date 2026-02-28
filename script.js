// ================= PRODUTOS =================

const produtos = [
  {
    nome: "Sobá 1l Carne(Bovino, frango, suíno) - Comem Duas Pessoas",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/soba.png",
    descricao: "Delicioso macarrão oriental com caldo quentinho e aromático."
  },
  {
    nome: "Sobá 500ml",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: true,
    imagem: "imagens/sobaindividual.png",
    descricao: "Sobá individual delicioso e bem servido."
  },
  {
    nome: "Yakisoba 1kg",
    preco: 67,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/yakisoba.png",
    descricao: "Yakisoba tradicional da família."
  },
  {
    nome: "Marmitex Caseiro Completo",
    preco: 28,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: true,
    imagem: "imagens/marmitex.png",
    descricao: "Comida caseira feita com carinho."
  },
  {
    nome: "Coca-Cola Lata 350ml",
    preco: 7,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    imagem: "imagens/cocalata.png",
    descricao: "Refrigerante gelado."
  }
];

// ================= ELEMENTOS =================

const oriental = document.getElementById("oriental");
const caseiro = document.getElementById("caseiro");
const bebidas = document.getElementById("bebidas");

let carrinho = [];
let total = 0;
const TAXA_ENTREGA = 5;

// ================= GERAR PRODUTOS =================

produtos.forEach((produto, index) => {

  let container;

  if (produto.categoria === "oriental") container = oriental;
  else if (produto.categoria === "caseiro") container = caseiro;
  else container = bebidas;

  container.innerHTML += `
    <div class="item">
      <img src="${produto.imagem}" width="120">
      <h3>${produto.nome}</h3>
      ${produto.serve ? `<p style="color:orange">${produto.serve}</p>` : ""}
      <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
      <button onclick="adicionar(${index})">Adicionar</button>
    </div>
  `;
});

// ================= CARRINHO =================

function adicionar(index) {
  let produto = produtos[index];

  carrinho.push(produto);
  total += produto.preco;

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

// ================= FINALIZAR PEDIDO =================

function finalizarPedido() {

  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  const rua = document.getElementById("rua").value;
  const complemento = document.getElementById("complemento").value;
  const bairro = document.getElementById("bairro").value;

  if (!rua || !bairro) {
    alert("Preencha seu endereço.");
    return;
  }

  const totalComEntrega = total + TAXA_ENTREGA;

  let mensagem = "Olá! Quero fazer um pedido:%0A%0A";

  carrinho.forEach(item => {
    mensagem += "- " + item.nome + "%0A";
  });

  mensagem += "%0ASubtotal: R$ " + total.toFixed(2);
  mensagem += "%0ATaxa de entrega: R$ " + TAXA_ENTREGA.toFixed(2);
  mensagem += "%0ATotal: R$ " + totalComEntrega.toFixed(2);

  mensagem += "%0A%0A📍 Endereço:%0A";
  mensagem += "Rua: " + rua + "%0A";
  mensagem += "Complemento: " + complemento + "%0A";
  mensagem += "Bairro: " + bairro;

  window.open(`https://wa.me/5548991763218?text=${mensagem}`, "_blank");
}
