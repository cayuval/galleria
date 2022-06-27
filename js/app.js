const products = [
    {
        img:'https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184_960_720.jpg',
        name: 'A Great picture',
        artist: 'Bruno Brave',
        price: 200,
        stock: true
    },
    {
        img:'https://cdn.pixabay.com/photo/2021/10/23/09/24/ink-6734478_960_720.jpg',
        name: 'Another Picture',
        artist: 'Bruno Brave',
        price: 360,
        stock: true
    },
    {
        img:'https://cdn.pixabay.com/photo/2022/06/03/03/50/beach-7239311_960_720.jpg',
        name: 'Morning Good',
        artist: 'Carla Uno',
        price: 295,
        stock: true
    },
    {
        img:'https://cdn.pixabay.com/photo/2021/08/21/09/26/dawn-6562295_960_720.jpg',
        name: 'Old Picture',
        artist: 'Kamilla Hart',
        price: 522,
        stock: false
    },
]

document.getElementById('searchButton').addEventListener('click',searchProduct)

function searchProduct(){
    const userSearch = document.getElementById('searchField').value.trim()

    const searchResult = products.filter(product=>{
        return product.name.toLowerCase().includes(userSearch.toLowerCase())
    })
    console.log(searchResult);
    displayProducts(searchResult)
}

function getTotalProducts(productsData){
    return `(${productsData.length})`
}

function getProductsTemplate(productsData){
    let cardsHtml = ''
    let cardStockHtml = ''
    productsData.forEach(product=>{
        if(product.stock){
            cardStockHtml = ''
        }else{
            cardStockHtml = 'Not Available'
        }
        cardsHtml+=
        `<div class="card" style="width: 18rem;">
      <img width="171" height="162" src="${product.img}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
      <h3 class="card-text">${product.name}</h3>
      <h4 class="card-text">${product.artist}</h4>
      <p class="card-text">$ ${product.price}</p>
      <span style="color: red;" class="card-text">${cardStockHtml}</span>
      </div>
    </div>`
    })
    return cardsHtml
}

function displayProducts(productsData) {
    const mainData = document.querySelector('.cards-main')
    const totalProducts = document.getElementById('num-of-products')
    mainData.innerHTML=getProductsTemplate(productsData)
    totalProducts.innerHTML=getTotalProducts(productsData)
}
displayProducts(products)

