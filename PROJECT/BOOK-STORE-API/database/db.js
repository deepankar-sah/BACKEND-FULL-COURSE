require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database is connected sucessfully");
  } catch (error) {
    console.log("Failed to connect Database", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
