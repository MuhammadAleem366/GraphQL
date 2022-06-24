const products = [
    {
        id:"redshoe",
        description:"Red Shoe",
        price:42.2,
        reviews: []
    },{
        id:"bluejeans",
        description: "Blue Jeans",
        price: 54.34,
        reviews: []
    }
]

function getAllProducts(){
    return products
}
function getProductsByPrice(min,max){
    return products.filter((product)=>{
        return product.price >= min && product.price <= max
    })
}

function getProductById(id) {
    return products.find(product => product.id === id)
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews:[]
    }
    products.push(newProduct)
    return newProduct
}
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct
}