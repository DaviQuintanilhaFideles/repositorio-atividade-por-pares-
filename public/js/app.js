// === Dados dinâmicos das páginas (antes estava em conteudo.js) ===
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
              </div>
              <div class="card-footer text-success fw-bold">Educação</div>
            </div>
          </div>
        </div>
      </section>
    `
  },
  sobre: {
    titulo: "Sobre Nós",
    html: `
      <section>
        <h3 class="text-success">Quem Somos</h3>
        <p>A Verde Futuro acredita que sustentabilidade e solidariedade caminham juntas. Atuamos em projetos que restauram o meio ambiente e alimentam famílias em situação de vulnerabilidade.</p>
      </section>
    `
  },
  servicos: {
    titulo: "Nossos Projetos",
    html: `
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="https://picsum.photos/id/1040/400/250" class="card-img-top" alt="Reflorestamento">
            <div class="card-body">
              <h5 class="card-title">Projeto Reflorestamento</h5>
              <p class="card-text">Recuperamos áreas degradadas e promovemos a biodiversidade.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="https://picsum.photos/id/1050/400/250" class="card-img-top" alt="Horta Comunitária">
            <div class="card-body">
              <h5 class="card-title">Horta Comunitária</h5>
              <p class="card-text">Hortas urbanas sustentáveis que produzem alimento e união.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="https://picsum.photos/id/1060/400/250" class="card-img-top" alt="Educação Ambiental">
            <div class="card-body">
              <h5 class="card-title">Educação Ambiental</h5>
              <p class="card-text">Palestras e oficinas para conscientizar comunidades.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  contatos: {
    titulo: "Fale Conosco",
    html: `
      <form class="mx-auto mt-4" style="max-width: 500px;">
        <input type="text" class="form-control mb-3" placeholder="Seu nome">
        <input type="email" class="form-control mb-3" placeholder="Seu e-mail">
        <textarea class="form-control mb-3" placeholder="Mensagem"></textarea>
        <button type="submit" class="btn btn-success w-100">Enviar</button>
      </form>
    `
  },
  doacoes: {
    titulo: "Doações",
    html: `
      <p>Contribua com nossa causa e ajude a transformar vidas.</p>
      <button class="btn btn-outline-success">Fazer Doação</button>
    `
  },
  localizacoes: {
    titulo: "Nossas Localizações",
    html: `
      <p>Temos projetos em várias cidades do Brasil!</p>
      <img src="https://picsum.photos/id/1070/900/400" class="img-fluid rounded shadow" alt="Mapa">
    `
  }
};

// === Função de navegação SPA (já estava no seu app.js) ===
function carregarPagina(pagina = "home") {
  const area = document.getElementById("conteudo");
  const paginaSelecionada = window.conteudo[pagina];

  if (!paginaSelecionada) {
    area.innerHTML = "<p>Página não encontrada.</p>";
    return;
  }

  area.innerHTML = `
    <h2 class="text-center text-success mb-4">${paginaSelecionada.titulo}</h2>
    ${paginaSelecionada.html}
  `;
}

// === Eventos de clique nos links do menu ===
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const pagina = link.getAttribute("data-pagina");
    carregarPagina(pagina);
  });
});

// === Carrega home por padrão ===
carregarPagina("home");
