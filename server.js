const express = require("express");
const morgan = require("morgan");
const connectToDatabase = require("./database/db");
const logger = require("./middleware/logger");
const apps = require("./routes/apps");
require("dotenv").config();

const app = express();

// connect to the db
connectToDatabase();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// routes
app.use("/apps", apps);

// taking port from env file
const PORT = process.env.PORT;

// listening port
app.listen(PORT, () => {
  console.log(`Running express server on port ${PORT}`);
});
