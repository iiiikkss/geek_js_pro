const data = [
    {title: 'Notebook', id:1, price:2000},
    {title: 'Keyboard', id:2, price:200},
    {title: 'Mouse', id:3, price:100},
    {title: 'Gamepad', id:4, price:87},
    {title: 'Screen', id:5, price:12300},
    {title: 'Fan', id:6, price:3250},
    {title: 'Mat', id:7, price:1100},
    {title: 'Chair', id:8, price:8600},
    {title: 'Headphones', id:9, price:6780}

];


const renderProduct = (title, id, price) => {
    return `
        <div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">In cart</button>
        </div>
    `;
};


const render = (products) => {
    const productsList = products.map(item => renderProduct(item.title, item.id, item.price));
    
    document.querySelector(".products").innerHTML = productsList.join('');
};
render(data);