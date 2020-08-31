const express = require('express')
const controller = require("../Controller/product")
const Route = express.Router()


Route.get ("/search", controller.search)
Route.get("/", controller.all)
Route.post("/", controller.add)
Route.put("/", controller.update)
Route.delete("/", controller.delete)

module.exports = Route 
