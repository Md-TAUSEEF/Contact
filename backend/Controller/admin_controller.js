const User = require("../Controller/modules/user_modules");
const Contact=require("../Controller/modules/Contact_Modules")
const Getalluser = async (req, res) => {
  try {
    const UserData = await User.find();

    if (!UserData || UserData.length === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }

    return res.status(200).json(UserData);

  } catch (error) {
  
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Error occurred while fetching user information" });
  }
};

//get adimin contact data

const Getallcontact=async(req,res)=>{
    try{
        const allcontact=await Contact.find();
         if (!allcontact || allcontact.length === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }

    return res.status(200).json(allcontact);

    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"error occured while fetching user information"});
    }
}

module.exports={Getalluser,Getallcontact};


