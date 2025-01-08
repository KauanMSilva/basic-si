// Seleciona o botão e o parágrafo
var botao = document.getElementById('botao');
var mensagem = document.getElementById('mensagem');
// Adiciona evento de clique ao botão
botao.addEventListener('click', function () {
    mensagem.textContent = 'Olá, mundo!';
});
