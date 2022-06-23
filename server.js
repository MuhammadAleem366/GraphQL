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
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))

const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:resolversArray
})

const app = express()

app.use("/graphql",graphqlHTTP({
    schema:schema,
}))

const port = 3000
app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})