const mongoose = require("mongoose")


const connectDB = () => {
    try{
        // const conn = mongoose.createConnection(process.env.MONGO_URI)
        // TODO: change
        const conn1 = mongoose.connect(process.env.MONGO_URI, () => {
            console.log("------------ mongoDB connected --------------")
        });
        const conn = mongoose.createConnection(process.env.MONGO_URI, () => {
            console.log("------------ mongoDB connected --------------")
        });
        
        
        // console.log("gfs In db", gfs)
        
        return conn;
    }
    catch(error) {
        console.log(`Error : ${error}`);
        process.exit(1)
    }
}

module.exports = connectDB