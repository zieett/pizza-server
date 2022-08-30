const accountSid = "AC2c5c64174d24fc56f53ce969d2d09c04";
const authToken = "6c288d56c6c61f198b6e45ae55e9ca79";
const client = require("twilio")(accountSid, authToken);

module.exports = { client };
