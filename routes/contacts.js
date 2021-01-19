const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const emailer = require('../middleware/emailer');

const Contact = require('../modals/Contact');

// @route POST /api/contacts
// @desc POST user info
// @access Public
router.post(
  '/',
  [
    check('userName', 'Name is required').not().isEmpty(),
    check('userEmail', 'Please include a valid email').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Send Email
    emailer(req, res);

    const { userName, userEmail, subject, message } = req.body;

    try {
      const newContact = new Contact({
        userName,
        userEmail,
        subject,
        message,
      });

      await newContact.save();

      res.json({ msg: 'Success' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server Error' });
    }
  }
);

module.exports = router;
