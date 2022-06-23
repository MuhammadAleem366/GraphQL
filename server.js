const path = require("path")
const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const {loadFilesSync} = require("@graphql-tools/load-files")
const {makeExecutableSchema} = require("@graphql-tools/schema")
/**
 *@function {loadFilesSync} accepts pattern that recursively finds
 * each file that has .graphql extension
 */
const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))

const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:{
        Query:{
            products:async (parent,args,context,info) => {
                console.info("Getting data from products...")
                const product = await Promise.resolve(parent.products)
                return product
            },
            orders:async (parent) => {
                console.info("Getting data from Orders...")
                const order =  await Promise.resolve(parent.orders)
                return order
            }

        }
    }
})
const root = {
    products:require("./products/products.model"),
    orders:require("./orders/orders.model")
}
const app = express()

app.use("/graphql",graphqlHTTP({
    schema:schema,
    rootValue:root
}))
const port = 3000
app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})