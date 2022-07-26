const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const routes = require("./routes/ToDoRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);
mongoose
  .connect(process.env.mongo_url)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("app started on 5000");
});
