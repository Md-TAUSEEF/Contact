const Authmiddlewear = (req, res, next) => {
  try {
    const isAdmin = req.user?.isAdmin;
    
    if (!isAdmin) {
      return res.status(403).json({ message: "Access denied: Not an admin" });
    }

    next();
  } catch (error) {
    console.error("Error checking admin status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = Authmiddlewear;
