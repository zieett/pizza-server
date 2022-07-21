const mongoose = require("mongoose");

const SpaghettiSchema = new mongoose.Schema({
    name: { type: String, require: [true, "Must provide"], trim: true },
    description: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model("Spaghetti", SpaghettiSchema);
