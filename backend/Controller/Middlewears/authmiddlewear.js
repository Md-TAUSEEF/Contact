const jwt = require("jsonwebtoken");
const User = require("../modules/user_modules");

const authmiddleware = async (req, res, next) => {

    //first taking token from postmen 
    const token = req.header("Authorization");

    //then check token is coming or not
    if (!token) {
        return res.status(401).json({ msg: "User is not logged in. Token not provided." });
    }

    //if yes token is coming then remove the Beraer and space

    const jwttoken = token.replace("Bearer ", "").trim();

    try {

        //then taken token from pstmen and token key compai both are same or not
        const isVerified = jwt.verify(jwttoken, "thisistokenkey");
        console.log(isVerified);


         //if yes same then hide password and taking all data
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

        req.token = token;
        req.user = userData;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
};

module.exports = authmiddleware;
