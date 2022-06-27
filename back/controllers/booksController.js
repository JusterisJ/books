const Books = require("../models/bookModel");
bodyParser = require("body-parser");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Books.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      releaseDate: req.body.releaseDate,
      category: req.body.category,
    });
    res.status(200).json({
      status: "success",
      data: newBook,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Books.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: deletedBook,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
