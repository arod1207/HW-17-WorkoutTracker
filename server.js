const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/workout";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, options);

const db = mongoose.connection;

db.once("open", () => console.log("Connected to Database"));

app.use(logger("dev"));

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
