// Botón "Ir arriba"
window.addEventListener("scroll", function () {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}