require("dotenv").config();
const connectToDB = require("./database/db");
const express = require("express");
const app = express();

// Connect to database
connectToDB();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
});
