import { products } from '../data/products.js'

//when clicking search call function searchProduct
document.getElementById('searchButton').addEventListener('click', searchProduct)

function searchProduct() {
    //recive user's searcing and trim it in case of typing unnecessary spaces
    const userSearch = document.getElementById('searchField').value.trim()

    //create a New array with objects that answer the terms os Search - all in Lower case 
    const searchResult = products.filter(product => {
        return product.name.toLowerCase().includes(userSearch.toLowerCase())
    })
    console.log(searchResult);
    //and then display the objects inside the array
    displayProducts(searchResult)
}

//how many pictures do I see every time I reDisplay The Product
function getTotalProducts(productsData) {
    return `(${productsData.length})`
}

//function that return only one big string of html Tags of the pictures I want to see
function getProductsTemplate(productsData) {
    let cardsHtml = ''
    let cardStockHtml = ''
    productsData.forEach(product => {
        if (product.stock) {
            cardStockHtml = ''
        } else {
            cardStockHtml = 'Not Available'
        }
        cardsHtml +=
            `<div class="card" style="width: 16rem;">
      <img src="${product.getImg()}" class="card-img-top" alt="${product.getName()}">
      <div class="card-body">
      <h3 class="card-text">${product.name}</h3>
      <h4 class="card-text">${product.artist}</h4>
      <p class="card-text"> ${product.getPrice()}</p>
      <span style="color: red;" class="card-text">${cardStockHtml}</span>
      </div>
    </div>`
    })
    return cardsHtml
}

function displayProducts(productsData) {
    //catch the main data Element
    const mainData = document.querySelector('.container')
    //catch the span Element of number of of pictures 
    const totalProducts = document.getElementById('num-of-products')
    //inject the wanted template from the function getProductTemplate to the main data
    mainData.innerHTML = getProductsTemplate(productsData)
    //inject the number of total products to the span Element
    totalProducts.innerHTML = getTotalProducts(productsData)
}
displayProducts(products)

