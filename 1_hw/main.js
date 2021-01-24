const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <img src="box.png" alt="Что-то пошло не так">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.title, product.price);
    });
    //document.querySelector('.products').innerHTML = productList;
    for (let i=0; i<productList.length; i++){
    let d1 = document.getElementById('products1');
    d1.insertAdjacentHTML('beforeend', productList[i]);
    }
};

renderProducts(products);
