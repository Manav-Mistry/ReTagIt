const asyncHandler = require("express-async-handler");
const {GridFsStorage} = require("multer-gridfs-storage");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Storage
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({
  storage,
});

// @ get
// @ "/image/:filename"
const getImage = asyncHandler(async (req, res) => {
  console.log("In get Image")
    const gfs = req.gfs
    console.log("gfs", gfs)
    const file = gfs
      .find({
        filename: req.params.filename,
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404).json({
            err: "no files exist",
          });
        }
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      });
});

module.exports = {
  getImage,
  upload
};
