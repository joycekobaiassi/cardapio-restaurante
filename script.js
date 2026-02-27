// ================= PRODUTOS =================

const produtos = [

  // -------- ORIENTAL --------

  {
    nome: "Sobá 1l Carne(Bovino, frango, suíno) - Comem Duas Pessoas",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/soba.png",
    descricao: "Delicioso macarrão oriental servido com ovos e carne bovina cortados em tirinhas, finalizado com cebolinha fresca e um caldo quentinho e aromático. Uma combinação perfeita de sabor e conforto! Come bem uma pessoa. Serve 2 pessoa.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 },
      { nome: "Sachê de shoyu", preco: 2 }
    ]
  },

  {
    nome: "Sobá (Bovino, frango, suíno) 500ml -",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: true,
    imagem: "imagens/sobaindividual.png",
    descricao: "Delicioso macarrão oriental servido com ovos e carne bovina cortados em tirinhas, finalizado com cebolinha fresca e um caldo quentinho e aromático. Uma combinação perfeita de sabor e conforto! Come bem uma pessoa. Serve 1 pessoa.",
    adicionais: [
      { nome: "Gengibre ralado", preco: 5 },
      { nome: "Hashi", preco: 4 },
      { nome: "Sachê de shoyu", preco: 2 }
    ]
  },

  {
    nome: "Yakisoba - (Bovino, frango, suíno) - 1 kilo",
    preco: 67,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/yakisoba.png",
    descricao: "Ingredientes : Bovino ou Frango, Macarrão, cenoura, pimentão verde, vermelho e amarelo, vagem, ervilha, repolho , couve flor , brócolis , moyashi , cebolinha e ovo de codorna, utilizando tempero tradicional de família."
  },

  {
    nome: "Yakisoba Família  Frango- 2kg - Serve Bem 4 Pessoas",
    preco: 120,
    categoria: "oriental",
    serve: "Serve bem 4 pessoas",
    carnes: true,
    imagem: "imagens/yakisobafamilia.png",
    descricao: "Ingredientes do Yakisoba : Carne ou  Frango, Macarrão, cenoura, pimentão verde, vermelho e amarelo, vagem, ervilha,  repolho , couve flor , brócolis , moyashi , cebolinha  e ovo de codorna, utilizando tempero tradicional do Yakisoba da família. Esse Yakisoba serve bem 4 pessoas.."
  },

  {
    nome: "Yakimeshi Tropical com Frango e Abacaxi 1kg",
    preco: 85,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Uma explosão de sabores surpreendente! Arroz soltinho com frango macio, cubinhos de abacaxi fresco, presunto, cenoura, cebolinha e tirinhas de ovo. O contraste entre o salgado e o doce deixa esse prato irresistível e cheio de personalidade. Perfeito para quem ama um toque tropical na culinária oriental! R$ 85,00 Servem 2 pessoas"
  },

  {
    nome: "Yakimeshi Especial com Frango e Presunto 500ml",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/yakimeshi.png",
    descricao: "Uma combinação deliciosa e leve: arroz soltinho com frango desfiado, cubinhos de presunto, cenoura picada, tirinhas de ovo e cebolinha fresca. Um prato inspirado na culinária oriental, equilibrado no sabor e perfeito para qualquer momento! Serve 1 pessoa R$ 45,00"
  },

  // -------- CASEIRO --------

  {
{
  nome: "Marmitex Caseiro Completo",
  preco: 28,
  categoria: "caseiro",
  serve: "Serve 1 pessoa",
  carnes: true,
  imagem: "imagens/marmitex.png",
  descricao: "Marmitex de comida caseira feita com carinho: arroz soltinho, feijão fresquinho, bife acebolado suculento, batata frita crocante e salada de alface com tomate. Uma refeição completa, saborosa e com gostinho de casa!."
}

  {
    nome: "Filé Acebolado com Fritas e Molho Verde",
    preco: 65,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/porcaofile.png",
    descricao: "300g de suculento contrafilé em tiras, acebolado e finalizado com nosso molho especial da casa. Acompanha 200g de batatas fritas douradas e crocantes, servidas com nosso exclusivo molho verde caseiro. Uma combinação perfeita para quem busca sabor e qualidade! R$ 65,00."
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
  },

  {
    nome: "Coca-Cola 1,5 litro",
    preco: 14,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    imagem: "imagens/cocalitro.png",
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
    ${
      produto.categoria === "caseiro"
        ? `
          <option value="Bife Bovino">Bife Bovino</option>
          <option value="Bife de Frango">Bife de Frango</option>
        `
        : `
          <option value="Bovino">Bovino</option>
          <option value="Frango">Frango</option>
          <option value="Suíno">Suíno</option>
        `
    }
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




