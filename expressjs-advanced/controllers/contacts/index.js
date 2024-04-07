const Contact = require("../../models/contactModel");

// @route: GET /api/contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    // res.status(200).json({ message: "Get all contacts" });
    res.status(200).json(contacts);
  } catch (err) {
    throw new Error("Error while fetching contacts");
  }
};

// @route: POST /api/contacts
const createContact = async (req, res) => {
  // Use validation pipe ?
  // const { name, email, phone } = req.body;
  // if (!name || !email || !phone) {
  //   res.status(400);
  //   throw new Error("All fields are required");
  // }

  try {
    const { name, email, phone } = req.body;
    const newContact = await Contact.create({ name, email, phone });
    console.log("🚀 ~ createContact ~ newContact:", newContact);
    // res.status(201).json({ message: "Add new contact" });
    res.status(201).json(newContact);
  } catch (err) {
    throw new Error("Error while creating a new contact");
  }
};
// @route: GET /api/contacts/:id
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @route: PUT /api/contacts/:id
const updateContact = (req, res) => {
  res.status(201).json({ message: `Update contact for ${req.params.id}` });
};

// @route: DELETE /api/contacts/:id
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
