import { products } from '../data/products.js'

console.log(products);



document.getElementById('searchButton').addEventListener('click', searchProduct)

function searchProduct() {
    const userSearch = document.getElementById('searchField').value.trim()

    const searchResult = products.filter(product => {
        return product.name.toLowerCase().includes(userSearch.toLowerCase())
    })
    console.log(searchResult);
    displayProducts(searchResult)
}

function getTotalProducts(productsData) {
    return `(${productsData.length})`
}

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
            `<div class="card" style="width: 18rem;">
      <img width="171" height="162" src="${product.getImg()}" class="card-img-top" alt="${product.getName()}">
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
    const mainData = document.querySelector('.cards-main')
    const totalProducts = document.getElementById('num-of-products')
    mainData.innerHTML = getProductsTemplate(productsData)
    totalProducts.innerHTML = getTotalProducts(productsData)
}
displayProducts(products)

