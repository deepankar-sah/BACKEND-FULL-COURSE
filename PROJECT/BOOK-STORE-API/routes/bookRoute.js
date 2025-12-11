const {
  getAllBook,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");
const express = require("express");

// Create Express Router
const router = express.Router();

// Book Routes

// Get all Book
router.get("/", getAllBook);

// Get book by Id
router.get("/:id", getBookById);

// Add new Book
router.post("/add", addNewBook);

// Update Book
router.put("/update/:id", updateBook);

// Delete Book
router.delete("/delete/:id", deleteBook);

module.exports = router;
