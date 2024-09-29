const db = require('../db'); // Ensure you have your database connection

// Controller function to fetch and render pending orders
exports.getPendingOrders = (req, res) => {
    const sql = `
        SELECT users.username, orders.id AS order_id, orders.total, orders.createdAt 
        FROM orders 
        JOIN users ON orders.userId = users.id 
        WHERE orders.status = 'pending';
    `;

    db.query(sql, (error, results) => {
        if (error) {
            console.error('Error fetching pending orders:', error);
            return res.status(500).send('Error fetching orders');
        }
        
        // Render the pendingOrders view and pass the results
        res.render('pendingOrders', { orders: results });
    });
};
