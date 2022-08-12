const User = require("../Models/User");
const utils = require("../lib/utils");
const login = (req, res, next) => {
    User.findOne({ userName: req.body.userName })
        .then((user) => {
            if (!user) {
                res.status(401).json({ success: false, msg: "Could not find user" });
            }

            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);

            if (isValid) {
                const tokenObject = utils.issueJWT(user);
                res.status(200).json({
                    success: true,
                    id: user.id,
                    user: { name: user.userName, email: user.email },
                    token: tokenObject.token,
                    expiresIn: tokenObject.expires,
                });
            } else {
                res.status(401).json({ success: false, msg: "Invalid username or password" });
            }
        })
        .catch((err) => next(err));
};

const register = (req, res, next) => {
    // Generate hash password using crypto library
    const saltHash = utils.genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    //Create new user base on hash password and username
    const newUser = new User({
        userName: req.body.userName,
        hash: hash,
        salt: salt,
    });

    //Save user to the database
    newUser
        .save()
        .then((user) => {
            // Create JWT token
            const jwt = utils.issueJWT(user);

            //Response the user include the jwt token
            res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires });
        })
        .catch((err) => next(err));
};

module.exports = {
    login,
    register,
};
