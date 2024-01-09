$(document).ready(() => {
  $('header button').click(() => {
    $('form').slideDown();
  });

  $('#botao-cancelar').click(() => {
    $('form').slideUp();
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
  });
});
