/* eslint-disable no-unused-vars */
const express = require('express')
const Route = require("./src/main")
const database = require("./src/Config/ConnectionDB")
const bodyParser = require('body-parser')

const server = express()
const port = 2150

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(Route)

database.connect()
    // eslint-disable-next-line no-unused-vars
    .then (res => console.log (`Database Connected!`))
    .catch (err => console.log (`Database Not Connected`))

    
server.listen(port, () => {
    console.log (`Service app running on port ${port}`)
})