const proxyUrl = "https://cors-anywhere.herokuapp.com/"

const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=1e2560598184480183fc18b9161c6d0b`




const wrapper = document.querySelector('[data-js="noticias"]')

function mostrarNoticias() {
  let saida = "";
  let ultimasNoticias;

  fetch(url).then((response) => {
    return response.json();
  }).then((noticias) => {

    saida = saida = "";
    ultimasNoticias = noticias.articles;
    console.log(ultimasNoticias)


    for (var i in ultimasNoticias) {
      let data = ultimasNoticias[i].publishedAt.substr(0, 10).replace('-', '/').replace('-', '/');

      saida += `
    <div class="blog__conteudo-wrapper-item">
        <div class="blog__conteudo-wrapper-item-nav">
            <span class="data__publicacao" data-dia="${data}">${data}</span>
            <a href="#" class="btn__favorite"></a>
        </div>
        <div class="blog__conteudo-wrapper-item-texto">
            <h2 class="titulo__materia" data-titulo="${ultimasNoticias[i].title}">${ultimasNoticias[i].title}</h2>
            <p class="texto__materia" data-texto="${ultimasNoticias[i].description}">${ultimasNoticias[i].description}</p>
            <a href="${ultimasNoticias[i].url}" target="_blank" class="ver_mais">Ler mais</a>
        </div>
    </div>
    `
      wrapper.innerHTML = saida;
    }
    filtrarNoticias()

    
  })


}




setInterval(mostrarNoticias, 1000 * 60 * 60)

mostrarNoticias()






function filtrarNoticias() {
  const btnBusca = document.querySelector('#btnBusca');
  const inptBusca = document.querySelector('#inptBusca')
  const noticiasItem = document.querySelectorAll(".blog__conteudo-wrapper-item")


  function limpar(index) {
    noticiasItem.forEach((div)=>{
      div.style.display="block";
    })
  }


  function filtro() {
    noticiasItem.forEach((div, index) => {
      const valorInput = inptBusca.value.toUpperCase();
      if ((div).innerHTML.toUpperCase().indexOf(valorInput) == -1) {
        div.style.display = "none";
        inptBusca.addEventListener("input", function(){
          limpar(index)
        })
      }
    })
  }


  inptBusca.addEventListener('keyup', filtro)
}