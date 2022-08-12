const nodemailer = require("nodemailer");
require("dotenv").config();
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "viettranvuhoang@gmail.com",
        pass: process.env.EMAIL_APP_PASS,
    },
});

module.exports = { transporter };
