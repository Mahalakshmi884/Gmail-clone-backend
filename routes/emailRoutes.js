const express = require('express');
const { getEmails, createEmail } = require('../controllers/emailController');
const router = express.Router();

router.get('/', getEmails);
router.post('/', createEmail);

module.exports = router;
