if (process.env.NODE_ENV !== "production") { require('dotenv').config(); } 
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const route = require('./routes')
app.use(route)

// Error Handler
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
