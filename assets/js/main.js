$(document).ready(() => {
  $('header button').click(() => {
    $('form').slideDown();
  });

  $('#botao-cancelar').click(() => {
    $('form').slideUp();
  });

  $('form').on('submit', (e) => {
    e.preventDefault();

    const enderecoImagem = $('#url-imagem').val();
    const novoItem = $('<li style="display: none;"></li>');
    $(`<img src="${enderecoImagem}">`).appendTo(novoItem);
    $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoImagem}" title="Ver imagem em tamanho real" target="_blank">
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#url-imagem').val('');
  });
});
