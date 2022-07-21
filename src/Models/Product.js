const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Must provide"], trim: true },
    description: String,
    size: String,
    base: String,
    type: String,
    price: Number,
    class: {
        type: String,
        required: [true, "Must provide"],
        trim: true,
        enum: [
            "pizza",
            "salad",
            "appetizer",
            "beverage",
            "dessert",
            "iceCream",
            "macaroni",
            "spaghetti",
        ],
    },
    image: String,
});

module.exports = mongoose.model("Product", ProductSchema);
