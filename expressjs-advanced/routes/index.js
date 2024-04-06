const express = require("express");
const router = express.Router();

router.route("/contacts").get((req, res) => {
  res.status(200).json({ message: "getting contacts using router" });
});

module.exports = router;
