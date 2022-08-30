const nodemailer = require("nodemailer");
require("dotenv").config();
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "viettranvuhoang@gmail.com",
        pass: "aangcmzvrjolbbrz",
    },
});

module.exports = { transporter };
