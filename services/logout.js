const logoutService = {
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: "/user/refreshToken" });
      return res.json({ message: "Logged out" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = logoutService;