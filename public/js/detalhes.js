// Dados dos projetos
window.projetos = {
  reflorestamento: {
    titulo: "Projeto Reflorestamento",
    descricao: "Ações de plantio de árvores em áreas degradadas, promovendo a recuperação ambiental e a biodiversidade. Inclui oficinas de conscientização e envolvimento comunitário.",
    imagem: "https://picsum.photos/id/1040/800/400"
  },
  horta: {
    titulo: "Horta Comunitária",
    descricao: "Criação e manutenção de hortas coletivas para fortalecer a alimentação saudável e o convívio comunitário. Incentiva práticas sustentáveis e educação ambiental.",
    imagem: "https://picsum.photos/id/1050/800/400"
  },
  educacao: {
    titulo: "Educação Ambiental",
    descricao: "Oficinas e palestras em escolas e comunidades, incentivando práticas ecológicas e consciência ambiental. Foco em crianças e jovens para criar futuros líderes ambientais.",
    imagem: "https://picsum.photos/id/1060/800/400"
  }
};

// Abre os detalhes do projeto
function detalhesProjeto(projeto) {
  const dados = window.projetos[projeto];
  if (!dados) return;

  // Cria conteúdo do detalhe
  const html = `
    <div class="card shadow-sm">
      <img src="${dados.imagem}" class="card-img-top" alt="${dados.titulo}">
      <div class="card-body">
        <h3 class="card-title text-success">${dados.titulo}</h3>
        <p class="card-text">${dados.descricao}</p>
        <button class="btn btn-secondary" onclick="carregarPagina('home')">Voltar</button>
      </div>
    </div>
  `;
  document.getElementById("titulo-pagina").innerText = dados.titulo;
  document.getElementById("conteudo").innerHTML = html;
}
