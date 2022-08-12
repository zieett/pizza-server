const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => {
            console.log("Connect to DB successfully...");
        })
        .catch((err) => console.log(err));
};

module.exports = connectDB;
