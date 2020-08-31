const express = require('express')
const data = require('./Router/product')
const category = require ('./Router/category')
const history = require ('./Router/history')

const Route = express.Router()


Route.use("/product", data)
Route.use ("/category", category)
Route.use("/history", history)

Route.get("*", (req, res) =>{
    res.status(500).json('OOPS! PAGE NOT FOUND.')
})

module.exports = Route

