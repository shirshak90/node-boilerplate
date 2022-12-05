const Test = require("../models/Test");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllTest = async (req, res) => {
  const tests = await Test.find({});
  throw new CustomError.BadRequestError("Test Error");
  res.status(StatusCodes.OK).json({ tests });
};

const createTest = async (req, res) => {
  const test = await Test.create(req.body);
  res.status(StatusCodes.CREATED).json({ test });
};

module.exports = { getAllTest, createTest };
