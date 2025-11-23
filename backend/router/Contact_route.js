const express=require("express");
const Contact_Form=require("../Controller/contactcontroller")
const router=express.Router();
router.route("/contact").post(Contact_Form);

module.exports=router;