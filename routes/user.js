const express = require('express');
const router = express.Router();

const User = require('../modals/User');

const today = new Date();
const age = today.getFullYear() - 2001;

// @route GET /api/user
// @desc Get user info
// @access Public
router.get('/', async (req, res) => {
  try {
    const data = await User.findOne();
    res.send({ ...data._doc, age });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route POST /api/user
// @desc post user info
// @access Public
router.post('/', async (req, res) => {
  const {
    name,
    description,
    dob,
    location,
    phone,
    email,
    degree,
    website,
    skills,
    education,
    experience,
  } = req.body;
  try {
    const newUser = new User({
      name,
      description,
      dob,
      location,
      phone,
      email,
      degree,
      website,
      skills,
      education,
      experience,
    });

    const user = await newUser.save();

    res.json({ msg: 'Success' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
