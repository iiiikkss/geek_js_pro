const data = [
    {titlle: 'Notebook', id:1, price:2000},
    {titlle: 'Keyboard', id:2, price:200},
    {titlle: 'Mouse', id:3, price:100},
    {titlle: 'Gamepad', id:4, price:87}

];


const renderProduct = (titlle, id, price) => {
    return `
        <div class="product-item">
            <h3>${titlle}</h3>
            <p>${price}</p>
        </div>
    `;
};


const render = (products) => {
    const productsList = products.map(item => renderProduct(item.titlle, item.id, item.price));

    document.querySelector(selectors: ".products").innerHTML = productsList;
};
render(data);