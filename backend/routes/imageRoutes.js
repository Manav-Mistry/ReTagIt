const express = require("express");
const router = express.Router();

const {
  uploadImage,
  getImage,
  upload,
  getAllImages
} = require("../controllers/imageController");

// const {protect} = require("../middleware/authMiddleware")

router.post("/upload", upload.single("imagefile"), (req, res) => {
  // console.log(first)
  return res.json({ id: req.file.filename });
});
router.get("/image/:filename", (req, res) => {
    getImage(req,res);
//   console.log("In Router", req.gfs);
});

router.get("/", (req, res) => {
  const files = getAllImages(req, res)
  console.log(files)
  return files
})

module.exports = router;
