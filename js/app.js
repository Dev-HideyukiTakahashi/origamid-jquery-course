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
// outside();  


/* Eventos básicos */

function eventosBasicos() {
  // Gerando um evento ao clicar em um link<a> com a classe linkTeste
  $('.linkTeste').on('click', () => {
    $('.linkTeste').text('Clicou');
  });

  $('h1').on('mouseenter', function (event) {
    // podemos passar o this para referenciar o parâmetro da seleção acima
    // muda o texto do h1 ao passar o mouse perto
    $(this).text("Acessando o H1");
  });

  $('h1').on('mouseleave', function (event) {
    // muda o texto do h1 ao passar o mouse longe
    $(this).text("Saindo do H1");
  });
}
// eventosBasicos();


/* Classes */

function classes() {
  // adiciona a classe 'active' no conteúdo do <a>Teste</a>
  $('.linkTeste').on('click', (event) => {
    event.preventDefault();
    // remover com removeClass
    // toggleClasse sempre que clicar, alterar em adicionar e remover
    $('.linkTeste').addClass('active');
  });

  // verificando se tem ou não alguma classe no conteúdo
  function addCondicao() {
    var condicao = $('.linkTeste').hasClass('active');
    if (condicao) {
      console.log("Tem a classe active, faça algo.");
    } else {
      console.log("Não tem a classe active, coloque a classe.");
    }
  }
  addCondicao();
}
// classes();

/* Métodos gerais */

function metodosGerais() {
  // adicionando atributo ao conteúdo
  $('.linkTeste').attr('href', "www.google.com.br"); // adiciona o link ao href
  $('.linkTeste').attr('class', "atributo"); // altera a classe de '.linkTeste' para atributo
  $('.atributo').attr('class', "novoAtributo"); // altera classe de atributo para novoAtributo

  // incluindo o attr em uma função
  $('.novoAtributo').on('click', (event) => {
    event.preventDefault();
    $('.novoAtributo').removeAttr('href'); // remove o href
  });

  $('h1').remove();  // removendo o conteúdo completo
}
// metodosGerais();

/* Estilos */
function estilos(params) {
  var size = $('.linkTeste').css('font-size');
  console.log(size); // out: 14px

  $('.linkTeste').css('background', 'blue'); // alterando o estilo no css

  $('.linkTeste').css({  // alterando varios campos de estilo no css

    'background': 'red',
    'font-size': '50px',
  });

  // retorna o objeto com distâncias de top e left do elemento
  var modalOffset = $('a').offset();
  console.log(modalOffset); // out: {top: 15, left: 141}

}
// estilos();

/* Tranversing */



function tranversing() {
  // .each funciona como loop
  var i = 0;
  $('.menu-header li').each(function () {
    console.log(this.innerText); // out: conteúdo interno de cada <li>
    console.log(i++) // iterando cada conteúdo
  });

  // transformando o background de cada click em cada botão em azul separadamente
  $('.menu-header li').each(function () {
    $(this).on('click', (event) => {
      event.preventDefault();
      $(this).css('background', 'blue');
    });
  });
}
tranversing();


