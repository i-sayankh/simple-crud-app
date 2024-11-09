const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoute = require('./routes/product.route');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected!');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    }).catch((err) => console.log('Connection failed!', err));