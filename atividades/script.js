const mensagem = document.getElementById('mensagem');
const imagem = document.getElementById('imagem');
const novoParagrafo = document.createElement('p'); //paragrafo criado via javascripy
const lista = document.getElementById('lista');
const item = document.getElementById('item2');
const titulo = document.querySelector('h1');
const img = document.querySelector('img');
const link = document.getElementById('linkExterno');
const h1 = document.querySelector('h1');
const imagens = document.querySelectorAll('img');


mensagem.innerHTML = '<strong>Olá, mundo!</strong>';
imagem.setAttribute('src', 'ideia.jpg'); 
imagem.setAttribute('alt', 'Nova descrição');

mensagem.classList.add('ativo');
mensagem.classList.remove('inativo');
mensagem.classList.toggle('ativo');

novoParagrafo.textContent = 'Parágrafo criado via JavaScript';
document.body.appendChild(novoParagrafo);

lista.removeChild(item);

titulo.style.color = 'blue';
titulo.style.fontSize = '4rem';

img.addEventListener('click', mostrarMensagem ); // Adiciona um evento de clique na imagem

  function mostrarMensagem() { //toda vez q clicar vai contando e aparece a mensagem
    console.log('Imagem clicada!');
  }

  function bloquearLink(event) { //bloqueia n da para ir na pag do link
    event.preventDefault();
    console.log('Navegação do link bloqueado');
  }
  
  link.addEventListener('click', bloquearLink);

  function mostrarThis() {
    console.log(this); // Exibe o elemento img
  }
  
  img.addEventListener('click', mostrarThis);


function mostrarTipo(event) { //toda vez q o mouse entra conta 
  console.log(`Tipo de evento: ${event.type}`);
}

img.addEventListener('click', mostrarTipo);
img.addEventListener('mouseenter', mostrarTipo);
window.addEventListener('scroll', mostrarTipo);
window.addEventListener('resize', mostrarTipo);


function atalhosTeclado(event) { //apertando essas teclas o fundo muda de cor, nesse caso so a tecla A e V 
    if (event.key === 'a') {
      document.body.classList.toggle('azul');
    } else if (event.key === 'v') {
      document.body.classList.toggle('vermelho');
    }
  }
  
  window.addEventListener('keydown', atalhosTeclado);


  function exibirSrc(event) {
    console.log(event.currentTarget.getAttribute('src'));
  }
  
  imagens.forEach(img => {
    img.addEventListener('click', exibirSrc);
  });