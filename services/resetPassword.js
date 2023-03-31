const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

const resetPasswordService = {
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 12);
      
      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
          confirmPassword: passwordHash,
        }
      );

      res.json({ msg: "Password successfully changed!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
}

module.exports = resetPasswordService;