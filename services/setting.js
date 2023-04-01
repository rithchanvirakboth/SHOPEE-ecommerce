const User = require("../model/user");
const bcrypt = require("bcrypt");

const settingService = {
  updateData: async (req, res) => {
    try {
      const {
        lastName,
        firstName,
        avatar,
        bio,
        phoneNumber,
        userName,
        address,
      } = req.body;

      await User.findByIdAndUpdate(
        { _id: req.user.id },
        {
          lastName,
          firstName,
          userName,
          bio,
          avatar,
          phoneNumber,
          address,
        }
      );

      res.json({ message: "User updated successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updatePassword : async (req, res) => {
    try {
      const { password } = req.body;  
      const passwordHash = await bcrypt.hash(password, 10);

      await User.findByIdAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
          confirmPassword: passwordHash,
        }
      );

      res.json({ message: "Password updated successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },


  updateRole: async (req, res) => {
    try {
      const { role } = req.body;

      await User.findByIdAndUpdate(
        { _id: req.params.id },
        {
          role,
        }
      );

      res.json({ message: "Role updated successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.json({ message: "User deleted successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = settingService;
