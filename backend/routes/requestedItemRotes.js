const express = require("express");
const router = express.Router();

const { addRequestedItem } = require("../controllers/requestedItemController")

router.post("/", addRequestedItem)

module.exports = router