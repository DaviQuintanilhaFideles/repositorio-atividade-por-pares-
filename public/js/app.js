function carregarPagina(pagina = "home") {
  const conteudo = window.conteudo;
  const area = document.getElementById("conteudo");
  const paginaSelecionada = conteudo[pagina];

  if (!paginaSelecionada) {
    area.innerHTML = "<p>Página não encontrada.</p>";
    return;
  }

  area.innerHTML = `
    <h2 class="text-center text-success mb-4">${paginaSelecionada.titulo}</h2>
    ${paginaSelecionada.html}
  `;
}

// links do menu
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const pagina = link.getAttribute("data-pagina");
    carregarPagina(pagina);
  });
});

// carrega home por padrão
carregarPagina("home");

