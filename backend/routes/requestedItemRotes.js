const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const { addRequestedItem, getAllRequestedItems, acceptRequest, getAllAcceptedRequestedItems } = require("../controllers/requestedItemController")

router.post("/", protect, addRequestedItem)
router.get("/", protect, getAllRequestedItems)
router.post("/accept", protect, acceptRequest)
router.get("/accepted", protect, getAllAcceptedRequestedItems)

module.exports = router