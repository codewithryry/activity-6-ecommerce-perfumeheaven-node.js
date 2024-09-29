const express = require('express');
const router = express.Router();

// Sample orders data (this could come from a database in a real application)
let orders = []; // This should hold the actual orders

// GET route for orders page
router.get('/', (req, res) => {
    const status = req.query.status || 'none';
    const user = req.session.user; // Retrieve user info from session
    res.render('orders', { orderStatus: status, user: user, orders }); // Pass orders and user info to the view
});

// POST route for checkout
router.post('/', (req, res) => {
    const cartItems = JSON.parse(req.body.cartItems); // Retrieve cart items from the request body
    const totalAmount = parseFloat(req.body.totalAmount); // Ensure it's a float

    // Here, you can process the checkout (e.g., save order to the database, payment processing)
    
    // Example of adding the order to the orders array
    orders.push({ cartItems, totalAmount, status: 'pending' });

    // After processing, redirect to the orders page
    res.redirect(`/orders?status=pending`); // Redirect to the orders page with status
});

module.exports = router;
