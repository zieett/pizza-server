const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/usersController");
const { authMiddleware } = require("../lib/utils");
router.route("/test").get(authMiddleware, (req, res, next) => {
    if (req.jwt) {
        res.json({ success: true, msg: "you are in", jwt: req.jwt });
    } else {
        res.json({ success: false, msg: "You are not have permission to visit this page" });
    }
});
router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
