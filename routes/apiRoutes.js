const express = require("express");
const Router = express.Router();
const db = require("../models");

Router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((workout) => {
    res.send(workout);
  });
});

Router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById({ __id });
});

module.exports = Router;
