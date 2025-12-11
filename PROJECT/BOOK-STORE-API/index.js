require("dotenv").config();
const connectToDB = require("./database/db");
const express = require("express");

const bookRoutes = require("./routes/bookRoute");

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to database
connectToDB();

// Middleware
app.use(express.json());

// Home Route
app.get("/api/v1/", async (req, res) => {
  res.status(201).json({
    sucess: true,
    message: "Welcome to book store",
  });
});

// Book Routes
app.use("/api/v1/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
