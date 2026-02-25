// ================= PRODUTOS =================

// ================= PRODUTOS =================

const produtos = [

  // -------- ORIENTAL --------

  {
    nome: "Sobá 1L",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    descricao: "Delicioso macarrão oriental servido com ovos e carne em tirinhas, finalizado com cebolinha fresca e um caldo quentinho e aromático. Uma combinação perfeita de sabor e conforto!",
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
    descricao: "O mesmo sabor incrível em uma versão ideal para uma pessoa. Caldo quentinho, macarrão oriental, carne em tirinhas e cebolinha fresca.",
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
    descricao: "Macarrão oriental com cenoura, pimentões coloridos, vagem, ervilha, repolho, couve-flor, brócolis, moyashi, cebolinha e ovo de codorna. Tudo preparado com nosso tempero tradicional de família.",
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
    descricao: "Uma explosão de sabores! Arroz soltinho com frango macio, cubinhos de abacaxi fresco, presunto, cenoura, cebolinha e tirinhas de ovo. O contraste entre o salgado e o doce deixa esse prato irresistível.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 }
    ]
  },

  {
    nome: "Yakimeshi Especial 1kg",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: false,
    descricao: "Arroz soltinho com frango desfiado, cubinhos de presunto, cenoura picada, tirinhas de ovo e cebolinha fresca. Leve, equilibrado e perfeito para qualquer momento.",
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
    descricao: "A versão individual dessa combinação deliciosa e reconfortante, com arroz soltinho, frango desfiado, presunto e legumes.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 }
    ]
  },

  {
    nome: "Arroz Chinês 1kg",
    preco: 75,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: false,
    descricao: "Arroz soltinho com lombo de porco macio, cenoura ralada, repolho, cebola, omelete em tiras e um toque de gergelim, envolvido em nosso molho agridoce de shoyu.",
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
    descricao: "Comida caseira feita com carinho: arroz soltinho, feijão fresquinho, bife acebolado suculento, batata frita crocante e salada. Uma refeição completa com gostinho de casa!",
    adicionais: [
      { nome: "Ovo cozido", preco: 2 },
      { nome: "Salada extra de Legumes cozidos", preco: 4 }
    ]
  },

  {
    nome: "Frango Xadrez com Arroz",
    preco: 89,
    categoria: "caseiro",
    serve: "Serve 2 pessoas",
    carnes: false,
    descricao: "500g de frango xadrez com cenoura, pimentões coloridos e castanha crocante. Acompanha 500g de arroz soltinho."
  },

  {
    nome: "Filé Acebolado com Fritas",
    preco: 65,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    descricao: "300g de contrafilé acebolado finalizado com molho especial da casa. Acompanha batatas fritas crocantes e molho verde caseiro.",
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
    descricao: "Batatas sequinhas, crocantes por fora e macias por dentro. Perfeitas para acompanhar ou compartilhar!"
  },

  {
    nome: "Chipa Paraguaia (4 un.)",
    preco: 45,
    categoria: "caseiro",
    serve: "",
    carnes: false,
    descricao: "Tradicional e irresistível! Feita com polvilho e muito queijo. Crocante por fora, macia por dentro e com aquele toque caseiro que abraça a alma."
  },

  {
    nome: "Café Caseiro 180ml",
    preco: 13.9,
    categoria: "caseiro",
    serve: "",
    carnes: false,
    descricao: "Café fresquinho, passado na hora, com sabor caseiro para acompanhar seu pedido."
  },

  // -------- BEBIDAS --------

  {
    nome: "Coca-Cola Lata 350ml",
    preco: 7,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    descricao: "Refrigerante gelado para acompanhar sua refeição."
  },

  {
    nome: "Coca-Cola 1,5L",
    preco: 15,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    descricao: "Perfeita para compartilhar."
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
      <h3>${produto.nome}</h3>
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

// ================= FUNÇÕES =================

function toggleDetalhes(index) {
  const el = document.getElementById(`det-${index}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function adicionar(index) {

  let produto = produtos[index];
  let nomeFinal = produto.nome;
  let precoFinal = produto.preco;

  // Carne
  if (produto.carnes) {
    const carne = document.getElementById(`carne-${index}`).value;
    nomeFinal += " - " + carne;
  }

  // Adicionais
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