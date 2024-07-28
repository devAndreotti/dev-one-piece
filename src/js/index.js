const personagens = document.querySelectorAll('.personagem');
const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add('selecionado');
        personagens[indice].classList.add('selecionado');
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}