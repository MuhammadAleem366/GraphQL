const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const {makeExecutableSchema} = require("@graphql-tools/schema")
const typesText =`
type Query{
name:String
price:Float
}`

const schema = makeExecutableSchema({
    typeDefs:[typesText]
})
const root = {
    name:"Ice Cream Shake",
    price:12.23
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