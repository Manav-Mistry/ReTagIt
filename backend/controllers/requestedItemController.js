const asyncHandler = require("express-async-handler")

const RequestedItem = require("../models/requestedItemModel")

const addRequestedItem = asyncHandler(async (req, res) => {
    console.log("Hii Manav");
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

module.exports = {
    addRequestedItem
}
