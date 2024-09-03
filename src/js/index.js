//- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

//- passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        //- passo 5 - esconder a imagem anteriormente selecionada
        desativarImagemAtiva();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add("ativa");

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        desativarInformacoesAtivas();

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        informacoes[indice].classList.add("ativa")
    });
})

function desativarInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}

