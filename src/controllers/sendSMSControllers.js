const { client } = require("../config/SMS");
const sendSMS = (req, res, next) => {
    const message = `Chúc mừng ${req.body.name}.Bạn đã đặt 1 đơn hàng Pizza Company thành công\nVui lòng thanh toán ${req.body.totalPrice} khi nhận được hàng`;
    client.messages
        .create({
            body: message,
            from: "+16626727763",
            to: "+84989172935",
        })
        .then((message) => {
            res.json(message);
        })
        .catch((err) => console.log(err));
};

module.exports = { sendSMS };
