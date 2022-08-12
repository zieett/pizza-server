const { transporter, mailOption } = require("../config/mail");
const sendPayment = (req, res, next) => {
    const message = `Bạn đã đặt 1 đơn hàng Pizza Company thành công\nVui lòng thanh toán ${req.body.totalPrice} khi nhận được hàng`;
    let mailOption = {
        from: "viettranvuhoang@gmail.com",
        to: "hvietga1@gmail.com",
        subject: "Pizza Company xác nhận đơn hàng",
        text: message,
    };
    transporter.sendMail(mailOption, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.body);
            res.json({ success: true, msg: "Email is sent", data: req.body });
        }
    });
};

module.exports = { sendPayment };
