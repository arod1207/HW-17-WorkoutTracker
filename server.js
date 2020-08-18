const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const db = mongoose.connection;

db.once("open", () => console.log("Connected to Database"));

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
