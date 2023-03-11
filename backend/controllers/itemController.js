const asyncHandler = require("express-async-handler")

const Item = require("../models/itemModel")

const addItem = asyncHandler( async (req, res) => {
    const {user, title, category, description, price, state, city, neighbourhood, selectedFile} = req.body

    // backend validation
    if(!user || !title || !category || !description || !price || !state || !city || !neighbourhood || !selectedFile) {
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
        neighbourhood,
        selectedFile
    })

    if(item) {
        res.status(201).json("Item is successfully Added")
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

} )

const getItems = asyncHandler( async (req, res) => {
    console.log("In get Items controller")
    const items = await Item.find()
    console.log(items)
    if(items) {
        // return items;
        res.status(200).json({
            items: items
        })
    } else {
        res.status(400)
        throw new Error("No Item Found")
    }

})

module.exports = {
    addItem,
    getItems
}