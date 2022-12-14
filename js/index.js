class Categories { // clase
    constructor(id,products_id, name,description,image) { //funcion contructora producto
        this.id = id //atributos
        this.products_id = products_id //atributos
        this.name = name //atributos
        this.description = description //atributos
        this.image = image //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getProductId() { //funciones o metodos
        return this.products_id 
    }
    getName() { //funciones o metodos
        return this.name
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getImage() { //funciones o metodos
        return this.image
    }
}


class Products { // clase
    constructor(id, sku, name, price, description,image, category, stock) { //funcion contructora producto
        this.id = id //atributos
        this.sku = sku //atributos
        this.name = name //atributos
        this.price = price //atributos
        this.description = description //atributos
        this.image = image //atributos
        this.category = category //atributos
        this.stock = stock //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getSku() { //funciones o metodos
        return this.sku
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getImage() { //funciones o metodos
        return this.image
    }
    getCategory() { //funciones o metodos
        return this.category
    }
    getStock() { //funciones o metodos
        return this.stock
    }
    getCalcularPrecio() { //funciones o metodos 
        return this.price * this.stock

    }
    getIva() { //funciones o metodos
        return this.price * this.stock * 0.19   //funciones o metodos
    }

}


class Customers { // clase
    constructor(id,email,password,full_name, billing_address, shipping_address, country,phone) { //funcion contructora producto
        this.id = id //atributos
        this.email = email //atributos
        this.password = password //atributos
        this.full_name = full_name //atributos
        this.billing_address = billing_address //atributos
        this.shipping_address = shipping_address //atributos
        this.country = country //atributos
        this.phone = phone //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getEmail() { //funciones o metodos
        return this.email
    }
    getPassword() { //funciones o metodos
        return this.password
    }
    getFullName() { //funciones o metodos
        return this.full_name
    }
    getBillingAddress() { //funciones o metodos
        return this.billing_address
    }
    getShippingAddress() { //funciones o metodos
        return this.shipping_address
    }
    getCountry() { //funciones o metodos
        return this.country
    }
    getPhone() { //funciones o metodos
        return this.phone
    }
}

//crear lista de products en arreglo
const CreateNewProducts =[]
CreateNewProducts.push(new Products(10000,100,"Caf?? Salvadore??o","$"+25000,"Caf?? Salvadore??o","./assets/images/sv1.jpg",1,50))
CreateNewProducts.push(new Products(100001,101,"Caf?? Colombiano","$"+80000,"Caf?? Colombiano","./assets/images/bolsascafe.jpg",1,50))
CreateNewProducts.push(new Products(100003,103,"Caf?? Brasile??o","$"+50000,"Caf?? Brasile??o","./assets/images/coffeeeeee4.jpg",2,50))
CreateNewProducts.push(new Products(100005,105,"Caf?? Boliviano","$"+10000,"Caf?? Boliviano","./assets/images/sv10.jpg",2,50))
CreateNewProducts.push(new Products(100004,104,"Caf?? Mexicano","$"+80000,"Caf?? Mexicano","./assets/images/coffeeeeee5.jpg",2,50))




// //clase agregar al carrito de compras
// class Cart {
//     listaProducts = []   // variable atributo
//     constructor(){
//     }
//     getAddProduct(product){  //funcion declaro solamente
//         this.listaProducts.push(product)
//     }
// }
// const cart = new Cart()
// console.log(cart.listaProducts);



var button = document.getElementById('Button00');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})


var button = document.getElementById('Button01');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})


var button = document.getElementById('Button02');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})

var button = document.getElementById('Button03');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})

var button = document.getElementById('Button04');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})

var button = document.getElementById('Button05');

button.addEventListener('click', function() {
    alert('Haz agregado este producto')
})


var button = document.getElementById('Button06');

button.addEventListener('click', function() {
    alert('haz comprado ')
})

var button = document.getElementById('Button07');

button.addEventListener('click', function() {
    alert('haz enviado el mensaje ')
})

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

//esto es solo para el ejemplo del localStorage
let carrito;
if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito =JSON.parse(localStorage.getItem('carrtio'))
}


let boton = document.getElementsByClassName("boton");

class CartElements{
    constructor(name, price, stock){ 
        this.name = name;
        this.price = price; 
        this.stock = stock;
    }
}
const cart = [];

function cartLoad(name, price, stock){
    cart.push(new CartElements(name, price, stock))
}

for (let i = 0; i <= CreateNewProducts.length; i++){
    let name = CreateNewProducts[i].name;
    let price = CreateNewProducts[i].price;   
    let stock = CreateNewProducts[i].stock;

    boton[i].addEventListener("click", () => { cartLoad(name, price, stock) 
         console.log(cart)} )
}