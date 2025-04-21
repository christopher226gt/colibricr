// Funciones para abrir y cerrar el lightbox de la galería
function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function mostrarGaleriaCompleta() {
    const ocultas = document.querySelectorAll('.hidden-mobile');
    ocultas.forEach(item => item.style.display = 'block');

    document.querySelector('.ver-mas-btn').style.display = 'none';
    document.querySelector('.ver-menos-btn').style.display = 'inline-block';
}

function ocultarGaleriaExtra() {
    const ocultas = document.querySelectorAll('.hidden-mobile');
    ocultas.forEach(item => item.style.display = 'none');

    document.querySelector('.ver-mas-btn').style.display = 'inline-block';
    document.querySelector('.ver-menos-btn').style.display = 'none';
}
