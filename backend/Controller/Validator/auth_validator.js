const { z } = require("zod");

const SignupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 letters" })
    .max(255, { message: "The maximum length of name is 255" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "The maximum length of email is 255" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be at least 3 characters" })
    .max(255, { message: "The maximum length of password is 255" }),
});

module.exports = SignupSchema;
