const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_1zp8fxcd:nt7vsjepohhgtf1g7gu0gff1p1@ds249787.mlab.com:49787/heroku_1zp8fxcd";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
