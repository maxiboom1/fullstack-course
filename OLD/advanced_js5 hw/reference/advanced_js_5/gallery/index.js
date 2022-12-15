fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => createCarousel(data))
    .catch(err => console.log(err));


function createCarousel(data) {
    console.log(data);
    const container = document.querySelector('.carousel-inner');
    // const indicators = document.querySelector('.carousel-indicators');
    data.forEach((image, index) => {
        if (index < 3) {
            // const button = createButton(index);
            const item = document.createElement('div');
            index == 0 ? item.classList.add('carousel-item', 'active') : item.classList.add('carousel-item')
            item.innerHTML = `
                <img
                    src="${image.url}"
                    class="d-block w-100"
                    alt="${image.title}"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>${image.title}</h5>
                </div>
            `;
            container.appendChild(item);
            // indicators.appendChild(button);
        }
    });
}

function createButton(index) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-target', '#carouselExampleCaptions');
    button.setAttribute(' data-bs-slide-to', index);
    button.setAttribute('class', `${(index == 0) ? 'active' : ''}`);
    button.setAttribute('aria-label', `Slide ${index + 1}`);
    return button;
}