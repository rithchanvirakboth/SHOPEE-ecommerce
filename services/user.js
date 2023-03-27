const User = require("../model/user");

const userService = {
  getUserinformation: async (req, res) => {
    try {
      const id = req.user.id;

      const data = await User.findById(id)
        .select("-password")
        .select("-confirmPassword");

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllUserInformation: async (req, res) => {
    try {
      const data = await User.find().select("-password").select("-confirmPassword");

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getUserBySearch: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getUserByFilter: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userService;
