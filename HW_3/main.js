const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
class Basket {
  #goods;
  constructor(container) {
  this.#goods = [];
  }
  
  give_id(){
    alert(id1);
  }
  get_prod_bask(){
    this.product=product;
    return this.product;
  };//нажатие на кнопку купить создаем объект корзины и запускаем рендер
  #render_prod_bask(){
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                </div>
            </div>`;
    };//рендерим полученные данные
  #delete_pros_bask(){}//при нажатии на кнопку удалем товар
}

// переделать в ДЗ на промисы. НЕ ИСПОЛЬЗОВАТЬ fetch!!!
//let getRequest = (url, cb) => {
  //let xhr = new XMLHttpRequest();
  //xhr.open('GET', url, true);
  //xhr.onreadystatechange = () => {
   // if (xhr.readyState === 4) {
    //  if (xhr.status !== 200) {
    //    console.log('Error');
    //  } else {
     //   cb(xhr.responseText);
    //  }
   // }
  //};
  //xhr.send();
//}
let getRequest = (url) => {
return new Promise((resolve, reject) => { // resolve -> then; rejected -> catch
setTimeout(() => { 
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        reject('Error');
      } else {
        resolve(xhr.responseText);
      }
    }
  };
  xhr.send();
        }, 2000);
     });
     };
  
// ------------------------------------------------

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    // this._goods = [];
    this.#goods = [];
    this.#allProducts = [];

    // this.#fetchGoods();

    this.#getProducts().then((data) => {
      this.#goods = [...data];
      this.#render();
    });
  }

  sum() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  // #fetchGoods() {
  //   getRequest(`${API}catalogData.json`, (data) => {
  //     console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //   })
  // }

  #getProducts() {
    return fetch(`${API}catalogData.json`)
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);
      console.log(productObject);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
      const bbtn = document.getElementById(product.id_product);
      bbtn.addEventListener("click", event => this.addToBasket(event));
      };
  }
  addToBasket(event) {
    const id1 = +event.currentTarget.id;
    this.basket.give_id(id1);
  }
  

  

  
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img; // this.img = product.img || 'https://placehold.it/200x150';
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn" id="${this.id}">Купить</button>
              </div>
          </div>`;
  }
}
const basket =new Basket();
const productList = new ProductList();

