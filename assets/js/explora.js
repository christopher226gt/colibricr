// Filtro de tarjetas en la sección "Explora"
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".lugar-card");
    let buttons = document.querySelectorAll(".filter-btn");

    // Mostrar solo las que contienen "comun" al cargar
    cards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        // Solo mostrar si contiene "comun" o está en el filtro de "all"
        if (!categories.includes("comun")) {
            card.style.display = "none";
        } else {
            card.style.display = "block";  // Asegúrate de que las tarjetas de "comun" estén visibles
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let filter = this.getAttribute("data-filter");

            // Activar el filtro seleccionado
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            cards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block";  // Mostrar tarjetas que coinciden con el filtro
                } else {
                    card.style.display = "none";  // Ocultar el resto
                }
            });
        });
    });
});

/*
// Filtro de tarjetas en la sección "Explora"
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".lugar-card");
    let buttons = document.querySelectorAll(".filter-btn");

    // Mostrar solo las que contienen "actividad" al cargar
    cards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        if (!categories.includes("comun")) {
            card.style.display = "none";
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let filter = this.getAttribute("data-filter");

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            cards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
*/



/*
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".lugar-card");
    cards.forEach(card => {
        if (card.getAttribute("data-category") !== "actividad") {
            card.style.display = "none";
        }
    });
    let buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let filter = this.getAttribute("data-filter");
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            cards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});*/