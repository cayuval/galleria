class Product{
    constructor(img,name,artist,price,stock){
        this.img = img
        this.name = name
        this.artist = artist
        this.price = price
        this.stock = stock
    }

    getImg(){
        return this.img
    }
    getName(){
        return this.name
    }
    getArtist(){
        return this.artist
    }
    getPrice(){
        return `$ ${this.price}`
    }
    getStock(){
        return this.stock
    }
}

const products = [
    new Product(
        'https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184_960_720.jpg',
        'A Great picture',
        'Bruno Brave',
        200,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2021/10/23/09/24/ink-6734478_960_720.jpg',
        'Another Picture',
        'Bruno Brave',
        360,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2022/06/03/03/50/beach-7239311_960_720.jpg',
        'Morning Good',
        'Carla Uno',
        295,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2021/08/21/09/26/dawn-6562295_960_720.jpg',
        'Old Picture',
        'Kamilla Hart',
        522,
        false
    )
]

export {products}