const express = require("express");
const {getMessage ,sendMessage} = require("../controllers/message_controller");
const protectRoute = require("../middleware/protectRoute");


const router =express.Router();

router.get("/:id",protectRoute ,getMessage)
router.post("/send/:id",protectRoute ,sendMessage)

module.exports = router;