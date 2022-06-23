const orders = [
    {
        data:"2123-32-2",
        subTotal:5,
        items:[
            {
                product:{
                    id:"redshoe",
                    description:"Old Red Shoe",
                    price: 76.34
                },
                quantity:2
            }
        ]

    }
]

function getAllOrders(){
    return orders
}

module.exports = {
    getAllOrders
}