const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const { addRequestedItem, getAllRequestedItems } = require("../controllers/requestedItemController")

router.post("/", protect, addRequestedItem)
router.get("/", protect, getAllRequestedItems)

module.exports = router