const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-conteiner__texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e 
    que aproximadamente ${total_pessoas_mundo_conectadas} estão`
}

vizualizarInformacoesGlobais()
