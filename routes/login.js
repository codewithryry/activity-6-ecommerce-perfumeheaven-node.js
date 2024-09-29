const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure this path is correct

// Login Route
router.get('/', (req, res) => {
    res.render('login'); // Render the login view
});

// Handle login POST request
router.post('/', userController.login); // Ensure `userController.login` is defined

module.exports = router; // Ensure the router is exported
