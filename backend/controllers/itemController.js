const asyncHandler = require("express-async-handler")

const Item = require("../models/itemModel")

const addItem = asyncHandler( async (req, res) => {
    const {user, title, category, description, price, state, city, neighbourhood} = req.body

    // backend validation
    if(!user || !title || !category || !description || !price || !state || !city || !neighbourhood) {
        console.log("user: ",user) 
       return res.status(400).json({message: "please include all fields"})
    }

    const item = await Item.create( {
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