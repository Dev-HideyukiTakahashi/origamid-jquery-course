/* Inserção */

function seletores() {
  // append adiciona no final
  $('h2').append(' Isso é um H2'); // adiciona a frase ' Isso é um H2' no final de cada H2

  $('p').append($('.introducao h1')); // adiciona o conteúdo do .introducao h1 em todos 'p'

  $('.introducao h1').appendTo('h2') // adiciona o conteúdo do .introducao h1 em todos 'h2'
}
// seletores();

function substituir() {
  // get, seleciona o primeiro elemento
  var conteudoH2 = $('h2').html(); // html() chama o primeiro elemento que encontrar
  console.log(conteudoH2); // out: produtos

  // set, seleciona todos elementos, pode ser múltiplos elementos na seleção
  $('h3').html('Teste'); // todos 'h3' foram substituídos com a palavra 'Teste'
}
// substituir();

function pegando() {
  // seleciona todos elementos que contem o parâmetro
  console.log($('h2').text());
}
// pegando();

function outside() {
  // after insere após do conteúdo do elemento
  $('p').after('<span> Inserindo após do "p" com after() </span>');

  // before insere antes do conteúdo do elemento
  $('h1').before('<span> Inserindo antes do "h1" com before() </span>');
}
outside();  