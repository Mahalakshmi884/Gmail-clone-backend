const Email = require('../models/Email');

const getEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmail = async (req, res) => {
  const email = new Email(req.body);
  try {
    const newEmail = await email.save();
    res.status(201).json(newEmail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getEmails, createEmail };
