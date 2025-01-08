// Seleciona o botão e o parágrafo
const botao = document.getElementById('botao') as HTMLButtonElement;
const mensagem = document.getElementById('mensagem') as HTMLParagraphElement;

// Adiciona evento de clique ao botão
botao.addEventListener('click', () => {
  mensagem.textContent = 'Olá, mundo!';
});
