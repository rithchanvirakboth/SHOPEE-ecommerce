const User = require("../model/user");
const adminAuth = async(req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id })
    if (user.role !== "admin") {
      return res.status(400).json({ message: "You don't have access to this page" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = adminAuth;