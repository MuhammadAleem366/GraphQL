const express = require("express")
const {buildSchema} = require("graphql")
const {graphqlHTTP} = require("express-graphql")
const schema = buildSchema(`
type Query{
name:String
price:Float
}
`)
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