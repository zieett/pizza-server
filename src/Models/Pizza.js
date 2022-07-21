const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Must provide"], trim: true },
    description: String,
    size: String,
    base: String,
    type: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model("Pizza", PizzaSchema);
