const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(400).json({
      msg: "Validation failed",
      errors: error.errors || error.message, 
    });
  }
};

module.exports = validate;
