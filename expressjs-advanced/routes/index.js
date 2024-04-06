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

module.exports = router;
