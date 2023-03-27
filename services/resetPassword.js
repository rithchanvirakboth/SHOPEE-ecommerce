const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

const resetPasswordService = {
  resetPassword: async (req, res) => {
    try {
      const { password, confirmPassword } = req.body;
      const passwordHash = await bcrypt.hash(password, 12);

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Please re-enter the correct password" });
      }

      if(password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
      }

    
      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
          confirmPassword: passwordHash,
        }
      );

      res.json({ message: "Password successfully changed!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = resetPasswordService;