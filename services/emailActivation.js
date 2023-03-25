const User = require('../model/user');
const jwt = require('jsonwebtoken');

const emailActivationService =  {
  activateAccount: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
      const { firstName, lastName, userName, email, password, confirmPassword } = user;

      const checkEmail = await User.findOne({ email });
      
      if (checkEmail) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword
      });

      await newUser.save();

      res.json({ msg: "Account has been activated!" });

    }catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
}

module.exports = emailActivationService;

