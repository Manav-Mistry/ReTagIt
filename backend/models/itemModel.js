const mongoose = require("mongoose")
const { stringify } = require("querystring")

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please add a title"]
    },
    category: {
        type: String,
        require: [true, "Please select category"],
               
    },
    description: {
        type: String,
        require: [true, "Please add a description"]
    },
    price : {
        type: Int16Array,
        require : [true, "please add price"]
    },
    state : {
        type: String,
        require: [true, "Please enter state name"]
    },
    city : {
        type: String,
        require: [true, "Please enter city name"]
    },
    neighbourhood : {
        type: String,
        require: [true, "Please enter neighbourhood name"]
    },

})

module.exports = mongoose.model('User', itemSchema)