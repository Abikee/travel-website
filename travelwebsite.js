const images = [
    'url("https://nowtravelandtours.com/wp-content/uploads/2025/01/Untitled-1-2-1-1.png")',
'url("https://nowtravelandtours.com/wp-content/uploads/2025/01/Untitled-3-1-1.png")',
'url("https://nowtravelandtours.com/wp-content/uploads/2025/01/Untitled-2-1-1.png")',
'url("https://nowtravelandtours.com/wp-content/uploads/2025/01/Untitled-4-1.png")'
];

let current = 0
const slider = document.querySelector('.background-slider')

function showImage(index) {
    slider.style.backgroundImage = images[index];
}

function nextImage() {
current = (current + 1) % images.length;
showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

document.addEventListener("DOMContentLoaded", function () {
showImage(current);
setInterval(nextImage, 5000);
});

