const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const cors = require("cors")
const {errorHandler} = require("./middleware/errorHandler")
// const morgan = require('morgan');
const connectDB = require("./config/db")

// TODO: new version (upload image)
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


// connect to the database
const gfs = connectDB()

// TODO: NEW
// init gfs


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/users", require("./routes/userRoutes"))

app.use("/api/item", require("./routes/itemRoutes"))

app.use("/api/image", (req, res, next)=>{
    req.gfs = gfs;
    next();
})

app.use("/api/image", require("./routes/imageRoutes"))

// TODO: NEW

app.use(errorHandler)

app.listen(PORT, () => "server started...")