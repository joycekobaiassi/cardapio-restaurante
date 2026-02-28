let carrinho = [];
let total = 0;

const TAXA_ENTREGA = 5;
// ================= GERAR PRODUTOS =================

produtos.forEach((produto, index) => {
@@ -272,6 +272,66 @@ function finalizarPedido() {
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

    // Se estiver fora do raio
    if (distancia > 3) {
      window.open("https://www.ifood.com.br/delivery/sao-jose-sc/soba-mania-jardim-cidade-de-florianopolis/5ee33448-e773-442a-aab4-cd6a9efe2145", "_blank");
      return;
    }

    // Se estiver dentro do raio, mostrar formulário
    const formulario = document.getElementById("formEndereco");
    formulario.style.display = "block";

    const rua = document.getElementById("rua").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;

    if (!rua || !bairro) {
      alert("Preencha seu endereço para continuar.");
      return;
    }

    // SOMAR TAXA DE ENTREGA
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

    mensagem += "%0A%0APagamento via Pix.";

    window.open(`https://wa.me/5548991763218?text=${mensagem}`, "_blank");

  });

}

  navigator.geolocation.getCurrentPosition(function(position) {

    const latUsuario = position.coords.latitude;
@@ -399,4 +459,5 @@ function calcularDistancia(lat1, lon1, lat2, lon2) {
