if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require("./routes/userRouter");
const userProfileRouter = require("./routes/userProfileRouter");

app.use("/api/users", userRouter);
app.use("/api/user-profiles", userProfileRouter);

// Error Handler
app.use(errorHandler);

module.exports = app;
