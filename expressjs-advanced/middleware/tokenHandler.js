const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  const auth = req.headers.authorization || req.headers.Authorization;
  console.log("🚀 ~ validateToken ~ auth:", auth);

  if (auth && auth.startsWith("Bearer")) {
    const token = auth.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not authorized");
      }
      req.user = decoded.user;
      next();
    });
  }
});

module.exports = validateToken;
