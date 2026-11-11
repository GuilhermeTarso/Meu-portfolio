document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // FUNCIONALIDADE 1: LISTA INTERATIVA (ADIÇÃO, EXCLUSÃO E ACESSIBILIDADE)
  // ==========================================================================
  const botaoAdicionar = document.getElementById("adicionar");
  const campoEntrada = document.getElementById("entrada");
  const listaItens = document.getElementById("lista");
  const statusLista = document.getElementById("status-lista");

  function adicionarItem() {
    const texto = campoEntrada.value.trim();
    if (texto !== "") {
      // Cria o item da lista (li)
      const item = document.createElement("li");
      item.className = "list-group-item d-flex justify-content-between align-items-center";
      
      // Cria um span e injeta o texto com textContent
      const spanTexto = document.createElement("span");
      spanTexto.textContent = texto;
      
      // Cria o botão de exclusão
      const btnExcluir = document.createElement("button");
      btnExcluir.type = "button";
      btnExcluir.className = "btn btn-sm btn-outline-danger";
      btnExcluir.innerHTML = '<i class="bi bi-trash" aria-hidden="true"></i>';
      btnExcluir.setAttribute("aria-label", "Remover item");
      
      // Lógica de exclusão do item e anúncio acessível
      btnExcluir.addEventListener("click", function() {
        listaItens.removeChild(item);
        if (statusLista) statusLista.textContent = "Item removido da lista.";
        campoEntrada.focus();
      });
      
      // Montagem
      item.appendChild(spanTexto);
      item.appendChild(btnExcluir);
      listaItens.appendChild(item);
      
      // Limpa campo, foca novamente e anuncia a adição
      campoEntrada.value = "";
      campoEntrada.focus();
      if (statusLista) statusLista.textContent = "Item adicionado à lista.";
    }
  }

  if (botaoAdicionar && campoEntrada && listaItens) {
    botaoAdicionar.addEventListener("click", adicionarItem);
    
    campoEntrada.addEventListener("keydown", function (evento) {
      if (evento.key === "Enter") {
        evento.preventDefault(); 
        adicionarItem();
      }
    });
  }

  // ==========================================================================
  // FUNCIONALIDADE 2: FECHAMENTO AUTOMÁTICO DO MENU MOBILE
  // ==========================================================================
  const itensMenu = document.querySelectorAll(".navbar-nav .nav-link");
  const menuCollapseElement = document.getElementById("menuCollapse");

  itensMenu.forEach(link => {
    link.addEventListener("click", () => {
      if (menuCollapseElement && menuCollapseElement.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(menuCollapseElement) || new bootstrap.Collapse(menuCollapseElement, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  // ==========================================================================
  // FUNCIONALIDADE 3: SCROLLSPY (ARIA-CURRENT)
  // ==========================================================================
  window.addEventListener("activate.bs.scrollspy", () => {
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    links.forEach(link => {
      // O Bootstrap automaticamente injeta a classe .active no link visível
      if (link.classList.contains("active")) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  });

  // ==========================================================================
  // FUNCIONALIDADE 4: BOTÃO VOLTAR AO TOPO
  // ==========================================================================
  const btnTopo = document.getElementById("btn-topo");
  if (btnTopo) {
    btnTopo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0
      });
    });
  }
});
