/* Botão favorito */

const botaoFavorito = document.querySelectorAll('.btn__favorite');

const url = 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=1e2560598184480183fc18b9161c6d0b'
const wrapper = document.querySelector('[data-js="noticias"]')


fetch(url).then((response) => {
  return response.json();
}).then((noticias)=>{

  let saida = "";
  let ultimasNoticias = noticias.articles;
  console.log(ultimasNoticias)


  for(var i in ultimasNoticias){
    let data = ultimasNoticias[i].publishedAt.substr(0 ,10).replace('-', '/').replace('-', '/');
    
    saida += `
    <div class="blog__conteudo-wrapper-item">
        <div class="blog__conteudo-wrapper-item-nav">
            <span class="data__publicacao" data-dia="02/07/21">${data}</span>
            <a href="#" class="btn__favorite"></a>
        </div>
        <div class="blog__conteudo-wrapper-item-texto">
            <h2 class="titulo__materia" data-titulo="${ultimasNoticias[i].title}">${ultimasNoticias[i].title}</h2>
            <p class="texto__materia" data-texto="${ultimasNoticias[i].description}">${ultimasNoticias[i].description}</p>
        </div>
    </div>
    `
   wrapper.innerHTML = saida;

  }

})


  // const divNoticias = noticias.reduce((acumulador, noticia, i) => {
  //   let artigos = noticia.articles[acumulador].title;
  //   console.log(artigos)

  //   acumulador += `
    
  //   <div class="blog__conteudo-wrapper-item">
  //      <div class="blog__conteudo-wrapper-item-nav">
  //          <span class="data__publicacao" data-dia="02/07/21">02/07/2021</span>
  //          <a href="#" class="btn__favorite"></a>
  //      </div>
  //      <div class="blog__conteudo-wrapper-item-texto">
  //          <h2 class="titulo__materia" data-titulo="">${artigos}</h2>
  //          <p class="texto__materia" data-texto="${noticia.body}"">${noticia.body}</p>
  //      </div>
  //  </div>
  //  `
 
  //  return acumulador;
  // }, '');


// const pegarNoticias = id => `https://jsonplaceholder.typicode.com/posts/${id}`;

// const postsPromises = [];
// for (let i = 1; i <= 100; i++) {
//   postsPromises.push(fetch(pegarNoticias(i)).then(response => response.json()));
// }

// console.log(postsPromises)

// Promise.all(postsPromises).then((noticias => {

//   const divNoticias = noticias.reduce((acumulador, noticia) => {
//     return acumulador += `
//     <div class="blog__conteudo-wrapper-item">
//     <div class="blog__conteudo-wrapper-item-nav">
//         <span class="data__publicacao" data-dia="02/07/21">02/07/2021</span>
//         <a href="#" class="btn__favorite"></a>
//     </div>
//     <div class="blog__conteudo-wrapper-item-texto">
//         <h2 class="titulo__materia" data-titulo="${noticia.title}">${noticia.title}</h2>
//         <p class="texto__materia" data-texto="${noticia.body}"">${noticia.body}</p>
//     </div>
// </div>
//     `;

//   }, '')

//   const wrapper = document.querySelector('[data-js="noticias"]')
//   wrapper.innerHTML = divNoticias;
// }))




