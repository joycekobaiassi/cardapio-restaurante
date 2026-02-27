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
    descricao: "Delicioso macarrão oriental servido com ovos e carne em tirinhas, finalizado com cebolinha fresca e um caldo quentinho e aromático.",
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
    imagem: "imagens/soba.png",
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
    descricao: "Macarrão oriental com legumes frescos e tempero tradicional.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 },
      { nome: "Sachê de shoyu", preco: 2 }
    ]
  },

  {
    nome: "Yakimeshi Tropical 1kg",
    preco: 85,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Arroz soltinho com frango, abacaxi, presunto e legumes.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 }
    ]
  },

  {
    nome: "Yakimeshi Especial 500ml",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Versão individual leve e saborosa.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 }
    ]
  },

  // -------- CASEIRO --------

  {
    nome: "Marmitex Caseiro Completo",
    preco: 28,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/marmitex.png",
    descricao: "Arroz, feijão, bife acebolado, fritas e salada.",
    adicionais: [
      { nome: "Ovo cozido", preco: 2 },
      { nome: "Salada extra de Legumes cozidos", preco: 4 }
    ]
  },

  {
    nome: "Filé Acebolado com Fritas",
    preco: 65,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/porcaofie.png",
    descricao: "Contrafilé acebolado com fritas crocantes.",
    adicionais: [
      { nome: "Molho verde extra", preco: 5 }
    ]
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

// ================= GERAR PRODUTOS =================

produtos.forEach((produto, index) => {

  let container;

  if (produto.categoria === "oriental") {
    container = oriental;
  } else if (produto.categoria === "caseiro") {
    container = caseiro;
  } else {
    container = bebidas;
  }

  container.innerHTML += `
<div class="item">

  <img src="${produto.imagem}" alt="${produto.nome}">

  <div class="item-content">
    <h3>${produto.nome}</h3>
    <p style="color:orange">${produto.serve}</p>
    <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
      <p style="color:orange">${produto.serve}</p>
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

        ${produto.adicionais ? `
          <p><strong>Adicionais:</strong></p>
          ${produto.adicionais.map((ad, i) => `
            <label>
              <input type="checkbox" id="ad-${index}-${i}">
              ${ad.nome} (+R$ ${ad.preco})
            </label><br>
          `).join("")}
          <br>
        ` : ""}

        <button onclick="adicionar(${index})">
          Adicionar ao pedido
        </button>
      </div>
    </div>
  `;
});

// ================= RESTANTE DO CÓDIGO (CARRINHO E WHATSAPP) =================

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

  if (produto.adicionais) {
    produto.adicionais.forEach((ad, i) => {
      const checkbox = document.getElementById(`ad-${index}-${i}`);
      if (checkbox && checkbox.checked) {
        nomeFinal += " + " + ad.nome;
        precoFinal += ad.preco;
      }
    });
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


