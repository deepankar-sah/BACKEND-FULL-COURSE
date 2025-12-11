const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book Title is Required"],
      trim: true,
      maxLength: [100, "Book title can't be above 100 charchters"],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
      maxLength: [50, "Author name can't exceed 50 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxLength: [500, "Description can't exceed 500 characters"],
    },

    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    publishedYear: {
      type: Number,
      required: [true, "Published Year is required"],
      min: [1500, "Year must be after 1500"],
      max: [new Date().getFullYear(), "Year can't be in the future"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", BookSchema);
