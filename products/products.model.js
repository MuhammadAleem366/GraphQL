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

module.exports = {
    getAllProducts
}