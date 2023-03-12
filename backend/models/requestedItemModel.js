const mongoose = require("mongoose")
// const { stringify } = require("querystring")

const requestedItemSchema = mongoose.Schema({
    owner: {
        type: String // email
    },
    requestedUser: {
        type: String
    },
    date: {
        type: Object
    },
    item: {
        type: String
    },
    Permission : {
        type: Boolean,        
    }
})

module.exports = mongoose.model('RequestedItem', requestedItemSchema)