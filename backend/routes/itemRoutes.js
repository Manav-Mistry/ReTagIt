const express = require("express");
const router = express.Router();

const { addItem, getItems } = require("../controllers/itemController");
const {protect} = require("../middleware/authMiddleware")


router.post("/", protect, addItem)
router.get("/", getItems)

module.exports = router