const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contactModel");

// @route: GET /api/contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  // res.status(200).json({ message: "Get all contacts" });
  res.status(200).json(contacts);
});

// @route: POST /api/contacts
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const newContact = await Contact.create({ name, email, phone });
  console.log("🚀 ~ createContact ~ newContact:", newContact);
  // res.status(201).json({ message: "Add new contact" });
  res.status(201).json(newContact);
});

// @route: GET /api/contacts/:id
const getContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// @route: PUT /api/contacts/:id
const updateContact = asyncHandler((req, res) => {
  res.status(201).json({ message: `Update contact for ${req.params.id}` });
});

// @route: DELETE /api/contacts/:id
const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
