const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const db = require('./db'); // Import MySQL connection
const userController = require('./controllers/userController'); // Import user controller

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// Routes
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/cart', require('./routes/cart'));
app.use('/checkout', require('./routes/checkout'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/profile', require('./routes/profile'));
app.use('/admin', require('./routes/admin'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register')); // Ensure this line is present
app.use('/logout', require('./routes/logout')); // Add this line
app.use('/edit-profile', require('./routes/editProfile'));
app.use('/pending-orders', require('./routes/pendingOrders'));




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
