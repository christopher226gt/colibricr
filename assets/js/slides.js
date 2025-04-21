// Slider personalizado
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slides-container li");
    let indicatorsContainer = document.querySelector(".slide-indicators");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 40000);

    slides.forEach((_, index) => {
        let indicator = document.createElement("span");
        indicator.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetInterval();
        });
        indicatorsContainer.appendChild(indicator);
    });

    function showSlide(index) {
        slides.forEach(slide => slide.style.opacity = "0");
        slides[index].style.opacity = "1";
        updateIndicators(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 40000);
    }

    function updateIndicators(index) {
        let indicators = document.querySelectorAll(".slide-indicators span");
        indicators.forEach(ind => ind.classList.remove("active"));
        indicators[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function (e) {
        e.preventDefault();
        prevSlide();
        resetInterval();
    });

    document.querySelector(".next").addEventListener("click", function (e) {
        e.preventDefault();
        nextSlide();
        resetInterval();
    });

    showSlide(currentSlide);
});