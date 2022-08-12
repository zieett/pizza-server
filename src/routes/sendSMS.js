const express = require("express");
const router = express.Router();
const { sendSMS } = require("../controllers/sendSMSControllers");
router.route("/").post(sendSMS);
module.exports = router;
