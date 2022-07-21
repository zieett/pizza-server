const Pizza = require("../Models/Pizza");
const Product = require("../Models/Product");
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};
const getPizzaByType = async (req, res) => {
    try {
        const pizzas = await Product.find({ class: "pizza", type: req.params.type });
        res.json({ pizzas });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};
const createProduct = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.json({ products });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};
module.exports = {
    getAllProducts,
    createProduct,
    getPizzaByType,
};

// const getPizzas = async (req, res) => {
//     try {
//         const pizzas = await Pizza.find({});
//         res.json(pizzas);
//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// };
// const getPizza = async (req, res) => {
//     try {
//         const pizzas = await Pizza.find({});
//         res.json(pizzas);
//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// };
// const createPizza = async (req, res) => {
//     try {
//         const pizza = await Pizza.create(req.body);
//         console.log(pizza, req.body);
//         res.json({ pizza });
//     } catch (error) {
//         res.status(500).json(error);
//         console.log(err);
//     }
// };
