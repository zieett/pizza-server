const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: [true, "Must provide"] },
    hash: String,
    salt: String,
});

module.exports = mongoose.model("User", UserSchema);
