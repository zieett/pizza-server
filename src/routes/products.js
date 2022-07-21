const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    getPizzaByType,
} = require("../controllers/productsController");
router.route("/").get(getAllProducts).post(createProduct);
router.route("/:type").get(getPizzaByType);
// router.route("/pizza").get(getPizzas);

module.exports = router;
