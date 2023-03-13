const asyncHandler = require("express-async-handler")

const RequestedItem = require("../models/requestedItemModel")
const requestedItemModel = require("../models/requestedItemModel")

const addRequestedItem = asyncHandler(async (req, res) => {
    
    const {item, user} = req.body

    if( user != null || item != null) {
        console.log("In r_item controller: ",item, user)
        const date = new Date()
        const permission = false

        const requestedItem = await RequestedItem.create({
            owner: item.user,
            requestedUser: user,
            item,
            date,
            permission
        })

        if(requestedItem) {
            console.log("request successful")
            res.status(201).json("successfully requested")
        } else {
            res.status(400)
            throw new Error("There is some error, please try again")
        }

    } else {
        res.status(400).json({message: "Please include all the fields"})
    }
}) 

const getAllRequestedItems = (asyncHandler( async (req, res) => {
    const user = req.user

    const r_items = await requestedItemModel.find({owner: user.email})
    res.status(200).json(r_items)
}))

module.exports = {
    addRequestedItem,
    getAllRequestedItems
}
