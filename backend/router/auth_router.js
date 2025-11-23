const express=require("express")
const router=express.Router();
const auth_controller=require("../Controller/auth_controller");
const SignupSchema=require("../Controller/Validator/auth_validator");
const validate=require("../Controller/Middlewears/velidate");
const authmiddlewear=require("../Controller/Middlewears/authmiddlewear")



router.route("/register").post(validate(SignupSchema),auth_controller.register);

router.route("/login").post(validate(SignupSchema),auth_controller.loginPage);

router.route("/user").get(authmiddlewear,auth_controller.users)


module.exports = router;