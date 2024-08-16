const card_pics = document.querySelector('.man-clothing');
const card_pics2 = document.querySelector('.women-clothing');

async function fetchdata() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

fetchdata().then(products => {
    // Ensure that the length of the products array is sufficient
    const menClothingIndices = [0, 1, 2, 3];  // Replace with actual logic if needed
    const womenClothingIndices = [14, 15, 16, 17,];

    menClothingIndices.forEach(i => {
        if (products[i]) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.justifyContent = 'space-between';

            card.innerHTML = `
                <img src="${products[i].image}" class="card-img-top" alt="${products[i].title}">
                <div class="card-body" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <h5 class="card-title">${products[i].title}</h5>
                    <a href="#" class="btn fw-bold" style="background-color:#8DCBE2;">Buy Now</a>
                </div>
            `;

            card_pics.appendChild(card);
        }
    });

    womenClothingIndices.forEach(i => {
        if (products[i]) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.justifyContent = 'space-between';

            card.innerHTML = `
                <img src="${products[i].image}" class="card-img-top" alt="${products[i].title}">
                <div class="card-body" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <h5 class="card-title">${products[i].title}</h5>
                    <a href="#" class="btn fw-bold" style="background-color:#8DCBE2;">Buy Now</a>
                </div>
            `;

            card_pics2.appendChild(card);
        }
    });
}).catch(error => {
    console.error('Error processing data:', error);
});
