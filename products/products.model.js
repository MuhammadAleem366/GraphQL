const products = [
    {
        id:"redshoe",
        description:"Red Shoe",
        price:42.2
    },{
        id:"bluejeans",
        description: "Blue Jeans",
        price: 54.34
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

module.exports = {
    getAllProducts,
    getProductsByPrice
}