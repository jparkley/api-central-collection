const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts/");

const { registerUser, loginUser } = require("../controllers/users/");

router.route("/contacts/").get(getContacts);
router.route("/contacts/").post(createContact);

router.route("/contacts/:id").get(getContact);
router.route("/contacts/:id").put(updateContact);
router.route("/contacts/:id").delete(deleteContact);

router.post("/users/register", registerUser);

router.post("/users/login", loginUser);

router.get("/users/profile", (req, res) => {
  res.json({ message: "Here is the user profile" });
});

module.exports = router;
