const model = require("../Model/CRUD-product")
const product = {} 

product.all = async (request, response) => {
    try {
        const data = await model.GetAll()
        return response.status(200).json(data)  
    } catch (error) {
        return response.status(500).json(`OOPS! ERORR GET DATA. ${error}`)
    }
}
product.search= async (request, response) => {
    try {
        const NAME_PRODUCT = request.query.name
        const data = await model.search(NAME_PRODUCT)
        if (data.length < 1){
            response.status(404).json('OOPS! DATA NOT FOUND.')
        } else {
            return response.status(200).json(data) 
        }   
    } catch (error) {
        return response.status(500).json(`OOPS! ERORR GET DATA. ${error}`)
    }
}

product.add = (req, res) => {
    try {
        const { NAME_PRODUCT, PRICE, IMG, CATEGORY                                                                                                                                       } = req.body
        const data = model.Add(NAME_PRODUCT, PRICE, IMG, CATEGORY)
        return res.send(data)
    } catch (error) {
        return res.status(500).json(`OOPS! SERVER DATABASE ERORR. ${error}`)
    }   
}

product.update = (req, res) => {
    try {
        const {ID, NAME_PRODUCT, PRICE, IMG, CATEGORY} = req.body
        const data = model.Update(ID, NAME_PRODUCT, PRICE, IMG, CATEGORY)
        return res.send(data)
    } catch (error) {
        return res.status(500).json(`OOPS! SERVER DATABASE ERORR. ${error}`)
    }
}
product.delete = (req, res) => {
    try {
        const {ID} = req.body
        const data = model.Delete(ID)
        return res.send(data)
    } catch (error) {
        return res.status(500).json(`OOPS! SERVER DATABASE ERORR. ${error}`)
    }
}

module.exports = product