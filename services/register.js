const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require('./sendMail');

const registerService = {
  register: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword,
      } = req.body;

      if (
        !firstName ||
        !lastName ||
        !userName ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      if (firstName.length < 3 || firstName.length > 20) {
        return res
          .status(400)
          .json({ msg: "First name must be between 3 and 20 characters" });
      }

      if (lastName.length < 3 || lastName.length > 20) {
        return res
          .status(400)
          .json({ msg: "Last name must be between 3 and 20 characters" });
      }

      if (userName.length < 3 || userName.length > 20) {
        return res
          .status(400)
          .json({ msg: "Username must be between 3 and 20 characters" });
      }

      if (password.length < 6 || password.length > 20) {
        return res
          .status(400)
          .json({ msg: "Password must be between 6 and 20 characters" });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({ msg: "Please enter a valid email" });
      }

      const checkEmail = await User.findOne({ email });
      if (checkEmail) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      const checkUsername = await User.findOne({ userName });
      if (checkUsername) {
        return res.status(400).json({ msg: "Username already exists" });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = {
        firstName,
        lastName,
        userName,
        email,
        password: passwordHash,
        confirmPassword: passwordHash
      }

      const activate_token = createActivationToken(newUser);

      const url = `${process.env.CLIENT_URL}/user/activate/${activate_token}`;
      sendMail(email, url, "Verify your email address", "Congratulations! You're almost set to start using SHOPEE Ecommerce website.", "Welcome to the SHOPEE Ecommerce website");

      res.json({ msg: "Register Success! Please activate your email to start." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

module.exports = registerService;
