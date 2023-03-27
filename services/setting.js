const User = require('../model/user');
const bcrypt = require('bcrypt');

const settingService = {  
  updateData: async (req, res) => {
    try {
      // const id = req.user.id;
      
      const { lastName, firstName, avatar, userName, password } = req.body;

      const passwordHashed = await bcrypt.hash(password, 12);

      await User.findByIdAndUpdate({_id: req.user.id}, {
        lastName,
        firstName,
        userName,
        avatar,
        password: passwordHashed,
        confirmPassword: passwordHashed
      });

      res.json({ message: 'User updated successfully' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateRole: async (req, res) => {
    try {
      const { role } = req.body;

      await User.findByIdAndUpdate({_id: req.params.id}, {
        role
      });

      res.json({ message: 'Role updated successfully' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.json({ message: 'User deleted successfully' });

    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = settingService;