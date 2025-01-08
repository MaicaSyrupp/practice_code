const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// POST /signup
router.post('/signup', registerUser);

// POST /login
router.post('/login', loginUser);

module.exports = router;
