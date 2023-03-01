const express = require("express");
const router = express.Router();

const {
    uploadImage,
    getImage,
    upload 

} = require("../controllers/imageController")

// const {protect} = require("../middleware/authMiddleware")

router.post("/upload",upload.single("imagefile") , (req, res) => {
    // console.log(first)
    return res.json({id: req.file.filename})
})
router.post("/image/:filename", getImage)

module.exports = router 