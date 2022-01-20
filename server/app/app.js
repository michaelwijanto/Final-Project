if (process.env.NODE_ENV !== "production") { require('dotenv').config(); } 
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require("./routes/userRouter");
const userProfileRouter = require("./routes/userProfileRouter");
const contentRouter = require("./routes/contentRouter")
const userContent = require('./routes/UserContentRouter')

app.use("/api/users", userRouter);
app.use("/api/user-profiles", userProfileRouter);
app.use("/api/contents",contentRouter)
app.use("/api/user-contents",userContent)

// Error Handler
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
