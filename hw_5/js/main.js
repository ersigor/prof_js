'use strict'
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchline:'', //привязать содержимое поля ввода 
        filteredGoods:[],
        basket_prod:[],
        showbasket: false,
        
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
          console.log(product.id_product);
          for (let i=0; this.products.length;i++){
          if (product.id_product===this.products[i].id_product){
              console.log(this.basket_prod);
            if (this.basket_prod.length>0){  
           
            for (let b=0; this.basket_prod.length;b++) {
                if (product.id_product===this.basket_prod[b].id_product) {
                     this.basket_prod[b].quantity++;
                     break;
                   } 
                else {if (b===this.basket_prod.length-1) { this.basket_prod.push({...product, quantity: 1}); break; }};
           }  
        }
        else { this.basket_prod.push({...product, quantity: 1});
            }
                                                }
                                            }

    },
        FilterGoods(){
            this.filteredGoods=[];
            
           for (let i=0; this.products.length;i++){
            if (this.products[i].product_name===this.searchline) {
                
                this.filteredGoods.push(this.products[i]);
            } 
        else 
      ;}
        
              },//метод для поля поиска
        delete_prod(product){
            for (let i=0; this.basket_prod.length;i++){
                if (product.id_product===this.basket_prod[i].id_product){
                    this.basket_prod[i].quantity--; 
                    if (this.basket_prod[i].quantity===0) { this.basket_prod.splice(this.basket_prod.indexOf(i),1)}
                }
                }
        },
          
    },

    beforeCreate() {

    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
    beforeMount() {

    },
    mounted() {
       

    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
});
