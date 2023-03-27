const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

const loginService = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const findAccount = await User.findOne({ email });
      if (!findAccount) {
        return res.status(400).json({ message: "User is not founded!" });
      }

      const credentialCompare = await bcrypt.compare(
        password,
        findAccount.password
      );

      if (!credentialCompare) {
        return res.status(400).json({ message: "Credential is incorrect!" });
      }

      const refreshToken = createRefreshToken({ id: findAccount._id });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/user/refreshToken",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.json({ msg: "Login Success!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = loginService;
