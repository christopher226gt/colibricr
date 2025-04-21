// Actualización de imágenes según el tamaño de pantalla
document.addEventListener("DOMContentLoaded", function () {
    function actualizarImagenes() {
        let isMobile = window.innerWidth <= 768;
        document.querySelectorAll(".habitacion-bg").forEach(function (elemento) {
            let imgDesktop = elemento.getAttribute("data-bg-desktop");
            let imgMobile = elemento.getAttribute("data-bg-mobile");
            elemento.style.backgroundImage = `url(${isMobile ? imgMobile : imgDesktop})`;
        });
    }
    actualizarImagenes();
    window.addEventListener("resize", actualizarImagenes);
});