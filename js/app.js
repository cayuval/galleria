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

function sortByName(order) {
    if (order === 'A-Z') {
        const newProductsArray = [...(products)]
        newProductsArray.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }

            return 0
        })
        displayProducts(newProductsArray)
    } else if (order === 'Z-A') {
        const newProductsArray = [...(products)]
        newProductsArray.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if (nameA > nameB) {
                return -1
            }
            if (nameA < nameB) {
                return 1
            }

            return 0
        })
        displayProducts(newProductsArray)

    }
}

function sortByPrice(order){
    if(order==='l-h'){
    const newProductsArrayByPrice = [...(products)]
    console.log(newProductsArrayByPrice);
    newProductsArrayByPrice.sort(function (a, b) {
        return a.price - b.price;
    });
    displayProducts(newProductsArrayByPrice)
}else if(order==='h-l'){
const newProductsArrayByPrice = [...(products)]
console.log(newProductsArrayByPrice);
newProductsArrayByPrice.sort(function (a, b) {
    return b.price - a.price;
});
displayProducts(newProductsArrayByPrice)
}
}

document.getElementById('startFiltering').addEventListener('click', () => {
    const userSelect = document.getElementById('selection-bar').value
    if (userSelect === 'A-Z') {
        sortByName('A-Z')
    } else if (userSelect === 'filter by') {
        displayProducts(products)
    } else if (userSelect === 'Z-A') {
        sortByName('Z-A')
    } else if (userSelect === 'PRICE (Low-High)') {
         sortByPrice('l-h')
    } else if (userSelect === 'PRICE (High-Low)') {
        sortByPrice('h-l')
    }
})

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
      <h3 class="card-text">${product.getName()}</h3>
      <h4 class="card-text">${product.getArtist()}</h4>
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

