const mongoose = require("mongoose")
// const { stringify } = require("querystring")

const requestedItemSchema = mongoose.Schema({
    owner: {
        type: Object // email
    },
    requestedUser: {
        type: Object
    },
    date: {
        type: Object
    },
    item: {
        type: Object
    },
    permission : {
        type: Boolean,        
    }
})

module.exports = mongoose.model('RequestedItem', requestedItemSchema)