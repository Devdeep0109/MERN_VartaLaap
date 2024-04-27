const express = require("express");
const protectRoute = require("../middleware/protectRoute");
const { getUserForSideBar } = require("../controllers/user_controller");

const router = express.Router();
router.get("/", protectRoute ,getUserForSideBar);
module.exports = router;