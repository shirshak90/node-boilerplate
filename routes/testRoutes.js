const express = require("express");
const { getAllTest, createTest } = require("../controllers/testController");
const router = express.Router();

router.route("/").get(getAllTest).post(createTest);

module.exports = router;
