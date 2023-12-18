const express = require('express');
const app = express();
const routes = require('./src/routes/file');
const helmet = require('helmet');

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
    next();
});

// Middleware for security headers
app.use(helmet());

// Middleware for serving static files
app.use(express.static('public'));

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Use the routes defined in index.js
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
