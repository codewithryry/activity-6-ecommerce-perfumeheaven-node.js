const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Ensure this path is correct

// Route to get products
router.get('/', productController.getProducts);

// Route to add a product
router.post('/add', productController.addProduct); // Ensure this matches your request

module.exports = router; // Export the router
