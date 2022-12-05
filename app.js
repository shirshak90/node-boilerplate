require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// packages
const morgan = require("morgan");

// DB
const connectDB = require("./db/connect");

// routers
const testRouter = require("./routes/testRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/test", testRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
