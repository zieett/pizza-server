const express = require("express");
const router = express.Router();
const { sendPayment } = require("../controllers/sendMailControllers");
router.route("/").post(sendPayment);

module.exports = router;
