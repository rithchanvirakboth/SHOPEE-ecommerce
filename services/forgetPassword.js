const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const sendMail = require("./sendMail");

const {
  txtReset,
  descriptionReset,
  title,
} = require("../utils/emailTemplate");

const CLIENT_URL = process.env.CLIENT_URL;

const forgetPasswordService = {
  forgetPassword: async (req, res) => {
    try {
      const { email } = req.body;

      const checkUser = await User.findOne({ email });

      if (!checkUser) {
        return res.status(400).json({ msg: "Email does not exist" });
      }

      const access_token = createAccessToken({ id: checkUser._id });
      const url = `${CLIENT_URL}/user/reset/${access_token}`;

      sendMail(email, url, txtReset, descriptionReset, title);

      res.json({ msg: "Re-send the password, please check your email."});
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = forgetPasswordService;
