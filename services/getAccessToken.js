const jwt = require("jsonwebtoken");

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const accessTokenService = {
  getAccessToken: (req, res) => {
    try {
      const refresh_token = req.cookies.refreshToken;
      if (!refresh_token)
        return res.status(400).json({ message: "Please login now!" });

      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err)
            return res.status(400).json({ message: "Please login now!" });

          const access_token = createAccessToken({ id: user.id });

          res.json({ access_token });
        }
      );
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = accessTokenService;
