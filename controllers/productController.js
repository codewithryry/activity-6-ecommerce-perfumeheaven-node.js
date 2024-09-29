const db = require('../db'); // Adjust the path as needed
const Product = require('../models/Product'); // Ensure the path is correct

const productController = {
    getProducts: async (req, res) => {
        try {
            // Fetch products using the Product model
            const products = await Product.getAll(); // Use the model to fetch products
            
            // Render the products.ejs view, passing both products and user session
            res.render('products', { products, user: req.session.user });
        } catch (err) {
            console.error('Error details:', err);
            return res.status(500).send('Error fetching products');
        }
    },

    addProduct: async (productData) => {
        const { name, price, description, picturePath, stock } = productData;
        try {
            // SQL query to add a product to the database
            const query = 'INSERT INTO products (name, price, description, picture, stock) VALUES (?, ?, ?, ?, ?)';
            await db.query(query, [name, price, description, picturePath, stock]); // Pass stock here
            return { name, price, description, picture: picturePath, stock }; // Return newly added product details
        } catch (err) {
            throw new Error(err); // Handle any errors during product insertion
        }
    },
    
};

module.exports = productController;
