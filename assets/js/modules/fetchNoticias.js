
export default function getNoticias() {


    // const url = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=1e2560598184480183fc18b9161c6d0b`


    const url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=pt&' +
        'apiKey=REM4gJuyFwfGNm9CtbtVbi3vhF-DI20JecYd6RoVHuHbMYN1';

    var req = new Request(url);


    const wrapper = document.querySelector('[data-js="noticias"]')


    function getNews({ title, description, url, category, published }) {

        let data = published.substr(0, 10).replace('-', '/').replace('-', '/');

        return ` <div class="blog__conteudo-wrapper-item">
            <div class="blog__conteudo-wrapper-item-nav">
                <span class="data__publicacao" data-dia="${data}">${data}</span>
                <span>${category}</span>
                <a href="#" class="btn__favorite"></a>
            </div>
            <div class="blog__conteudo-wrapper-item-texto">
                <h2 class="titulo__materia" data-titulo="${title}">${title}</h2>
                <p class="texto__materia" data-texto="${description}">${description}</p>
                <a href="${url}" target="_blank" class="ver_mais">Ler mais</a>
                <p>${category.join(",")} </p>
            </div>
        </div>
        `
    }
    const mostraApenas15 = (i, index) => index < 155

    function mostrarNoticias() {
        fetch(req)
            .then((response) => {
                return response.json();
            })
            .then((noticias) => {
                const ultimasNoticias = noticias.news;
                console.log(ultimasNoticias)
                const saida = ultimasNoticias
                    .map(getNews)
                    .filter(mostraApenas15)

                wrapper.innerHTML = saida.join("");
                filtrarNoticias()
            })


    }

    /* atualizar de hora em hora */
    setInterval(mostrarNoticias, 1000 * 60 * 60)
    mostrarNoticias()



    function filtrarNoticias() {
        const btnBusca = document.querySelector('#btnBusca');
        const inptBusca = document.querySelector('#inptBusca')
        const noticiasItem = document.querySelectorAll(".blog__conteudo-wrapper-item")


        /* limpar busca */
        function limpar(index) {
            noticiasItem.forEach((div) => {
                div.style.display = "block";
            })
        }

        /* função que remove caracteres especiais*/
        function removeEspeciais(div) {
            return div.innerHTML.toUpperCase().replace(/[ÀÁÂÃÄÅ]/g, "A");
        }

        /* filtro da busca */
        function filtro(e) {
            console.log(e)
            noticiasItem.forEach((div, index) => {
                const valorInput = inptBusca.value.toUpperCase().replace(/[ÀÁÂÃÄÅ]/g, "A");
                if (removeEspeciais(div).indexOf(valorInput) == -1) {
                    div.style.display = "none";
                    inptBusca.addEventListener("input", function () {
                        limpar(index);
                    })
                }
            })
        }

        /* evento de clique nas teclas dentro do campo de busca*/
        inptBusca.addEventListener('keyup', filtro)
    }
}
