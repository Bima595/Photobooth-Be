const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @desc    Google OAuth login success
const googleAuthSuccess = (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  const token = generateToken(req.user);
  res.status(200).json({ token, user: req.user });
};

// @desc    Logout user
const logout = (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: "Logged out successfully" });
  });
};

module.exports = { googleAuthSuccess, logout };
