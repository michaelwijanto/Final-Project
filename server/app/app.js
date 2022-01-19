if (process.env.NODE_ENV !== "production") { require('dotenv').config(); } 
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const router = require("./routes/contentRouter")
const errorHandler = require("./middlewares/errorHandler");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router)
app.use("/users", userRouter);
app.use(errorHandler);
module.exports = app;
