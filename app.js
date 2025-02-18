// console.log(dados);

function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa
    resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
        <a href="${dado.link}" target="_blank">Clique aqui para mais informações</a>
      </div>
    `;
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
