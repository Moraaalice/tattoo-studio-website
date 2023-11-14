const imageContainer = document.querySelectorAll('.image-container');
const prevButton = document.getElementById('icon1');
const nextButton = document.getElementById('icon2');

const containerWidth = imageContainer.clientWidth;
const imageWidth = 100; 
const margin = 10; 

let currentPage = 0;
const imagesPerPage = 5;

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        scrollToPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    const totalImages = imageContainer.children.length;
    if (currentPage < Math.ceil(totalImages / imagesPerPage) - 1) {
        currentPage++;
        scrollToPage(currentPage);
    }
});

function scrollToPage(page) {
    const newPosition = (imageWidth + margin) * imagesPerPage * page;
    imageContainer.scrollTo({
        left: newPosition,
        behavior: 'smooth',
    });
}

