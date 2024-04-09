const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts/");

router.route("/contacts/").get(getContacts);
router.route("/contacts/").post(createContact);

router.route("/contacts/:id").get(getContact);
router.route("/contacts/:id").put(updateContact);
router.route("/contacts/:id").delete(deleteContact);

router.post("/users/register", (req, res) => {
  res.json({ message: "User register here" });
});

router.post("/users/login", (req, res) => {
  res.json({ message: "User Login here" });
});

router.get("/users/profile", (req, res) => {
  res.json({ message: "Here is the user profile" });
});

module.exports = router;
