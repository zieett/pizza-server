const express = require("express");
const app = express();
const morgan = require("morgan");
const products = require("./routes/products");
const connectDB = require("../src/db/connect");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = 3001;
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.static("src/static"));
app.use(morgan("tiny"));
//Encode for form submit body
app.use(
    express.urlencoded({
        extended: false,
    })
);
//Json parse
app.use(express.json());
//
app.use("/products", products);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
