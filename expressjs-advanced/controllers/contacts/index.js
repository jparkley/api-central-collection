// @route: GET /api/contacts
const getContacts = (req, res) => {
  res.status(200).json({ message: "C Get all contacts" });
};

// @route: POST /api/contacts
const createContact = (req, res) => {
  res.status(200).json({ message: "C Add new contact" });
};
// @route: GET /api/contacts/:id
const getContact = (req, res) => {
  res.status(200).json({ message: `C Get contact for ${req.params.id}` });
};

// @route: PUT /api/contacts/:id
const updateContact = (req, res) => {
  res.status(201).json({ message: `C Update contact for ${req.params.id}` });
};

// @route: DELETE /api/contacts/:id
const deleteContact = (req, res) => {
  res.status(200).json({ message: `C Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
