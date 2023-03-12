const asyncHandler = require("express-async-handler")

const RequestedItem = require("../models/requestedItemModel")

const addRequestedItem = asyncHandler(async (req, res) => {
    const {loggedUser, item} = req.body

    if( loggedUser != null || item != null) {
        console.log("In r_item controller: ",loggedUser, item)
        // const date = new Date()
        // const permission = false

        // const requestedItem = await RequestedItem.create({
        //     owner,

        //     item,
        //     date,
        //     permission
        // })

        // if(requestedItem) {
        //     res.status(201).json("successfully requested")
        // } else {
        //     res.status(400)
        //     throw new Error("There is some error, please try again")
        // }

    } else {
        res.status(400).json({message: "Please include all the fields"})
    }
}) 

module.exports = {
    addRequestedItem
}
