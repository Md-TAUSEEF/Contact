const express=require("express");
const adminroute=require("../Controller/admin_controller")
const authmiddleware=require("../Controller/Middlewears/authmiddlewear")
const adminmiddlewear=require("../Controller/Middlewears/admin_middlewear");
const router=express.Router();
router.route("/user").get(authmiddleware,adminmiddlewear,adminroute.Getalluser);
router.route("/contact").get(authmiddleware,adminroute.Getallcontact);

module.exports=router;