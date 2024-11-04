// Seleciona a galeria principal e a área de favoritos
const galeria = document.getElementById('galeria');
const favoritos = document.getElementById('favoritos');
const contador = document.getElementById('contador');

// Função para atualizar a contagem de favoritos
function atualizarContador() {
    contador.textContent = favoritos.querySelectorAll('img').length;
}

// Adiciona os eventos de drag and drop para as imagens
document.querySelectorAll('.draggable').forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src);
        img.classList.add('dragging');
    });

    img.addEventListener('dragend', () => {
        img.classList.remove('dragging');
    });
});

// Eventos para a área de favoritos (dropzone)
favoritos.addEventListener('dragenter', (event) => {
    event.preventDefault();
    favoritos.classList.add('over');
});

favoritos.addEventListener('dragover', (event) => {
    event.preventDefault();
});

favoritos.addEventListener('dragleave', () => {
    favoritos.classList.remove('over');
});

favoritos.addEventListener('drop', (event) => {
    event.preventDefault();
    favoritos.classList.remove('over');

    // Obtém a URL da imagem
    const imgSrc = event.dataTransfer.getData('text/plain');

    // Verifica se a imagem já está nos favoritos
    if (!Array.from(favoritos.querySelectorAll('img')).some(img => img.src === imgSrc)) {
        // Cria um novo elemento de imagem para adicionar aos favoritos
        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('draggable', 'highlight');
        img.draggable = true;

        // Remove a imagem ao clicar nela
        img.addEventListener('click', () => {
            favoritos.removeChild(img);
            atualizarContador();
        });

        favoritos.appendChild(img);
        atualizarContador();
    }
});
