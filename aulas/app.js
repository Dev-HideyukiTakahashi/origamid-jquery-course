/* Seletor */

function seletores() {
  // Seletor de ID começa com '#' da mesma forma que css
  const titulo = $('#titulo');

  // Seletor de classe começa com '.' da mesma forma que css
  const paragrafo = $('.paragrafo');

  console.log(titulo.html()); // out: Curso de Jquery na plataforma origamid
  console.log(paragrafo.html()); // out: Selecionando classe com jquery

  // Verificando se o elemento existe, se o elemento tem 'tamanho(lenght)'
  if ($('#titulo').length) {
    console.log('Título existe!');
  }

  // Selecionando múltiplos elementos
  $('#titulo , .paragrafo').hide(); // escondendo os 2 elementos
}

seletores();
