const express = require('express');
const router = express.Router();
const { createHubspotUser } = require('../controller/contactController');
const { 
  logoutUser,
  loginUser,
  observeSignup,
  observeLogin,
  signupUser,
  updateSignupName
} = require('../controller/authController');
const {
  createUser,
  getUser,
  getUsername
} = require('../controller/userController');

router.post('/signup', createHubspotUser, signupUser, observeSignup, createUser);
router.post('/login', loginUser, observeLogin);
router.post('/logout', logoutUser);

module.exports = router;