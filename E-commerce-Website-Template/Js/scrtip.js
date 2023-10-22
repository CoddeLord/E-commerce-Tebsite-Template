const slider = document.querySelector(".container");
const prevButton = document.getElementById("left-Btn");
const nextButton = document.getElementById("right-Btn");
const spetBtn = document.getElementById("sepet");
const divSepet = document.querySelector('.sepet');
const closeBtn = document.querySelector(".sepet");

let currentIndex = 0;
const slideCount = slider.children.length;
const slideWidth = slider.firstElementChild.offsetWidth;

nextButton.addEventListener("click", () => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    const translateXValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideCount - 1;
    }
    const translateXValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
});


spetBtn.addEventListener('click', () => {

    divSepet.style.display = 'block'
});

closeBtn.addEventListener('click', e => {
    if (e.target.className = 'sepet') {
        divSepet.style.display = 'none'
    }
})