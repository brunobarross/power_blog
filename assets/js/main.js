


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
            <span class="data__publicacao" data-dia="${data}">${data}</span>
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


  