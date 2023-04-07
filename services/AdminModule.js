const User = require("../model/user");
const bcrypt = require("bcrypt");

const AdminModule = {
  createUser: async (req, res) => {
    try {
      const { firstName, lastName, userName, email, password, confirmPassword, bio, phoneNumber, address } = req.body;
      
      if(!firstName || !lastName || !userName || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      if(password.length < 6 || password.length > 20) {
        return res.status(400).json({ msg: "Password must be between 6 and 20 characters" });
      }
      if(password !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      if(!validateEmail(email)) {
        return res.status(400).json({ msg: "Please enter a valid email" });
      }
      const checkEmail = await User.findOne({ email });
      if(checkEmail) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      const checkUsername = await User.findOne({ userName });
      if(checkUsername) {
        return res.status(400).json({ msg: "Username already exists" });
      }

      const passwordHashed = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password: passwordHashed,
        confirmPassword: passwordHashed,
        bio,
        phoneNumber,
        address
      });

      await newUser.save();
      res.json({ msg: "Register new account succesfully!! Ready to start now" });
      
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateUser: async (req, res) => {
      try {
        const {
          lastName,
          firstName,
          avatar,
          userName,
          bio,
          phoneNumber,
          address,
        } = req.body;
  
        await User.findOneAndUpdate(
          { _id: req.params.id },
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

  deleteUser: async (req, res) => {

  }
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = AdminModule;