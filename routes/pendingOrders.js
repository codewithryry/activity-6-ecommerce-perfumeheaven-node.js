const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define the route to get pending orders
router.get('/', orderController.getPendingOrders);

module.exports = router;
