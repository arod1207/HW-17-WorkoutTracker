const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("Connected to Database"));

app.use(logger("dev"));

app.use(express.static("public"));

app.use("/exercise", express.static("public"));

app.use("/stats", express.static("public"));

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
