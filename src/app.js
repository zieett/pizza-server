const express = require("express");
const app = express();
const morgan = require("morgan");
const products = require("./routes/products");
const users = require("./routes/users");
const sendPayment = require("./routes/sendPayment");
const sendSMS = require("./routes/sendSMS");
const connectDB = require("./config/connect");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./config/mail");

var port = process.env.PORT || 300;

app.use(express.json());
//Encode for form submit body
app.use(
    express.urlencoded({
        extended: true,
    })
);
//Passport initialize
// require("./config/passport")(passport);
// app.use(passport.initialize());
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.static("src/static"));
app.use(morgan("tiny"));
app.use("/products", products);
app.use("/", users);
app.use("/sendPayment", sendPayment);

app.use("/sendSMS", sendSMS);

const start = async () => {
    try {
        await connectDB(
            "mongodb+srv://viet123:0989172935@pizza.cxasxu7.mongodb.net/Pizza-Store?retryWrites=true&w=majority"
        );
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
