// data/conteudo.js
window.conteudo = {
  home: {
    titulo: "🌱 Bem-vindo à Verde Futuro 🌱",
    html: `
      <section class="text-center">
        <h2 class="text-success mb-3">Cuidando do planeta e das pessoas</h2>
        <p>Somos uma organização sem fins lucrativos que atua na preservação ambiental e combate à fome através de reflorestamento, hortas comunitárias e educação ambiental.</p>
        <img src="https://picsum.photos/id/16/900/400" class="img-fluid rounded shadow mt-3" alt="Natureza">
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
