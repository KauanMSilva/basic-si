
const botao = document.getElementById('botao') as HTMLButtonElement;
const mensagem = document.getElementById('mensagem') as HTMLParagraphElement;


botao.addEventListener('click', () => {
  mensagem.textContent = 'Olá, mundo!';
});
