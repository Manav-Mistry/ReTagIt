const asyncHandler = require("express-async-handler")

const Item = require("../models/itemModel")

const addItem = asyncHandler( async (req, res) => {
    const {title, category, description, price, state, city, neighbourhood} = req.body

    // backend validation
    if(!title || !category || !description || !price || !state || !city || !neighbourhood) {
       return res.status(400).json({message: "please include all fields"})
    }

    const item = await Item.create( {
        // FIXME: pass user email from redux
        user,
        title,
        category,
        description, 
        price, 
        state, 
        city, 
        neighbourhood
    })

    if(item) {
        res.status(201).json("Item is successfully Added")
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

} )

module.exports = {
    addItem,
}