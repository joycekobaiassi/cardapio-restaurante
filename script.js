// ================= PRODUTOS =================

const produtos = [

  {
    nome: "Sobá 1l Carne (Bovino, Frango, Suíno) - Serve 2 Pessoas",
    preco: 78,
    categoria: "oriental",
    serve: "Serve 2 pessoas",
    carnes: true,
    imagem: "imagens/soba.png",
    descricao: "Macarrão oriental tradicional com caldo aromático."
  },

  {
    nome: "Sobá 500ml - Serve 1 Pessoa",
    preco: 45,
    categoria: "oriental",
    serve: "Serve 1 pessoa",
    carnes: true,
    imagem: "imagens/sobaindividual.png",
    descricao: "Sobá individual tradicional."
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
    descricao: "Arroz, feijão, bife acebolado e batata."
  },

  {
    nome: "Filé Acebolado com Fritas",
    preco: 65,
    categoria: "caseiro",
    serve: "Serve 1 pessoa",
    carnes: false,
    imagem: "imagens/porcaofile.png",
    descricao: "Contrafilé acebolado com fritas."
  },

  {
    nome: "Batatas Fritas 300g",
    preco: 28,
    categoria: "caseiro",
    serve: "",
    carnes: false,
    imagem: "imagens/porcaobatata.png",
    descricao: "Batatas crocantes."
  },

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
    nome: "Coca-Cola 1,5L",
    preco: 14,
    categoria: "bebidas",
    serve: "",
    carnes: false,
    imagem: "imagens/cocalitro.png",
    descricao: "Refrigerante 1,5 litro."
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
  const produto = produtos[index];
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

  navigator.geolocation.getCurrentPosition(function(position) {

    const latUsuario = position.coords.latitude;
    const lonUsuario = position.coords.longitude;

    const latRestaurante = -27.5955;
    const lonRestaurante = -48.6150;

    const distancia = calcularDistancia(
      latUsuario,
      lonUsuario,
      latRestaurante,
      lonRestaurante
    );

    if (distancia > 3) {
      window.open(
        "https://www.ifood.com.br/delivery/sao-jose-sc/soba-mania-jardim-cidade-de-florianopolis/5ee33448-e773-442a-aab4-cd6a9efe2145",
        "_blank"
      );
      return;
    }

    const rua = document.getElementById("rua").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;

    if (!rua || !bairro) {
      document.getElementById("formEndereco").style.display = "block";
      alert("Preencha seu endereço para continuar.");
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

  });

}

// ================= CALCULAR DISTÂNCIA =================

function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
