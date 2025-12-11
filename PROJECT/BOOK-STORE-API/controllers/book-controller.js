const book = require("../models/book");

// Get All Book
const getAllBook = async (req, res) => {
  try {
    const bookData = await book.find();
    if (bookData) {
      res.status(201).json({
        sucess: true,
        message: "book Fetch Sucessfully",
        data: bookData,
      });
    }
  } catch (error) {
    console.log("Failed to fetch books", error);
  }
};

// Get Book By Id
const getBookById = async (req, res) => {};

// Add New Book
const addNewBook = async (req, res) => {
  try {
    const newBookData = await book.create(req.body);
    if (newBookData) {
      res.status(201).json({
        sucess: true,
        message: "Book Add Succesfully",
        data: newBookData,
      });
    }
  } catch (error) {
    console.log("Failed to Add Book", error);
  }
};

// UpdateBook
const updateBook = async (req, res) => {};

// DeleteBook
const deleteBook = async (req, res) => {};

module.exports = {
  getAllBook,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
