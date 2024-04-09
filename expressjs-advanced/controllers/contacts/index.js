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
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  // res.status(200).json({ message: `Get contact for ${req.params.id}` });
  res.status(200).json(contact);
});

// @route: PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json(updatedContact);
});

// @route: DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res
    .status(200)
    .json({ message: `Successfully deleted contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
