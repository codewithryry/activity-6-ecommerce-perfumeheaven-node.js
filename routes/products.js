const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Ensure this path is correct
const db = require('../db'); // Adjust the path if necessary
// Route to get products
router.get('/', productController.getProducts);

// Route to add a product
router.post('/add', productController.addProduct); // Ensure this matches your request

// Route to show all products
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.render('products', { products: results });
    });
});

// Route to show specific product details
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const user = req.session.user; // Get the user from the session (assuming you store user info in session)

    db.query('SELECT * FROM products WHERE id = ?', [productId], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (results.length > 0) {
            const product = results[0];
            res.render('productShowcase', { product, user }); // Pass user to the view
        } else {
            res.status(404).send('Product not found');
        }
    });
});



module.exports = router; // Export the router
