const express = require("express");
const passport = require("passport");
const { googleAuthSuccess, logout } = require("../controllers/googleAuthController");

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleAuthSuccess
);

router.get("/logout", logout);

module.exports = router;
