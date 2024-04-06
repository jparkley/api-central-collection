const express = require("express");
const router = express.Router();

router.route("/contacts").get((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

router.route("/contacts").post((req, res) => {
  res.status(200).json({ message: "Add new contact" });
});

router.route("/contacts/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

router.route("/contacts/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

router.route("/contacts/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;
