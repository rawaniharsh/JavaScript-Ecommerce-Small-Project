import data from '../data.js';

const HomeScreen = {
        render: () => {
                const { products } = data;
                return `
            <ul class="products">
            ${products.map( product => `
            <li>
             <div class="product">
                <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="${product.name}"></img>
                </a>
             </div>
            <div class="product-name">
                 <a href="/#/product/${product._id}">
                ${product.name}
                </a>
            </div>
            <div class="product-brand">
                ${product.brand}
            </div>
            <div class="product-price">
            Rs. ${product.price}
             </div>
            </li>
            `).join('\n')}
        `;
    },
};

export default HomeScreen;