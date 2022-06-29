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
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2022/03/01/00/12/tree-7040298_960_720.jpg',
        'FALL',
        'Carla Uno',
        205,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_960_720.jpg',
        'Home',
        'Kamilla Hart',
        300,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708_960_720.jpg',
        'Renaissance',
        'Bruno Brave',
        800,
        false
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2021/11/22/16/45/sheeps-6816871_960_720.jpg',
        'Our Friends',
        'Yuval Ben Haim',
        255,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2021/10/19/20/20/waterfall-6724514_960_720.jpg',
        'Waterfall',
        'Yuval Ben Haim',
        200,
        true
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2022/02/08/20/57/animals-7002172_960_720.jpg',
        'FREE',
        'Carla Uno',
        450,
        false
    ),
    new Product(
        'https://cdn.pixabay.com/photo/2022/05/22/17/22/building-7214070_960_720.jpg',
        'City',
        'Kamilla Hart',
        347,
        true
    ),
]

export {products}