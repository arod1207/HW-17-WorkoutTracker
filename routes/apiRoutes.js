const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", (req, res) => {
    Workout.create(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
