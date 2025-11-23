const Contact=require("../Controller/modules/Contact_Modules");

const Contact_Form=async(req,res)=>{
    try{
        const response=req.body;

        await Contact.create(response);
        return res.status(200).json({msg:"sucessfull create contactform"});

    }catch(error){
        console.log("this error is coming when contact form is making");
    }
}

module.exports=Contact_Form;