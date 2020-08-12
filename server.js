const express = require("express");
const mongoose = require("./seeders/seed");
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.static("public"));

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
