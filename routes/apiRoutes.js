const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((error) => {
        res.json(error);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((error) => {
        res.json(error);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
