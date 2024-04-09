const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const { Error } = require("mongoose");

// @route: POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userCheck = await User.findOne({ email });
  if (userCheck) {
    res.status(400);
    throw new Error("Email already exist");
  }
  const encryptedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: encryptedPassword,
  });
  res.json(newUser);
});

// @route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    res.status(401);
    throw new Error("Authentication failed");
  }

  const accessToken = await jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1m" }
  );
  res.status(200).json({ accessToken });
});

module.exports = {
  registerUser,
  loginUser,
};
