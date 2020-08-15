const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create({ $push: { exercises: body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", ({ body }, res) => {
    Workout.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // app.put("/api/workouts/:id", function (req, res) {
  //   Workout.updateOne(
  //     { _id: req.params.id },
  //     { exercises: req.body.exercises }
  //   ).then(function (data) {
  //     res.json(data);
  //   });
  // });
};
