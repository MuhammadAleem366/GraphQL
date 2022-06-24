const path = require("path")
const express = require("express")
const {ApolloServer} = require("apollo-server-express")
const {loadFilesSync} = require("@graphql-tools/load-files")
const {makeExecutableSchema} = require("@graphql-tools/schema")
/**
 *@function {loadFilesSync} accepts pattern that recursively finds
 * each file that has .graphql extension
 */
const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))

async function startApolloServer(){
    const app = express()
    const schema = makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    })

    const server = new ApolloServer({
        schema:schema
    })

    await server.start()
    server.applyMiddleware({app,path:'/graphql'})

    const port = 3000
    app.listen(port,() => {
        console.log(`Listening on port ${port}`)
    })
}

startApolloServer()
    .then(()=> console.log("started successfully"))
    .catch(err => console.error("error",err))
