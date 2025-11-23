const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true   
    },
    email: {
        type: String,
        required: true,  
        unique: true    
    },
    password: {
        type: String,
        required: true   
    },
    isAdmin: {
        type: Boolean,  
        default: false
    },
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); 
        next();
    } catch (error) {
        console.log("Error hashing password:", error.message);
        next(error);
    }
});

//  Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//  Generate JWT token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
             "thisistokenkey",
            { expiresIn: "30d" }
        );
    } catch (error) {
        console.log("Error generating token:", error.message);
    }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
