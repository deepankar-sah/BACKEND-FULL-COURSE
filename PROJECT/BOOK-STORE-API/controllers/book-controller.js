const book = require("../models/book");

// Get All Book
const getAllBook = async (req, res) => {
  try {
    const bookData = await book.find();
    if (bookData?.length < 1) {
      res.status(404).json({
        sucess: false,
        message: "No books found in store",
      });
    } else {
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
const getBookById = async (req, res) => {
  try {
    const BookById = await book.findById(req.params.id);
    if (!BookById) {
      res.status(404).json({
        sucess: false,
        message: "Book not found !! Please try with different book id ",
      });
    } else {
      res
        .status(201)
        .json({ sucess: true, message: "Book Found", data: BookById });
    }
  } catch (error) {
    res.status(404).json({ sucess: false, message: "failed to fetch book" });
    console.log("Failed to fetch book");
  }
};

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
const updateBook = async (req, res) => {
  try {
    const currentBookId = req.params.id;
    const updateBook = await book.findByIdAndUpdate(currentBookId, req.body, {
      new: true,
    });
    if (!updateBook) {
      res.status(200).json({ message: "falied to update book" });
    } else {
      res
        .status(201)
        .json({ message: "Book Updated Sucessfully", data: updateBook });
    }
  } catch (error) {
    res.status(500).json({ sucess: false, message: "Failed to update book" });
  }
};

// DeleteBook
const deleteBook = async (req, res) => {
  try {
    const DeleteBook = await book.findByIdAndDelete(req.params.id);
    if (!DeleteBook) {
      res
        .status(404)
        .json({ sucess: false, message: "Book not Found with current id" });
    } else {
      res
        .status(201)
        .json({ sucess: true, message: "Book Deleted Sucessfuly" });
    }
  } catch (error) {
    res.status(404).json({ sucess: false, message: "failed to delete book" });
  }
};

module.exports = {
  getAllBook,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
