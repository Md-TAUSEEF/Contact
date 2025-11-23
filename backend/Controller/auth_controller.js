const User = require("../Controller/modules/user_modules");
const bcrypt=require("bcrypt");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "This email already exists" });
        }

        // Create new user
        const userCreated = await User.create({ username, email, password });

        // Generate token
        const token = await userCreated.generateToken();

        res.status(201).json({
            msg: "User registered successfully",
            user: {
                id: userCreated._id.toString(),
                username: userCreated.username,
                email: userCreated.email
            },
            token
        });

    } catch (error) {
        console.log("Error in register:", error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


//this is login page code

const loginPage = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Find user by email
    const userExist = await User.findOne({ email }); // make sure "User" is your mongoose model
    if (!userExist) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Step 2: Compare password
    const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Password does not match" });
    }

    // Step 3: Generate token
    const token = await userExist.generateToken();

    // Step 4: Send response
    res.status(200).json({
      msg: "User login successful",
      token: token,
      userId: userExist._id.toString(),
    });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ msg: "Server error, please try again later" });
  }
};

//taking tokej for autowrite the code 

const users=async(req,res)=>{
  try{
    const userData=req.user;
    console.log(userData);
    return res.status(200).json({msg:userData});

  }catch(error){
    console.log("this error is coming when user taking token");
  }
}


module.exports = { register,loginPage,users };
