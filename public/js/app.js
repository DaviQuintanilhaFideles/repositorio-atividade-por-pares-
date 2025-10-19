// Conteúdos das páginas SPA
window.conteudo = {
  home: {
    titulo: "🌱 Bem-vindo à Verde Futuro 🌱",
    html: `
      <!-- Carrossel -->
      <section class="my-4">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
          </div>
          <div class="carousel-inner rounded-4 shadow">
            <div class="carousel-item active">
              <img src="https://picsum.photos/id/1018/1200/400" class="d-block w-100" alt="Natureza">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Preservar é viver</h5>
                <p>Juntos, podemos transformar o meio ambiente em um futuro mais verde.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/id/1021/1200/400" class="d-block w-100" alt="Reflorestamento">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Reflorestar para renascer</h5>
                <p>Recuperar áreas degradadas e devolver vida à natureza.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/id/1032/1200/400" class="d-block w-100" alt="Educação ambiental">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Educar para mudar</h5>
                <p>Pequenas atitudes criam grandes transformações.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
          </button>
        </div>
      </section>

      <!-- Cards de projetos -->
      <section class="my-5">
        <h2 class="text-center text-success mb-4">Projetos em Destaque</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src="https://picsum.photos/id/1040/400/250" class="card-img-top" alt="Reflorestamento">
              <div class="card-body">
                <h5 class="card-title">Projeto Reflorestamento</h5>
                <p class="card-text">Ações de plantio de árvores em áreas degradadas, promovendo a recuperação ambiental e a biodiversidade.</p>
                <button class="btn btn-success w-100 mt-2" onclick="detalhesProjeto('reflorestamento')">Saiba Mais</button>
              </div>
              <div class="card-footer text-success fw-bold">Meio Ambiente</div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src="https://picsum.photos/id/1050/400/250" class="card-img-top" alt="Horta Comunitária">
              <div class="card-body">
                <h5 class="card-title">Horta Comunitária</h5>
                <p class="card-text">Criação e manutenção de hortas coletivas para fortalecer a alimentação saudável e o convívio comunitário.</p>
                <button class="btn btn-success w-100 mt-2" onclick="detalhesProjeto('horta')">Saiba Mais</button>
              </div>
              <div class="card-footer text-success fw-bold">Sustentabilidade</div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src="https://picsum.photos/id/1060/400/250" class="card-img-top" alt="Educação Ambiental">
              <div class="card-body">
                <h5 class="card-title">Educação Ambiental</h5>
                <p class="card-text">Oficinas e palestras em escolas e comunidades, incentivando práticas ecológicas e consciência ambiental.</p>
                <button class="btn btn-success w-100 mt-2" onclick="detalhesProjeto('educacao')">Saiba Mais</button>
              </div>
              <div class="card-footer text-success fw-bold">Educação</div>
            </div>
          </div>
        </div>
      </section>
    `
  },
  sobre: { titulo: "Sobre Nós", html: "<p>Conteúdo sobre a Verde Futuro.</p>" },
  servicos: { titulo: "Serviços", html: "<p>Conteúdo sobre serviços.</p>" },
  contatos: { titulo: "Contatos", html: "<p>Formulário ou informações de contato.</p>" },
  doacoes: { titulo: "Doações", html: "<p>Informações sobre doações.</p>" },
  localizacoes: { titulo: "Localizações", html: "<p>Mapa e endereços das unidades.</p>" }
};

// Carrega a página
function carregarPagina(pagina) {
  const conteudoPagina = window.conteudo[pagina];
  if (!conteudoPagina) return;
  document.getElementById("titulo-pagina").innerText = conteudoPagina.titulo;
  document.getElementById("conteudo").innerHTML = conteudoPagina.html;
  history.pushState({ pagina }, conteudoPagina.titulo, `#${pagina}`);
}

// Inicialização e menu
document.addEventListener("DOMContentLoaded", () => {
  const paginaInicial = location.hash.replace("#", "") || "home";
  carregarPagina(paginaInicial);

  const linksMenu = document.querySelectorAll("nav a");
  linksMenu.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = link.getAttribute("href").replace("#", "");
      carregarPagina(pagina);
    });
  });
});

// Voltar/Avançar navegador
window.addEventListener("popstate", (event) => {
  const pagina = event.state?.pagina || "home";
  carregarPagina(pagina);
});


