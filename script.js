const botao = document.getElementById("adicionar");
const entrada = document.getElementById("entrada");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
  if (entrada.value.trim() !== "") {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = entrada.value;
    lista.appendChild(item);
    entrada.value = ""; // limpa o campo após adicionar
  }
});

// --- ITEM 2: MENU DINÂMICO (Destaque na rolagem corrigido) ---
const secoes = document.querySelectorAll("section");
const itensMenu = document.querySelectorAll("#menu-principal a");

window.addEventListener("scroll", () => {
  let posicaoAtual = window.scrollY;

  secoes.forEach((secao) => {
    const topoSecao = secao.offsetTop - 120;
    const alturaSecao = secao.offsetHeight;
    const idSecao = secao.getAttribute("id");

    // Condição normal para as seções do topo/meio
    if (posicaoAtual >= topoSecao && posicaoAtual < topoSecao + alturaSecao) {
      itensMenu.forEach((item) => {
        item.classList.remove("active", "fw-bold", "text-warning");
        if (item.getAttribute("href") === `#${idSecao}`) {
          item.classList.add("active", "fw-bold", "text-warning");
        }
      });
    }
  });

  // Correção para o último item (Contato) quando chega no rodapé
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    itensMenu.forEach((item) => {
      item.classList.remove("active", "fw-bold", "text-warning");
      if (item.getAttribute("href") === "#contato") {
        item.classList.add("active", "fw-bold", "text-warning");
      }
    });
  }
});

// --- ITEM 3: BOTÃO VOLTAR AO TOPO ---
const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {
  btnTopo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Captura do formulário de contato e alerta personalizado
const formContato = document.getElementById("formContato");

if (formContato) {
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Impede o envio padrão e o recarregamento da página

    const nomeContato = document.getElementById("nome").value.trim();
    const emailContato = document.getElementById("email").value.trim();
    const mensagemContato = document.getElementById("mensagem").value.trim();

    alert(
      `Obrigado, ${nomeContato}! Sua mensagem foi enviada com sucesso.\n\nE-mail: ${emailContato}\nMensagem: ${mensagemContato}`
    );

    formContato.reset(); // Limpa os campos após confirmar o envio
  });
}
