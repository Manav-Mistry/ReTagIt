const mongoose = require("mongoose")


const connectDB = () => {
    try{
        // const conn = mongoose.createConnection(process.env.MONGO_URI)
        // TODO: change
        
        const conn = mongoose.connect(process.env.MONGO_URI, () => {
            console.log("------------ mongoDB connected --------------")
        });
        
        let gfs;
        conn.then("open", () => {
            // init stream
            gfs = new mongoose.mongo.GridFSBucket(conn.db, {
                bucketName: "uploads"
            });
        });
        
        return gfs;
    }
    catch(error) {
        console.log(`Error : ${error}`);
        process.exit(1)
    }
}

module.exports = connectDB