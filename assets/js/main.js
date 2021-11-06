/* Botão favorito */

const botaoFavorito = document.querySelectorAll('.btn__favorite');


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));