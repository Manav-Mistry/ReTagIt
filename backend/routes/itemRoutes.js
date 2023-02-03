const express = require("express");
const router = express.Router();

const { addItem } = require("../controllers/itemController");
const {protect} = require("../middleware/authMiddleware")


router.post("/", protect, addItem)

module.exports = router