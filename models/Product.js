const db = require('../db'); // Adjust the path to your db connection

const Product = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT id, name, price, description, picture, stock FROM products', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results); // Return the results (list of products)
            });
        });
    }
};

module.exports = Product;
